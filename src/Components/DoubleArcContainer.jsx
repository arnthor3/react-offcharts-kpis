import React, { Component, PropTypes } from 'react';
import { select } from 'd3-selection';
import { arc } from 'd3-shape';
import clone from 'react-offcharts-core/Utils/cloneChildren';
import * as dim from '../Utils/dimensions';
import * as ch from '../Utils/constants';

export default class ArcContainer extends Component {
  componentDidMount() {

  }

  shouldComponentUpdate(nextProps, nextState) {

  }

  componentDidUpdate(prevProps, prevState) {

  }

  animate() {
    const els = select(this.container);
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
        ref={(c) => { this.conatiner = c; }}
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
        {clone(this.props)}
      </g>
    );
  }
}
