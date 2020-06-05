interface Wrapper {
  find: (value: string) => any
}

export const findByTestAttr = (wrapper: Wrapper, name: string) => {
  return wrapper.find(`[data-test='${name}']`);
};