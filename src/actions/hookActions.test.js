const secretWord = 'hello';
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(secretWord),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

import { getSecretWord } from './hookactions';


it('getSecretWord', async () => {
  const mockSetSecretWord = jest.fn();
  await getSecretWord(mockSetSecretWord);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
});

it('handles exception with null', async () => {
  const mockSetSecretWord = jest.fn();
  fetch.mockImplementationOnce(() => Promise.reject('API Failure'));
  await getSecretWord(mockSetSecretWord);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(mockSetSecretWord).toHaveBeenCalledWith('');
});