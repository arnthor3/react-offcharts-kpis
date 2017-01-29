import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import DoubleArcKpi from '../src/Components/DoubleArc/DoubleArcKpi';

describe('<DoubleArcKpi />', () => {
  it('should render', () => {
    const wrapper = mount(
      <DoubleArcKpi
        width={100}
        height={100}
        benchmark={{
          value: 47,
          range: [0, 100],
          label: 'Revenue Margin',
          outer: 0.95,
          inner: 0.93,
          fill: '#118',
        }}
        value={{
          value: 34,
          startAngle: 1,
          endAngle: 2,
        }}
      />,
    );
    wrapper.update();
    wrapper.unmount();
  });
});
