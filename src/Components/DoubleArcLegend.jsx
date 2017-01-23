import React, { PropTypes } from 'react';

const DoubleArcLegend = props => (
  <g transform={`translate(0, ${props.radius * 0.75})`}>
    <g>
      <rect width={10} height={10} x={-props.radius * 0.3} />
      <text textAnchor="middle">SomeText2345235</text>
    </g>
    <g transform={`translate(0, ${props.radius * 0.1})`}>
      <rect />
      <text textAnchor="middle">SomeText</text>
    </g>
  </g>
);

DoubleArcLegend.propTypes = {

};

export default DoubleArcLegend;

