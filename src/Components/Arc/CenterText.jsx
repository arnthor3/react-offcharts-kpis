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
    <g className={ch.CENTER_TEXT}>
      <text transform="scale(0)" className={ch.CENTER_ITEM} >
        <Tspan
          className={ch.CENTER_TEXT_VALUE}
          radius={props.radius}
          tProps={props.valueText}
        />
        <Tspan
          className={ch.CENTER_TEXT_POSTFIX}
          text={props.postfix}
          radius={props.radius}
          tProps={props.postfixText}
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
      <g transform={`translate(0, ${40})`}>
        <text
          transform="scale(0)"
          className={`${ch.CENTER_ITEM} ${ch.CENTER_LEGEND}`}
          textAnchor="middle"
          fontSize={props.legendText.fontSize * props.radius}
        >{props.legend}</text>
      </g>
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
  legendText: {
    fontSize: 0.1,
  },
};

export default CenterText;
