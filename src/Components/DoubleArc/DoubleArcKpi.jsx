import React, { Components, PropTypes } from 'react';
import Chart from 'react-offcharts-core/Components/Chart';
import ReactIf from 'react-offcharts-core/Components/ReactIf';
import Gradients from 'react-offcharts-core/Components/Defs/Gradients';
import guid from 'react-offcharts-core/Utils/guid';
import DoubleArcContainer from './DoubleArcContainer';
import DoubleArcCenterText from './DoubleArcCenterText';
import DoubleArcLegend from './DoubleArcLegend';
import { textProps, fillAndStroke } from '../../Utils/props';

const DoubleArcKpi = props => (
  <Chart
    width={props.width}
    height={props.height}
    responsive={props.responsive}
    id={props.id}
    className={props.className}
  >
    <DoubleArcContainer
      animationTime={props.animationTime}
      animationEase={props.animationEase}
      value={props.value}
      benchmark={props.benchmark}
      startAngle={props.startAngle}
      endAngle={props.endAngle}
      backgroundBenchmark={props.backgroundBenchmark}
      backgroundValue={props.backgroundValue}
    >
      <DoubleArcCenterText
        topValueText={props.topValueText}
        topPostfixText={props.topPostfixText}
        bottomValueText={props.bottomValueText}
        bottomPostfixText={props.bottomPostfixText}
        bottomPostfix={props.bottomPostfix}
        topPostfix={props.topPostfix}
        seperator={props.seperator}
      />
      <DoubleArcLegend
        legendFontsize={props.legendFontsize}
      />
    </DoubleArcContainer>
  </Chart>
);

DoubleArcKpi.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  responsive: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  animationTime: PropTypes.number,
  animationEase: PropTypes.string,
  value: PropTypes.shape({}),
  benchmark: PropTypes.shape({}),
  topValueText: textProps,
  topPostfixText: textProps,
  bottomValueText: textProps,
  bottomPostfixText: textProps,
  bottomPostfix: PropTypes.string,
  topPostfix: PropTypes.string,
  seperator: fillAndStroke,
  legendFontsize: PropTypes.number,
  backgroundValue: fillAndStroke,
  backgroundBenchmark: fillAndStroke,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
};

export default DoubleArcKpi;
