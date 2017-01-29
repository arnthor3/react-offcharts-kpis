import React, { PropTypes, Component } from 'react';
import { select } from 'd3-selection';
import * as ch from '../../Utils/doublearc_constants';
import { dataShape } from '../../Utils/props';

export default class DoubleArcLegend extends Component {
  static propTypes = {
    radius: PropTypes.number,
    legendFontsize: PropTypes.number,
    value: dataShape,
    benchmark: dataShape,
  }

  componentDidMount() {
    this.resize();
  }

  componentDidUpdate(prevProps, prevState) {
    this.resize();
  }

  resize() {
    const top = this.top.getBoundingClientRect().width;
    const bottom = this.bottom.getBoundingClientRect().width;

    const max = Math.min(top, bottom);
    select(this.top).attr('transform', `translate(${max / -2},0)`);
    select(this.bottom).attr('transform', `translate(${max / -2},20)`);
  }

  render() {
    const fs = this.props.legendFontsize * this.props.radius;
    const bs = fs / 1.5;
    return (
      <g
        transform={`translate(0, ${this.props.radius * 0.75})`}
        className={ch.LEGEND}
      >
        <g ref={(c) => { this.top = c; }}>
          <rect fill={this.props.value.fill} width={bs} y={-bs} height={bs} x={-bs * 1.5} />
          <text fontSize={fs}>{this.props.value.label}</text>
        </g>
        <g
          transform={`translate(0, ${this.props.radius * 0.1})`}
          ref={(c) => { this.bottom = c; }}
        >
          <rect fill={this.props.benchmark.fill} width={bs} y={-bs} height={bs} x={-bs * 1.5} />
          <text fontSize={fs} >{this.props.benchmark.label}</text>
        </g>
      </g>
    );
  }
}
