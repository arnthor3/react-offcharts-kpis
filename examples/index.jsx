import React, { Component } from 'react';
import { render } from 'react-dom';
import { DoubleArcKpi, ArcKpi, HalfArcKpi } from '../src/index';

const doubleValue = {
  value: 87,
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

const singleValue = {
  value: 50,
  range: [0, 100],
  outer: 0.95,
  inner: 0.93,
  fill: '#eee',
  startAngle: -Math.PI / 2,
  endAngle: (Math.PI * 2) - (Math.PI / 2),
};

const halfArcValue = {
  value: 50,
  range: [0, 100],
  outer: 0.95,
  inner: 0.7,
  fill: '#994',
};

class Chart extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      bench: doubleBench,
      value: doubleValue,
    };
  }

  onClick() {
    const { bench, value } = this.state;
    const val = Math.random() * 100;
    const val2 = Math.random() * 100;
    const newBench = Object.assign({}, bench, { value: val });
    const newVal = Object.assign({}, value, { value: val2 });
    this.setState({
      bench: newBench,
      value: newVal,
    });
  }

  render() {
    return (
      <div
        style={{ width: '40%', height: '400px' }}
        onClick={this.onClick}
      >
        <DoubleArcKpi
          responsive
          decimal
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
  }
}

class Chart2 extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      value: singleValue,
    };
  }

  onClick() {
    const { value } = this.state;
    const val2 = parseInt(Math.random() * 100, 10);
    const newVal = Object.assign({}, value, { value: val2 });
    this.setState({
      value: newVal,
    });
  }

  render() {
    return (
      <div
        style={{ width: '40%', height: '400px', background: '#333' }}
        onClick={this.onClick}
      >
        <ArcKpi
          responsive
          startAngle={0}
          endAngle={Math.PI * 2}
          animationEase="easeCubicInOut"
          animationTime={1500}
          background={{
            inner: 0,
            outer: 0.95,
            fill: '#000',
          }}
          backgroundValue={{
            inner: 0.93,
            outer: 0.95,
            fill: '#555',
          }}
          value={this.state.value}
          postfix="Cars"
          legend="Sales per week"
          legendText={{
            fill: 'white',
            fontSize: 0.15,
          }}
          valueText={{
            fill: 'white',
            fontSize: 0.65,
          }}
          postfixText={{
            fill: 'white',
            fontSize: 0.15,
          }}
        />
      </div>
    );
  }
}

class Chart3 extends Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      value: halfArcValue,
    };
  }

  onClick() {
    const { value } = this.state;
    const val2 = parseInt(Math.random() * 100, 10);
    const newVal = Object.assign({}, value, { value: val2 });
    this.setState({
      value: newVal,
    });
  }

  render() {
    return (
      <div
        style={{ width: '40%', height: '400px' }}
        onClick={this.onClick}
      >
        <HalfArcKpi
          responsive
          decimal
          animationTime={1500}
          animationEase="easeCubicInOut"
          background={{
            inner: 0.70,
            outer: 0.95,
            fill: '#bbb',
            stroke: '#999',
          }}
          value={this.state.value}
          postfix="K"
          legend="Revenue Per Day"
          legendText={{
            fontSize: 0.1,
          }}
          valueText={{
            fontSize: 0.55,
          }}
          postfixText={{
            fontSize: 0.25,
          }}
        />
      </div>
    );
  }
}

const All = () => (
  <span>
    <Chart></Chart>
    <Chart2></Chart2>
    <Chart3></Chart3>
  </span>
);


render(<All />, document.getElementById('app'));
