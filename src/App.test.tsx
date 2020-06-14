import React from 'react';
import App from './App';
import {shallow} from "enzyme";

const setup = (props={}) => {
  return shallow(<App { ...props } />);
};

test('renders App component', () => {
  const wrapper = setup();
  expect(wrapper.length).toBe(1);
});
