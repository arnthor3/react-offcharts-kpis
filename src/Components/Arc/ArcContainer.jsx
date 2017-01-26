import React, { Component, PropTypes } from 'react';
import { select } from 'd3-selection';
import { interpolate } from 'd3-interpolate';
import { scaleLinear } from 'd3-scale';
import 'd3-transition';
import * as ease from 'd3-ease';
import clone from 'react-offcharts-core/Utils/cloneChildren';
import * as dim from 'react-offcharts-core/Helpers/arcDimension';
import CenterText from './CenterText';
import * as ch from '../../Utils/arc_constants';
import * as arcs from '../../Utils/dimensions';

export default class ArcContainer extends Component {
  componentDidMount() {
    this.renderArc();
  }

  componentDidUpdate(prevProps, prevState) {
    this.renderArc();
  }

  animateIn() {
    const els = select(this.container);
    console.log(els.select(`.${ch.CENTER_TEXT_VALUE}`).empty());
    els.select(`.${ch.CENTER_TEXT_VALUE}`).text(this.props.value.value);
    const centerItems = els.selectAll(`.${ch.CENTER_ITEM}`);
    console.log(centerItems);
    centerItems
      .transition()
      .duration(500)
      .delay((d, i) => i * 65)
      .ease(ease.easeCubicInOut)
      .attr('transform', 'scale(1)');
  }

  animate() {
    const path = select(this.valuePath);
    path
      .transition()
      .duration(1500)
      .ease(ease.easeSinInOut)
      .attrTween('d', () => {
        const { radius } = dim.dimensions(this.props);
        const old = path.node().old || 0;
        const scale = arcs.getArcScale(this.props);
        const interValue = interpolate(old, scale(this.props.value.value));
        const arc = arcs.getArc(this.props.value, this.props.value, radius);
        return t => arc.endAngle(interValue(t))();
      })
      .on('end', () => {
        this.animateIn();
      });
  }

  draw() {

  }

  renderArc() {
    // if animate
    this.animate();
  }

  renderBackground() {
    if (!this.props.background) {
      return null;
    }
    const d = dim.dimensions(this.props);
    const background = arcs.getArc(this.props, this.props.background, d.radius);
    return (
      <path
        className={ch.BACKGROUND}
        d={background()}
        fill={this.props.background.fill}
        stroke={this.props.background.stroke}
      />
    );
  }

  renderBackgroundValue() {
    if (!this.props.backgroundValue) {
      return null;
    }
    const d = dim.dimensions(this.props);
    const backgroundValueArc = arcs.getArc(this.props, this.props.backgroundValue, d.radius);
    return (
      <path
        className={ch.BACKGROUND_VALUE}
        d={backgroundValueArc()}
        fill={this.props.backgroundValue.fill}
        stroke={this.props.backgroundValue.stroke}
      />
    );
  }

  render() {
    const d = dim.dimensions(this.props);
    return (
      <g
        className={ch.ARC}
        transform={`translate(${d.cx},${d.cy})`}
        ref={(c) => { this.container = c; }}
      >
        {this.renderBackground()}
        {this.renderBackgroundValue()}

        <path
          className={ch.VALUE_PATH}
          ref={(c) => { this.valuePath = c; }}
        />
        {clone(this.props, d)}
      </g>
    );
  }
}