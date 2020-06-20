// @ts-ignore
import checkPropTypes from 'check-prop-types';

interface Wrapper {
  find: (value: string) => any
}

export const findByTestAttr = (wrapper: Wrapper, name: string) => {
  return wrapper.find(`[data-test="${name}"]`);
};

export const checkProps = (component: any, conformingProps: any) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    'prop',
    component.name
  );
  expect(propError).toBeUndefined();
};
