import React, { Component, PropTypes } from 'react';
import * as ease from 'd3-ease';

export default class BaseKpiArc extends Component {
  static propTypes = {
    animationTime: PropTypes.number,
    animationEase: PropTypes.string,
    value: PropTypes.shape({
      value: PropTypes.number,
    }),
  }

  componentDidMount() {
    this.renderArc();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps.value.value !== this.props.value.value
    && typeof this.animateOut === 'function') {
      this.animateOut();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.renderArc();
  }

  getEase() {
    const e = ease[this.props.animationEase];
    if (typeof e === 'function') {
      return e;
    }
    return ease.easeCubicInOut;
  }

  getAnimationTime() {
    if (this.props.animationTime) {
      return this.props.animationTime;
    }
    return 1500;
  }

  renderArc() {
    const shouldAnimate = (
      this.props.animationTime || this.props.animationEase
    );

    if (shouldAnimate) {
      this.animate();
      return;
    }
    this.draw();
  }

}
