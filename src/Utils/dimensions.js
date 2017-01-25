import { arc } from 'd3-shape';
import { scaleLinear } from 'd3-scale';

const propsToArc = ({ inner, outer }, radius, start, end) => (
  arc()
    .innerRadius(inner * radius)
    .outerRadius(outer * radius)
    .startAngle(start)
    .endAngle(end)
);

export const getArc =
({ startAngle, endAngle }, pArc, radius) => (
  propsToArc(pArc, radius, startAngle, endAngle)
);

export const getBackgroundArcs =
  ({ benchmark, value, startAngle, endAngle }, radius) => {
    const benchArc = propsToArc(benchmark, radius, startAngle, endAngle);
    const valueArc = propsToArc(value, radius, startAngle, endAngle);
    return { benchArc, valueArc };
  };

export const getScales =
  ({ benchmark, value, startAngle, endAngle }) => {
    const valueScale = (
      scaleLinear()
        .domain(value.domain || [0, 100])
        .range([startAngle, endAngle])
    );
    const benchScale = (
      scaleLinear()
        .domain(benchmark.domain || [0, 100])
        .range([startAngle, endAngle])
    );
    return { benchScale, valueScale };
  };
