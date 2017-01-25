import React, { Component, PropTypes } from 'react';
import { select } from 'd3-selection';
import { interpolate } from 'd3-interpolate';
import { scaleLinear } from 'd3-scale';
import 'd3-transition';
import { arc } from 'd3-shape';
import * as ease from 'd3-ease';

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
    return (
      <g>

      </g>
    );
  }
}