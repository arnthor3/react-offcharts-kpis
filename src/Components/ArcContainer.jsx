import React, { Component, PropTypes } from 'react';
import { select } from 'd3-selection';

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
    return <g />;
  }
}
