import React, { Component, PropTypes } from 'react';
import { select } from 'd3-selection';
import { interpolate } from 'd3-interpolate';
import { scaleLinear } from 'd3-scale';
import 'd3-transition';
import { arc } from 'd3-shape';
import * as ease from 'd3-ease';
import clone from 'react-offcharts-core/Utils/cloneChildren';
import * as dim from 'react-offcharts-core/Helpers/arcDimension';
import * as ch from '../Utils/constants';

const shape = PropTypes.shape({
  fill: PropTypes.string,
  stroke: PropTypes.string,
  value: PropTypes.number,
  outerRadius: PropTypes.number,
  innerRadius: PropTypes.number,
});

export default class ArcContainer extends Component {
  static propTypes = {
    endAngle: PropTypes.number,
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

  }

  componentDidUpdate(prevProps, prevState) {
    this.renderArc();
  }

  animateIn() {
    const els = select(this.container);
  }

  animate() {
    const els = select(this.container);
    const forecast = els.select(`.${ch.FORECAST_PATH}`);
    els
      .select('.offcharts-kpi-doublearc-valuepath')
      .transition()
      .duration(1500)
      .ease(ease.easeSinInOut)
      .attrTween('d', () => {
        const valueScale = (
          scaleLinear()
            .domain(this.props.value.domain || [0, 100])
            .range([this.props.startAngle, this.props.endAngle])
        );
        const benchScale = (
          scaleLinear()
            .domain(this.props.benchmark.domain || [0, 100])
            .range([this.props.startAngle, this.props.endAngle])
        );
        const interValue = interpolate(this.props.startAngle, valueScale(this.props.value.value));
        const interBench = interpolate(this.props.startAngle, benchScale(this.props.benchmark.value));
        const d = dim.dimensions(this.props);
        const valueArc = (
          arc()
            .innerRadius(d.radius * this.props.value.outer)
            .outerRadius(d.radius * this.props.value.inner)
            .startAngle(this.props.startAngle)
        );

        const forecastArc = (
          arc()
            .innerRadius(d.radius * this.props.benchmark.outer)
            .outerRadius(d.radius * this.props.benchmark.inner)
            .startAngle(this.props.startAngle)
        );

        return (t) => {
          forecast.attr('d', forecastArc.endAngle(interBench(t))() );
          return valueArc.endAngle(interValue(t))();
        };
      })
      .on('end', () => {
        this.animateIn();
      });
  }

  draw() {
    const els = select(this.container);
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
    const benchArc = (
      arc()
        .innerRadius(d.radius * this.props.benchmark.outer)
        .outerRadius(d.radius * this.props.benchmark.inner)
        .startAngle(this.props.startAngle)
        .endAngle(this.props.endAngle)
    );

    const valueArc = (
      arc()
        .innerRadius(d.radius * this.props.value.outer)
        .outerRadius(d.radius * this.props.value.inner)
        .startAngle(this.props.startAngle)
        .endAngle(this.props.endAngle)
    );
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
        <path className={ch.FORECAST_PATH} />
        <path className={ch.VALUE_PATH} />
        {clone(this.props, d)}
      </g>
    );
  }
}
