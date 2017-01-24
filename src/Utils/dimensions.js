import { arc } from 'd3-shape';
import { scaleLinear } from 'd3-scale';

export const getBackgroundArcs =
  ({ benchmark, value, startAngle, endAngle }, radius) => {
    const benchArc = (
      arc()
        .innerRadius(benchmark.inner * radius)
        .outerRadius(benchmark.outer * radius)
        .startAngle(startAngle)
        .endAngle(endAngle)
    );
    const valueArc = (
      arc()
        .innerRadius(value.inner * radius)
        .outerRadius(value.outer * radius)
        .startAngle(startAngle)
        .endAngle(endAngle)
    );
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
