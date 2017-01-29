import { PropTypes } from 'react';

export const fillAndStroke = PropTypes.shape({
  fill: PropTypes.string,
  stroke: PropTypes.string,
  filter: PropTypes.string,
});

export const textProps = PropTypes.shape({
  fontSize: PropTypes.number,
  textAnchor: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  filter: PropTypes.string,
});

export const dataShape = PropTypes.shape({
  fill: PropTypes.string,
  stroke: PropTypes.string,
  value: PropTypes.number,
  outerRadius: PropTypes.number,
  innerRadius: PropTypes.number,
  domain: PropTypes.array,
});
