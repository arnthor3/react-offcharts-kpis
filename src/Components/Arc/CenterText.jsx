import React, { PropTypes } from 'react';
import { textProps, fillAndStroke } from '../../Utils/props';
import * as ch from '../../Utils/arc_constants';

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


const CenterText = (props) => {
  const { fontSize } = props.valueText;
  const fs = fontSize * props.radius;

  return (
    <g className={ch.DOUBLE_ARC_CENTER_TEXT}>
      <text transform="scale(0)" className={`${ch.DOUBLE_ARC_CENTER_TEXT_TOP} ${ch.DOUBLE_ARC_CENTER_ITEM}`} >
        <Tspan
          className={ch.DOUBLE_ARC_CENTER_TEXT_TOP_VALUE}
          radius={props.radius}
          tProps={props.valueText}
        />
        <Tspan
          className={ch.DOUBLE_ARC_CENTER_TEXT_TOP_POSTFIX}
          text={props.topPostfix}
          radius={props.radius}
          tProps={props.postfixText}
        />
      </text>
      <text
        textAnchor="middle"
      >{props.legend}</text>
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
      </g>
  );
};


CenterText.defaultProps = {
  valueText: {
    fontSize: 0.6,
  },
  postfixText: {
    fontSize: 0.3,
  },
};

export default CenterText;
