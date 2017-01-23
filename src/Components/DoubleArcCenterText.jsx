import React, { PropTypes } from 'react';
import { textProps } from '../Utils/props';
import * as ch from '../Utils/constants';


const Tspan = ({ radius, tProps, text, className }) => {
  console.log(radius, tProps, text);
  const { fontSize, ...rest } = tProps;
  const fs = fontSize * radius;
  return (
    <tspan
      className={className}
      fontSize={fs}
      {...rest}
    >{text}</tspan>
  );
};

Tspan.propTypes = {
  radius: PropTypes.number,
  tProps: textProps,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};


const DoubleArcCenterText = props => {
  const { fontSize } = props.topValueText;

  const fs = fontSize * props.radius;
  const offset = (props.bottomValueText.fontSize * props.radius) * 1.05;
  return (
    <g className={ch.DOUBLE_ARC_CENTER_TEXT}>
      <text className={ch.DOUBLE_ARC_CENTER_TEXT_TOP} >
        <Tspan
          className={ch.DOUBLE_ARC_CENTER_TEXT_TOP_VALUE}
          text={props.value.value}
          radius={props.radius}
          tProps={props.topValueText}
        />
        <Tspan
          className={ch.DOUBLE_ARC_CENTER_TEXT_TOP_POSTFIX}
          text={props.topPostfix}
          radius={props.radius}
          tProps={props.topPostfixText}
        />
      </text>
      <line
        x1={-fs / 1.5}
        x2={fs / 1.5}
        y1={10}
        y2={10}
        className={ch.DOUBLE_ARC_CENTER_TEXT_SEPERATOR}
        stroke="red"
        strokeWidth="5px"
        strokeDasharray="5px"
      />
      <text
        transform={`translate(0,${offset})`}
        className={ch.DOUBLE_ARC_CENTER_TEXT_BOTTOM}
      >
        <Tspan
          text={props.value.value}
          radius={props.radius}
          tProps={props.bottomValueText}
          className={ch.DOUBLE_ARC_CENTER_TEXT_BOTTOM_VALUE}
        />
        <Tspan
          text={props.bottomPostfix}
          radius={props.radius}
          tProps={props.bottomPostfixText}
          className={ch.DOUBLE_ARC_CENTER_TEXT_BOTTOM_POSTFIX}
        />
      </text>
    </g>
  );
};

DoubleArcCenterText.propTypes = {
  topValueText: textProps,
  topPostfixText: textProps,
  bottomValueText: textProps,
  bottomPostfixText: textProps,
  radius: PropTypes.number,
  topPostfix: PropTypes.string,
  bottomPostfix: PropTypes.string,
};

DoubleArcCenterText.defaultProps = {
  topValueText: {
    fontSize: 0.6,
    textAnchor: 'middle',
  },
  topPostfixText: {
    fontSize: 0.3,
    textAnchor: 'middle',
  },
  bottomValueText: {
    fontSize: 0.3,
    textAnchor: 'middle',
  },
  bottomPostfixText: {
    fontSize: 0.15,
    textAnchor: 'middle',
  },
}

export default DoubleArcCenterText;
