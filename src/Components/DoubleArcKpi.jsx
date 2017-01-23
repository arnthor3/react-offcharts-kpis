import React, { Components, PropTypes } from 'react';
import Chart from 'react-offcharts-core/Components/Chart';
import ReactIf from 'react-offcharts-core/Components/ReactIf';
import Gradients from 'react-offcharts-core/Components/Defs/Gradients';
import guid from 'react-offcharts-core/Utils/guid';
import DoubleArcContainer from './DoubleArcContainer';

const DoubleArcKpi = props => (
  <Chart
    width={props.width}
    height={props.height}
    responsive={props.responsive}
    id={props.id}
    className={props.className}
  >
    <DoubleArcContainer
      value={props.value}
      benchmark={props.benchmark}
      startAngle={props.startAngle}
      endAngle={props.endAngle}
    />
  </Chart>
);

export default DoubleArcKpi;
