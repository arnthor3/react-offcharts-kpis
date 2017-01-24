import React, { PropTypes } from 'react';
import { textProps } from '../../Utils/props';
import * as ch from '../../Utils/constants';


const Tspan = ({ radius, tProps, text, className }) => {
  const { fontSize, textAnchor } = tProps;
  const fs = fontSize * radius;
  return (
    <tspan
      className={className}
      fontSize={fs}
      textAnchor="middle"
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
    <g className={ch.DOUBLE_ARC_CENTER_TEXT} style={{opacity: 1}}>
      <text transform="scale(0)" className={ch.DOUBLE_ARC_CENTER_TEXT_TOP} >
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
        {...props.seperator}
      />
      <g transform={`translate(0,${offset})`}>
        <text transform="scale(0)" className={ch.DOUBLE_ARC_CENTER_TEXT_BOTTOM}>
          <Tspan
            text={props.benchmark.value}
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
