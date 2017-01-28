import React, { Component, PropTypes } from 'react';
import { select } from 'd3-selection';
import { interpolate } from 'd3-interpolate';
import { scaleLinear } from 'd3-scale';
import 'd3-transition';
import * as ease from 'd3-ease';
import clone from 'react-offcharts-core/Utils/cloneChildren';
import * as dim from 'react-offcharts-core/Helpers/arcDimension';
import CenterText from './Text';
import * as ch from '../../Utils/arc_constants';
import * as arcs from '../../Utils/dimensions';
import { dataShape, fillAndStroke } from '../../Utils/props';

export default class HalfArcContainer extends Component {

  componentWillMount() {
    this.renderChart();
  }

  componentDidUpdate(prevProps, prevState) {
    this.renderChart();
  }

  componentWillReceiveProps(nextProps) {

  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.width !== this.props.width ||
    nextProps.height !== this.props.height) {
      return true;
    }
    if (nextProps.value.value === this.props.value.value) {
      return false;
    }
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    this.animateOut();
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

  render() {
    return (

    );
  }
}