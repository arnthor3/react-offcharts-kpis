import React, { Components, PropTypes } from 'react';
import Chart from 'react-offcharts-core/Components/Chart';
import ReactIf from 'react-offcharts-core/Components/ReactIf';
import Gradients from 'react-offcharts-core/Components/Defs/Gradients';
import guid from 'react-offcharts-core/Utils/guid';
import HalfArcContainer from './HalfArcContainer';
import Text from './Text';

const HalfArcKpi = () => (
  <Chart
    width={props.width}
    height={props.height}
    responsive={props.responsive}
    id={props.id}
    className={props.className}
  >
    <HalfArcContainer
      background={props.background}
      backgroundValue={props.backgroundValue}
      value={props.value}
      animationTime={props.animationTime}
      animationEase={props.animationEase}
      startAngle={props.startAngle}
      endAngle={props.endAngle}
    >
      <Text

      />
    </HalfArcContainer>
  </Chart>
);
