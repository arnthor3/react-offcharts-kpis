import React, { Component, PropTypes } from 'react';
import { arc } from 'd3-shape';
import { select } from 'd3-selection';
import 'd3-transition';
import * as ch from '../Utils/constants';

export default class Arc extends Component {
  componentDidMount() {
    this.renderArc();
  }

  shouldComponentUpdate() {

  }

  componentDidUpdate(prevProps, prevState) {
    this.renderChart();
  }

  animate() {

  }

  draw() {

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

    return (
      <g>
        <path
          ref={(c) => { this.path = c; }}
        />
      </g>
    );
  }
}
