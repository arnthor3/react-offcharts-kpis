import React, { PropTypes } from 'react';

const DoubleArcCenterText = props => {
  const { fontSize, rest } = props.centerText;
  const fs = fontSize * props.radius;
  return (
    <g>
      <text
        fontSize={fs}
        textAnchor="middle"
      >
        <tspan>{props.value.value}</tspan>
        <tspan>{props.value.postfix}</tspan>
      </text>
      <line
        x1={-fs / 1.5}
        x2={fs / 1.5}
        y1={10}
        y2={10}
        stroke="red"
        strokeWidth="5px"
        strokeDasharray="5px"
      />
      <text>
        <tspan></tspan>
        <tspan></tspan>
      </text>
    </g>
  );
};

export default DoubleArcCenterText;
