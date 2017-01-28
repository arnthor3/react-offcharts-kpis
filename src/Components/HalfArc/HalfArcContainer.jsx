import React, { Component, PropTypes } from 'react';
import { select } from 'd3-selection';
import { interpolate } from 'd3-interpolate';
import { scaleLinear } from 'd3-scale';
import 'd3-transition';
import * as ease from 'd3-ease';
import clone from 'react-offcharts-core/Utils/cloneChildren';
import * as dim from 'react-offcharts-core/Helpers/arcDimension';
import * as ch from '../../Utils/arc_constants';
import * as arcs from '../../Utils/dimensions';
import { dataShape, fillAndStroke } from '../../Utils/props';
import Base from '../BaseKpi';

export default class HalfArcContainer extends Base {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    animationEase: PropTypes.string,
    animationTime: PropTypes.number,
    value: dataShape,
    background: fillAndStroke,
    backgroundValue: dataShape,
  }

  animate() {
    const path = select(this.valuePath);
    path
      .transition()
      .duration(1500)
      .ease(ease.easeSinInOut)
      .attrTween('d', () => {
        const d = arcs.halfArcDimensions(this.props);
        const arc = arcs.halfArc(this.props.value, d.radius);
        const old = path.node().old || 0;
        console.log(d.radius);
        const scale = arcs.getArcScale(this.props);
        const interValue = interpolate(scale(old), scale(this.props.value.value));
        return t => arc.endAngle(interValue(t))();
      });
  }

  draw() {
    const path = select(this.valuePath);
    const d = arcs.halfArcDimensions(this.props);
    const arc = arcs.halfArc(this.props.value, d.radius);
    const old = path.node().old || 0;
    const scale = arcs.getArcScale(this.props);
  }

  render() {
    const d = arcs.halfArcDimensions(this.props);
    const arc = arcs.halfArc(this.props.background, d.radius);
    const xPos = +(arc().split('A')[0].split('M')[1].split(',')[0]);
    const arcWidth = (
      (d.radius * this.props.background.outer) - (d.radius * this.props.background.inner)
    );
    return (
      <g
        className={ch.ARC}
        transform={`translate(${d.x},${d.y})`}
        ref={(c) => { this.container = c; }}
      >
        <path
          d={arc()}
          fill={this.props.background.fill}
          stroke={this.props.background.stroke}
        />
        <text
          transform={`translate(${xPos + (arcWidth / 2)}, 20)`}
          textAnchor="middle"
        >{this.props.range[0]}</text>
        <text
          textAnchor="middle"
          transform={`translate(${-(xPos + (arcWidth / 2))}, 20)`}
        >{this.props.range[1]}</text>
        <path
          className={ch.VALUE_PATH}
          ref={(c) => { this.valuePath = c; }}
          fill={this.props.value.fill}
          stroke={this.props.value.stroke}
        />
      </g>
    );
  }
}
