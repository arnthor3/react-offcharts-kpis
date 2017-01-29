import React, { PropTypes } from 'react';
import { textProps, fillAndStroke } from '../../Utils/props';
import * as ch from '../../Utils/doublearc_constants';

const Tspan = ({ radius, tProps, text, className }) => {
  const { fontSize } = tProps;
  const fs = fontSize * radius;
  return (
    <tspan
      className={className}
      fontSize={fs}
      textAnchor="middle"
      fill={tProps.fill}
      stroke={tProps.stroke}
    >{text}</tspan>
  );
};

Tspan.defaultProps = {
  tProps: {
    textAnchor: 'middle',
  },
};

Tspan.propTypes = {
  radius: PropTypes.number,
  tProps: textProps,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
};


const DoubleArcCenterText = (props) => {
  const { fontSize } = props.topValueText;
  const fs = fontSize * props.radius;
  const offset = (props.bottomValueText.fontSize * props.radius) * 1.05;

  return (
    <g className={ch.DOUBLE_ARC_CENTER_TEXT}>
      <text transform="scale(0)" className={`${ch.DOUBLE_ARC_CENTER_TEXT_TOP} ${ch.DOUBLE_ARC_CENTER_ITEM}`} >
        <Tspan
          className={ch.DOUBLE_ARC_CENTER_TEXT_TOP_VALUE}
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
        transform="scale(0)"
        className={`${ch.DOUBLE_ARC_CENTER_TEXT_SEPERATOR}
        ${ch.DOUBLE_ARC_CENTER_ITEM}`}
        {...props.seperator}
      />
      <g transform={`translate(0,${offset})`}>
        <text
          transform="scale(0)"
          className={`${ch.DOUBLE_ARC_CENTER_TEXT_BOTTOM}
          ${ch.DOUBLE_ARC_CENTER_ITEM}`}
        >
          <Tspan
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
  seperator: fillAndStroke,
};

DoubleArcCenterText.defaultProps = {
  topValueText: {
    fontSize: 0.6,
  },
  topPostfixText: {
    fontSize: 0.3,
  },
  bottomValueText: {
    fontSize: 0.3,
  },
  bottomPostfixText: {
    fontSize: 0.15,
  },
};


export default DoubleArcCenterText;
