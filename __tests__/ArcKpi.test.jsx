import React from 'react';
import sinon from 'sinon';
import { mount } from 'enzyme';
import ArcKpi from '../src/Components/Arc/ArcKpi';

describe('<ArcKpi />', () => {
  it('should render animate', (done) => {
    const wrapper = mount(
      <ArcKpi
        animationEase="easeCubicInOut"
        animationTime={2345}
        width={100}
        height={100}
        background={{
          inner: 23,
        }}
        value={{
          value: 34,
          startAngle: 1,
          endAngle: 2,
        }}
      />,
    );
    wrapper.setProps({ width: 324, height: 345 });
    wrapper.update();
    wrapper.unmount();
    setTimeout(() => {
      done();
    }, 4000);
  });
  it('should render static', () => {
    const wrapper = mount(
      <ArcKpi
        width={100}
        height={100}
        backgroundValue={{
          inner: 34,
        }}
        value={{
          value: 34,
          startAngle: 1,
          endAngle: 2,
        }}
      />,
    );
    wrapper.update({ width: 234, height: 234, value: { value: 23, startAngle: 23, endAngle: 34 }});
    wrapper.unmount();
  });
});
