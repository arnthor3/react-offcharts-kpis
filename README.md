# React-Offcharts-KPI
A Set of KPI Components to help out with the dashboard creation.

These Components will be included in the Offcharts Library.

### Examples
You can [check this out](https://arnthor3.github.io/arnthor3/kpi.html).
Also there are a couple of examples in the directory

### Disclaimer
This is a work in progress and will change/improve

### Install
```sh
install -S react-offcharts-kpis
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


const value = {
  value: 87,
  label: 'Revenue Per Hour',
  outer: 0.9,
  inner: 0.8,
  fill: '#811',
  domain: [0, 5000]
};

const bench = {
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
          value={value}
          benchmark={bench}
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
value|Datahape|*null*| The shape of the value object
benchmark|Datahape|*null*| The shape of the value object
startAngle|number|*null*|Start angle
endAngle|number|*null*|End angle
backgroundBenchmark|shape|*null*| The fill and stroke of the background benchmark
backgroundValue|shape|*null*|The fill and stroke of the background value
topValueText|TextShape|*null*|text props for the top value text
topPostfixText|TextShape|*null*|Sets the class for the component
bottomValueText|TextShape|*null*|Sets the id for the Component
bottomPostfixText|TextShape|*null*|Sets the class for the component
bottomPostfix|string|*null*|Sets the id for the Component
topPostfix|string|*null*|Sets the class for the component
seperator|shape|*null*|Sets the id for the Component
legendFontsize|number|*null*|Sets the class for the component

### Props ArcKpi
Name|Type|Default|Description|
---|---|---|---
animationTime|number|*null*| milliseconds for animation when updating value paths
animationEase|number|*null*| The name of the d3 easing function, other values like, easeBack, easeBackInOut, easeSinInOut, easeExpInOut. See d3 easing page for more ideas.
value|Datahape|*null*| The shape of the value object
startAngle|number|*null*|Start angle
endAngle|number|*null*|End angle
backgroundValue|shape|*null*|The fill and stroke of the background value
background|shape|*null*| The shape of the fill, stroke and shape of the background
valueText|TextShape|*null*|text props for the top value text
postfixText|TextShape|*null*|Sets the class for the component
postfix|string|*null*|Sets the class for the component
seperator|shape|*null*|Sets the id for the Component
legendFontsize|number|*null*|Sets the class for the component


#### The Datahape Prop

This prop controles the path.

Name|Type|Default|Description|
---|---|---|---
fill|string|*null*| The color fill,  '#123' or 'rgba(50,50,50,.3)'
stroke|string|*null*| The color stroke, '#123' or 'rgba(50,50,50,.3)'
value|number|*null*| The value of the path
outer|number|*null*| The percentage of radius, a value of one would mean 100% of the raidus
inner|number|*null*| The inner value, also a percentage of the radius
domain|array|*[0, 100]*| The domain of the values, if you are working with percentages it would be [0, 100],

NOTE: The ArcKpi Datashap also holds the start- and endangle so the user can set where the path should start.

If you prefer you can style the component with css, all the parts in the component have classnames so they can be targeted very easily.

#### The TextShape Prop

This props allows the user to set the style of the text

Name|Type|Default|Description|
---|---|---|---
fontSize|number|*null*| A percentage of the radius, where 1 would be 100% of the radius and 0.5 50% of the radius,
fill|string|*null*| The color fill,  '#123' or 'rgba(50,50,50,.3)'
stroke|string|*null*| The color stroke, '#123' or 'rgba(50,50,50,.3)'

As with other parts of the components the text elements have classnames on them so you can style them with css as well.

Note: The text anchor is always set to "middle"

#### CSS
All the elements in the components have classNames either on them or in the parent so it should be easy to target each element and customize styles.


### Licence
MIT, Copyright 2017, Arnthor Agustsson







