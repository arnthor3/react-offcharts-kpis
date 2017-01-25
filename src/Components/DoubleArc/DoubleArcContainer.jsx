import React, { Component, PropTypes } from 'react';
import { select } from 'd3-selection';
import { interpolate } from 'd3-interpolate';
import { scaleLinear } from 'd3-scale';
import 'd3-transition';
import { arc } from 'd3-shape';
import * as ease from 'd3-ease';
import clone from 'react-offcharts-core/Utils/cloneChildren';
import * as dim from 'react-offcharts-core/Helpers/arcDimension';
import * as ch from '../../Utils/doublearc_constants';
import * as arcs from '../../Utils/dimensions';

const shape = PropTypes.shape({
  fill: PropTypes.string,
  stroke: PropTypes.string,
  value: PropTypes.number,
  outerRadius: PropTypes.number,
  innerRadius: PropTypes.number,
});

export default class ArcContainer extends Component {
  static propTypes = {
    startAngle: PropTypes.number,
    value: shape,
    benchmark: shape,
    animationEase: PropTypes.string,
    animationTime: PropTypes.number,
  }

  componentDidMount() {
    this.renderArc();
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.width !== this.props.width ||
    nextProps.height !== this.props.height) {
      return true;
    }
    if (nextProps.value.value === this.props.value.value ||
    this.props.benchmark.value === nextProps.benchmark.value) {
      return false;
    }
    return true;
  }
  componentWillUpdate(nextProps, nextState) {
    if (nextProps.value.value !== this.props.value.value ||
    this.props.benchmark.value !== nextProps.benchmark.value) {
      this.animateOut();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.renderArc();
  }

  animateOut() {
    const els = select(this.container);
    const centerTextContainer = els.selectAll(`.${ch.DOUBLE_ARC_CENTER_ITEM}`);
    centerTextContainer
      .transition()
      .duration(250)
      .ease(ease.easeCubicInOut)
      .attr('transform', 'scale(0)');
  }

  animateIn() {
    const els = select(this.container);
    els.select(`.${ch.DOUBLE_ARC_CENTER_TEXT_TOP_VALUE}`).text(this.props.value.value);
    els.select(`.${ch.DOUBLE_ARC_CENTER_TEXT_BOTTOM_VALUE}`).text(this.props.benchmark.value)
    const centerTextContainer = els.selectAll(`.${ch.DOUBLE_ARC_CENTER_ITEM}`);
    centerTextContainer
      .transition()
      .duration(500)
      .delay((d, i) => i * 65)
      .ease(ease.easeCubicInOut)
      .attr('transform', 'scale(1)');
  }

  animate() {
    const { valueScale, benchScale } = arcs.getScales(this.props);
    const els = select(this.container);
    const forecast = els.select(`.${ch.FORECAST_PATH}`);
    const value = els.select(`.${ch.VALUE_PATH}`);
    value
      .transition()
      .duration(1500)
      .ease(ease.easeSinInOut)
      .attrTween('d', () => {
        const interValue = (
          interpolate(
            value.node().old || this.props.startAngle,
            valueScale(this.props.value.value))
        );
        const interBench = (
          interpolate(
            forecast.node().old || this.props.startAngle,
            benchScale(this.props.benchmark.value),
          )
        );
        const { radius } = dim.dimensions(this.props);
        const { valueArc, benchArc } = arcs.getBackgroundArcs(this.props, radius);
        return (t) => {
          forecast.attr('d', benchArc.endAngle(interBench(t))());
          return valueArc.endAngle(interValue(t))();
        };
      })
      .on('end', () => {
        forecast.node().old = benchScale(this.props.benchmark.value);
        value.node().old = valueScale(this.props.value.value);
        this.animateIn();
      });
  }

  draw() {
    const els = select(this.container);
    const forecast = els.select(`.${ch.FORECAST_PATH}`);
    const value = els.select(`.${ch.VALUE_PATH}`);
    const { radius } = dim.dimensions(this.props);
    const { valueArc, benchArc } = arcs.getBackgroundArcs(this.props, radius);
    const { valueScale, benchScale } = arcs.getScales(this.props);
    forecast.attr('d', benchArc.endAngle(benchScale(this.props.benchmark.value))());
    value.attr('d', valueArc.endAngle(valueScale(this.props.value.value))());

    els.select(`.${ch.DOUBLE_ARC_CENTER_TEXT}`)
      .selectAll('text')
      .attr('transform', 'scale(1)');
  }

  renderArc() {
    const shouldAnimate = (
      this.props.animationEase || this.props.animationTime
    );

    if (shouldAnimate) {
      this.animate();
      return;
    }
    this.draw();
  }

  render() {
    const d = dim.dimensions(this.props);
    const { benchArc, valueArc } = arcs.getBackgroundArcs(this.props, d.radius);
    return (
      <g
        ref={(c) => { this.container = c; }}
        transform={`translate(${d.cx},${d.cy})`}
      >
        <path
          d={benchArc()}
          className={ch.BACKGROUND_BENCHMARK_PATH}
          fill={this.props.backgroundBenchmark.fill}
          stroke={this.props.backgroundBenchmark.stroke}
        />
        <path
          d={valueArc()}
          className={ch.BACKGROUND_VALUE_PATH}
          fill={this.props.backgroundValue.fill}
          stroke={this.props.backgroundValue.stroke}
        />
        <path className={ch.FORECAST_PATH} fill={this.props.benchmark.fill} />
        <path className={ch.VALUE_PATH} fill={this.props.value.fill} />
        {clone(this.props, d)}
      </g>
    );
  }
}
