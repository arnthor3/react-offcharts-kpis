import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import HalfArcKpi from '../src/Components/HalfArc/HalfArcKpi';

describe('<HalfArcKpi />', () => {
  it('should render', () => {
    const wrapper = mount(
      <HalfArcKpi
        width={100}
        height={100}
        value={{
          value: 34,
          startAngle: 1,
          endAngle: 2,
        }}
      />,
    );
  });
});
