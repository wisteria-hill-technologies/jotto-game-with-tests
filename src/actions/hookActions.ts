export const getSecretWord = async (setSecretWord: (text: string) => void) => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const result = await response.json();
    setSecretWord(result);
  } catch(e) {
    console.log(e)
    setSecretWord('');
  }
}

// default export for mocking convenience
export default {
  getSecretWord
}