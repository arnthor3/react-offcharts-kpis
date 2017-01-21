import { arc } from 'd3-shape';

export const dimensions = ({ width, height }) => {
  const cx = width / 2;
  const cy = height / 2;
  const radius = Math.min(cx, cy);
  return { cx, cy, radius };
};

export const getArc = (props) => {
  const { radius } = dimensions(props);
  const { inner, outer, startAngle } = props;
  return (
    arc()
      .innerRadius(inner * radius)
      .outerRadius(outer * radius)
      .startAngle(startAngle)
  );
};
