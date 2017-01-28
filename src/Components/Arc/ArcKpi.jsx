import React, { Components, PropTypes } from 'react';
import Chart from 'react-offcharts-core/Components/Chart';
import ReactIf from 'react-offcharts-core/Components/ReactIf';
import Gradients from 'react-offcharts-core/Components/Defs/Gradients';
import guid from 'react-offcharts-core/Utils/guid';
import ArcContainer from './ArcContainer';
import CenterText from './CenterText';

const ArcKpi = props => (
  <Chart
    width={props.width}
    height={props.height}
    responsive={props.responsive}
    id={props.id}
    className={props.className}
  >
    <ArcContainer
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
  width: PropTypes.number,
  height: PropTypes.number,
  responsive: PropTypes.bool,
  id: PropTypes.string,
  className: PropTypes.string,
};

export default ArcKpi;
