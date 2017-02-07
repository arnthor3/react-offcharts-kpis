import React, { Component, PropTypes } from 'react';
import { select } from 'd3-selection';
import { interpolate } from 'd3-interpolate';
import { scaleLinear } from 'd3-scale';
import 'd3-transition';
import * as ease from 'd3-ease';
import clone from 'react-offcharts-core/Utils/cloneChildren';
import * as dim from 'react-offcharts-core/Helpers/arcDimension';
import { round, splitNumber } from 'react-offcharts-core/Utils/numbers';
import * as ch from '../../Utils/halfarc_constants';
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
    decimal: PropTypes.bool,
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
    fractionText: {
      fontSize: 0.33,
    },
  }

  animate() {
    const path = select(this.valuePath);
    const valueText = select(this.valueText);
    const fractionText = select(this.fractionText);
    const e = this.getEase();
    const time = this.getAnimationTime();
    path
      .transition()
      .duration(time)
      .ease(e)
      .attrTween('d', () => {
        const d = arcs.halfArcDimensions(this.props);
        const arc = arcs.halfArc(this.props.value, d.radius);
        const old = path.node().old || 0;
        const scale = arcs.getHalfArcScale(this.props);
        const interNum = interpolate(old, this.props.value.value);
        const interValue = interpolate(scale(old), scale(this.props.value.value));
        if (this.props.decimal) {
          return (t) => {
            const value = round(interNum(t));
            const sp = splitNumber(value, '.');

            valueText.text(sp.number);
            fractionText.text(`.${sp.fraction}`);
            return arc.endAngle(interValue(t))();
          };
        }
        return (t) => {
          valueText.text(Math.floor(interNum(t)));
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
    path.attr('d', arc.endAngle(scale(this.props.value.value))());
  }

  renderCenterText() {
    const d = arcs.halfArcDimensions(this.props);
    let num;
    let frac;

    if (this.props.decimal) {
      const value = round(this.props.value.value);
      const sp = splitNumber(value, '.');
      num = sp.number;
      frac = sp.fraction;
    } else {
      num = Math.round(this.props.value.value);
    }
    return (
      <g className={ch.CENTER_ITEM}>
        <text
          className={ch.CENTER_TEXT}
          textAnchor="middle"
        >
          <tspan
            className={ch.CENTER_TEXT_VALUE}
            fontSize={(d.radius * this.props.valueText.fontSize)}
            ref={(c) => { this.valueText = c; }}
          >
            {num}
          </tspan>
          {this.props.decimal ?
            <tspan
              className={ch.CENTER_TEXT_FRACTION}
              fontSize={(d.radius * this.props.fractionText.fontSize)}
              ref={(c) => { this.fractionText = c; }}
            >
              .{frac}
            </tspan> : null
          }
          <tspan
            className={ch.CENTER_TEXT_POSTFIX}
            fontSize={(d.radius * this.props.postfixText.fontSize)}
          >{this.props.postfix}</tspan>
        </text>
        <text
          className={ch.LEGEND}
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
          className={ch.BACKGROUND}
          d={arc()}
          fill={this.props.background.fill}
          stroke={this.props.background.stroke}
        />
        <text
          className={`${ch.RANGE_TEXT} ${ch.RANGE_TEXT_LEFT}`}
          transform={`translate(${xPos + (arcWidth / 2)}, 20)`}
          textAnchor="middle"
        >{this.props.range[0]}</text>
        <text
          className={`${ch.RANGE_TEXT} ${ch.RANGE_TEXT_RIGHT}`}
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
