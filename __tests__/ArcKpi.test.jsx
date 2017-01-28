import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import ArcKpi from '../src/Components/Arc/ArcKpi';

describe('<ArcKpi />', () => {
  it('should render', () => {
    const wrapper = mount(
      <ArcKpi
        responsive
        value={{
          value: 34,
          startAngle: 1,
          endAngle: 2,
        }}
      />
    );
  });
});
