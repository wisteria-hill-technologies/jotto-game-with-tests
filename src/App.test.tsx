import React from 'react';
import {shallow} from "enzyme";
import { findByTestAttr } from './test/testUtils';
import App from './App';

const setup = (props={}) => {
  return shallow(<App { ...props } />);
};

test('App renders without error', () => {
  const wrapper = setup();
  const component = findByTestAttr(wrapper, 'component-app');
  expect(component.length).toBe(1);
});
