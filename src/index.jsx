import React, { PropTypes } from 'react';
import Chart from 'react-offcharts-core/Components/Chart';
import ReactIf from 'react-offcharts-core/Components/ReactIf';
import Gradients from 'react-offcharts-core/Components/Defs/Gradients';
import guid from 'react-offcharts-core/Utils/guid';


export default (props) => (
  <Chart
    width={props.width}
    height={props.height}
    responsive={props.responsive}
    value={props.values}
    gradientId={gradientId}
  >
    <ArcsContainer>
      {
        props.values.map(d => (
          <Arc {...d} />
        ))
      }
    </ArcsContainer>
  </Chart>
);
