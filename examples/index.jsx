import React from 'react';
import { render } from 'react-dom';
import { DoubleArcKpi } from '../src/index';

const L = () => (
  <div style={{ width: '400px', height: '400px' }}>
    <DoubleArcKpi
      responsive
      startAngle={-Math.PI / 2}
      endAngle={Math.PI / 1.33}
      value={{
        outer: 0.91,
        inner: 0.8,
        value: 45,
      }}
      benchmark={{
        outer: 0.95,
        inner: 0.93,
        value: 34,
      }}
      backgroundBenchmark={{
        fill: 'rgb(200, 200, 200)',
        stroke: 'rgb(140, 140, 140)',
      }}
      backgroundValue={{
        fill: 'rgb(200, 200, 200)',
        stroke: 'rgb(140, 140, 140)',
      }}
      animationEase="easeCubicInOu"
      animationTime={2250}
      centerText={{
        fontSize: 0.6,
        postfix: '%',
      }}

    />
  </div>
);

render(<L />, document.getElementById('app'));
