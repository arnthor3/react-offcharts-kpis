# React-Offcharts-KPI
A Set of KPI Components to help out with the dashboard creation.

These Components will be included in the Offcharts Library.

### Disclaimer
This is a work in progress and will change

### Install
```sh
install -S react-offcharts-kpi
```

### Usage
The KPI Library has three components.
* DoubleArcKPI
* ArcKpi
* HalfArcKPI

To Include
```js
import { DoubleArcKpi, ArcKpi, HalfArcKpi } from 'react-offcharts-kpi';
```

#### Example
A super simple doublearc example
```js
import React, { Component } from 'react';
import { render } from 'react-dom';
// include all but you could leave out the components you are not going to use
import { DoubleArcKpi, ArcKpi, HalfArcKpi } from 'react-offcharts-kpi';


const doubleValue = {
  value: 87,
  label: 'Revenue Per Hour',
  outer: 0.9,
  inner: 0.8,
  fill: '#811',
  domain: [0, 5000]
};

const doubleBench = {
  value: 47,
  domain: [0, 100],
  label: 'Revenue Margin',
  outer: 0.95,
  inner: 0.93,
  fill: '#118',
};


const DashboardStrip = () => (
    <div className="col-lg-3">
        <DoubleArcKpi
          responsive
          startAngle={-Math.PI / 2}
          endAngle={Math.PI / 1.33}
          value={this.state.value}
          benchmark={this.state.bench}
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
              fontSize: 0.3,
            }}
            bottomPostfixText={{
              fontSize: 0.15,
            }}
            legendFontsize={0.09}
        />
    </div>
);

render(<DashboardStrip />, document.getElementById('app'));

```

### Props Common
Name|Type|Default|Description|
---|---|---|---
Width|number|*null*| The width of the chart, used if responsive is false
height|number|*null*|The width of the chart, used if responsive is false
responsive|bool|*true*|If set to true then the element will fill out into parent container, and resize on window dimension change
id|string|*null*|Sets the id for the Component
className|string|*null*|Sets the class for the component

### Props DoubleArcKpi
Name|Type|Default|Description|
---|---|---|---
animationTime|number|*null*| milliseconds for animation when updating value paths
animationEase|number|*null*| The name of the d3 easing function, other values like, easeBack, easeBackInOut, easeSinInOut, easeExpInOut. See d3 easing page for more ideas.
value|shape|*null*| The shape of the value object
startAngle|number|*null*|Start angle
endAngle|number|*null*|End angle
backgroundBenchmark|shape|*null*| The fill and stroke of the background benchmark
backgroundValue|shape|*null*|The fill and stroke of the background value
topValueText|shape|*null*|text props for the top value text
topPostfixText|shape|*null*|Sets the class for the component
bottomValueText|shape|*null*|Sets the id for the Component
bottomPostfixText|shape|*null*|Sets the class for the component
bottomPostfix|string|*null*|Sets the id for the Component
topPostfix|string|*null*|Sets the class for the component
seperator|shape|*null*|Sets the id for the Component
legendFontsize|number|*null*|Sets the class for the component

### TODO finish documentation and examples


### Licence
MIT, 2017 (c) Arnthor Agustsson







