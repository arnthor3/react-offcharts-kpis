#Offcharts KPI Components

A set of KPI Components to help out with the dashboard creation.

A part of React-Offcharts Components

### NPM
```sh
install -S react-offcharts-kpi
```


### Usage
```js
  import React from 'react';
  import { render } from 'react-dom';
  import { DoubleArcKpi } from 'react-offcharts-kpi';

  const KPI = () => (
  <div style={{ width: '50%', height: '400px' }}>
    <DoubleArcKpi
      responsive
      startAngle={-Math.PI / 2}
      endAngle={Math.PI / 1.33}
      value={doubleValue}
      benchmark={doubleBench}
      backgroundBenchmark={{
        fill: 'rgb(200, 200, 200)',
        stroke: 'rgb(140, 140, 140)',
      }}
      backgroundValue={{
        fill: 'rgb(200, 200, 200)',
        stroke: 'rgb(140, 140, 140)',
      }}
      animationEase="easeCubicInOut"
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

render(<KPI />, document.getElementById('app'));

```

### Examples
Just clone the repo and do npm run start and browse to localhost:8080
Will put up an example when this is ready

