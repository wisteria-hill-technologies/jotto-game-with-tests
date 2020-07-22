export function getLetterMatchCount(guessedWord: string, secretWord: string) {
  const secretLetterSet = new Set(secretWord.split(''));
  const guessedLetterSet = new Set(guessedWord.split(''));
  // @ts-ignore
  return [ ...secretLetterSet ].filter(letter => guessedLetterSet.has(letter)).length;
}