import React from 'react';
import { render } from 'react-dom';
import { DoubleArcKpi } from '../src/index';

const doubleValue = {
  value: 87,
  range: [0, 100],
  label: 'Revenue Per Hour',
  outer: 0.9,
  inner: 0.8,
  fill: '#811',
};

const doubleBench = {
  value: 47,
  range: [0, 100],
  label: 'Revenue Margin',
  outer: 0.95,
  inner: 0.93,
  fill: '#118',
};

const L = () => (
  <div style={{ width: '400px', height: '400px' }}>
    <DoubleArcKpi
      responsive
      startAngle={-Math.PI / 2}
      endAngle={Math.PI / 1.33}
      value={doubleValue}
      benchmark={doubleBench}
      backgroundBenchmark={{
        fill: 'rgb(200, 200, 200)',
        stroke: 'rgb(170, 170, 170)',
      }}
      backgroundValue={{
        fill: 'rgb(200, 200, 200)',
        stroke: 'rgb(170, 170, 170)',
      }}
      animationEase="easeCubicInOu"
      animationTime={2250}
      topPostfix="$"
      bottomPostfix="%"
      seperator={{
        stroke: 'black',
        strokeWidth: '4px',
      }}
      topValueText={{
        fontSize: 0.6,
      }}
      topPostfixText={{
        fontSize: 0.3,
      }}
      bottomValueText={{
        fontSize: 0.6,
      }}
      bottomPostfixText={{
        fontSize: 0.3,
      }}
      legendFontsize={0.09}
    />
  </div>
);

render(<L />, document.getElementById('app'));
