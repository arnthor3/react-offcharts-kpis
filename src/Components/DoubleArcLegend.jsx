import React, { PropTypes, Component } from 'react';
import { select } from 'd3-selection';

export default class DoubleArcLegend extends Component {

  componentDidMount() {
    const top = this.top.getBoundingClientRect().width;
    const bottom = this.bottom.getBoundingClientRect().width;

    const max = Math.max(top, bottom);
    select(this.top).attr('transform', `translate(${max / -2},0)`);
    select(this.bottom).attr('transform', `translate(${max / -2},20)`);
    console.log(max);
  }

  componentDidUpdate(prevProps, prevState) {

  }


  render() {
    return (
      <g transform={`translate(0, ${this.props.radius * 0.75})`}>
        <g ref={(c) => { this.top = c; }}>
          <rect width={12} y={-12} height={14} x={-16} />
          <text fontSize={this.props.radius * 0.09}>{this.props.value.label}</text>
        </g>
        <g
          transform={`translate(0, ${this.props.radius * 0.1})`}
          ref={(c) => { this.bottom = c; }}
        >
          <rect width={12} y={-12} height={14} x={-16}/>
          <text fontSize={this.props.radius * 0.09} >{this.props.benchmark.label}</text>
        </g>
      </g>
    );
  }
}
