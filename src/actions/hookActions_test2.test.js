const secretWord = 'hello';

import { getSecretWord } from './hookactions';

beforeEach(() => {
  fetch.resetMocks();
});

it('getSecretWord', async () => {
  fetch.mockResponseOnce(JSON.stringify(secretWord));

  //// if fetching multiple times, can mock like below.
  // fetch.mockResponses(
  //   [ JSON.stringify(secretWord), { status: 200 }],
  //   [ JSON.stringify(secretWord), { status: 200 }],
  // );

  const mockSetSecretWord = jest.fn();
  await getSecretWord(mockSetSecretWord);

  expect(fetch).toHaveBeenCalledTimes(1);
  expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord);
});

it('handles exception with null', async () => {
  fetch.mockReject(() => 'API Failure');
  const mockSetSecretWord = jest.fn();
  await getSecretWord(mockSetSecretWord);
  expect(fetch).toHaveBeenCalledTimes(1);
  expect(mockSetSecretWord).toHaveBeenCalledWith('');
});