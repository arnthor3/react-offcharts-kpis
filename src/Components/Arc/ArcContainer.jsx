import React, { Component, PropTypes } from 'react';
import { select } from 'd3-selection';
import { interpolate } from 'd3-interpolate';
import { scaleLinear } from 'd3-scale';
import 'd3-transition';
import { arc } from 'd3-shape';
import * as ease from 'd3-ease';
import CenterText from './CenterText';
import * as ch from '../../Utils/arc_constants';

export default class ArcContainer extends Component {
  componentDidMount() {
    this.renderArc();
  }

  componentDidUpdate(prevProps, prevState) {
    this.renderArc();
  }

  animate() {

  }

  draw() {

  }

  renderArc() {
    // if animate
    this.animate();
  }

  render() {
    const d = dim.dimensions(this.props);
    const { background, valueArc } = arcs.getBackgroundArcs(this.props, d.radius);
    return (
      <g
        className={ch.ARC}
        transform={`translate(${d.cx},${d.cy})`}
      >
        <path
          className={ch.BACKGROUND}
        />
        <path
          className={ch.BACKGROUND_VALUE}
        />
        <path
          className={ch.VALUE_PATH}
        />
        <CenterText />
      </g>
    );
  }
}