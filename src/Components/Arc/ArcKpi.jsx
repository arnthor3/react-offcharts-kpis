import React, { Components, PropTypes } from 'react';
import Chart from 'react-offcharts-core/Components/Chart';
import ReactIf from 'react-offcharts-core/Components/ReactIf';
import Gradients from 'react-offcharts-core/Components/Defs/Gradients';
import guid from 'react-offcharts-core/Utils/guid';
import ArcContainer from './ArcContainer';
import CenterText from './CenterText';
import { textProps, fillAndStroke, dataShape } from '../../Utils/props';

const ArcKpi = props => (
  <Chart
    width={props.width}
    height={props.height}
    responsive={props.responsive}
    id={props.id}
    className={props.className}
  >
    <ArcContainer
      decimal={props.decimal}
      background={props.background}
      backgroundValue={props.backgroundValue}
      value={props.value}
      animationTime={props.animationTime}
      animationEase={props.animationEase}
      startAngle={props.startAngle}
      endAngle={props.endAngle}
    >
      <CenterText
        postfix={props.postfix}
        postfixText={props.postfixText}
        valueText={props.valueText}
        legend={props.legend}
        legendText={props.legendText}
      />
    </ArcContainer>
  </Chart>
);

ArcKpi.propTypes = {
  background: dataShape,
  backgroundValue: dataShape,
  value: dataShape,
  animationTime: PropTypes.number,
  animationEase: PropTypes.string,
  startAngle: PropTypes.number,
  endAngle: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  responsive: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
  postfix: PropTypes.string,
  legend: PropTypes.string,
  postfixText: textProps,
  valueText: textProps,
  legendText: textProps,
  decimal: PropTypes.bool,
};

export default ArcKpi;
