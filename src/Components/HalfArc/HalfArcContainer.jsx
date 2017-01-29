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
  }

  static defaultProps = {
    background: {
      outer: 1,
      inner: 0.8,
    },
    valueText: {
      fontSize: 0.5,
    },
    legendText: {
      fontSize: 0.1,
    },
    postfixText: {
      fontSize: 0.25,
    },

  }

  animateOut() {

  }

  animate() {
    const path = select(this.valuePath);
    const text = select(this.valueText);
    path
      .transition()
      .duration(1500)
      .ease(ease.easeSinInOut)
      .attrTween('d', () => {
        const d = arcs.halfArcDimensions(this.props);
        const arc = arcs.halfArc(this.props.value, d.radius);
        const old = path.node().old || 0;
        const scale = arcs.getArcScale(this.props);
        const interNum = interpolate(old, this.props.value.value);
        const interValue = interpolate(scale(old), scale(this.props.value.value));
        return (t) => {
          text.text(Math.floor(interNum(t)));
          return arc.endAngle(interValue(t))();
        };
      })
      .on('end', () => {
        path.node().old = this.props.value.value;
      });
  }

  draw() {
    const path = select(this.valuePath);
    const d = arcs.halfArcDimensions(this.props);
    const arc = arcs.halfArc(this.props.value, d.radius);
    const old = path.node().old || 0;
    const scale = arcs.getArcScale(this.props);
  }

  renderCenterText() {
    const d = arcs.halfArcDimensions(this.props);
    return (
      <g>
        <text
          textAnchor="middle"
        >
          <tspan
            fontSize={(d.radius * this.props.valueText.fontSize)}
            ref={(c) => { this.valueText = c; }}
          >
          {this.props.value.value}
          </tspan>
          <tspan
            fontSize={(d.radius * this.props.postfixText.fontSize)}
          >{this.props.postfix}</tspan>
        </text>
        <text
          textAnchor="middle"
          fontSize={d.radius * this.props.legendText.fontSize}
          transform={`translate(${0},${(d.radius * this.props.legendText.fontSize) * 1.20})`}
        >{this.props.legend}</text>
      </g>
    );
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
        {this.renderCenterText()}
      </g>
    );
  }
}
