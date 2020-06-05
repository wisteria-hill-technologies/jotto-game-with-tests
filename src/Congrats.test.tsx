import React from "react";
import { shallow } from 'enzyme';
import Congrats from "./Congrats";
import { findByTestAttr } from './test/testUtils';

const setup = (props={}) => {
  return shallow(<Congrats { ...props } />);
};

describe("Congrats", () => {
  test('renders without error', () => {

  });
  test("renders no text when 'success' prop is false", () => {

  });
  test("renders congrats message when 'success' prop is true", () => {

  });
});