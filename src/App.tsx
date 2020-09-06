import React, { useReducer, useEffect } from 'react';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';
import hookActions from './actions/hookActions';

/**
 * reducer to update state
 * It takes below:
 * state {object} - existing state
 * action {object} - contains 'type' and 'payload' properties for the state update
 * Finally, returns new state
 */

const reducer = (state: any, action: { type: string, payload: null | string }) => {
  switch (action.type) {
    case "setSecretWord":
      return { ...state, secretWord: action.payload }
    default:
      throw new Error(`Invalid action type: ${ action.type }`);
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, { secretWord: null });

  const setSecretWord = (secretWord: string) => dispatch({ type: 'setSecretWord', payload: secretWord });

  useEffect(() => {
    hookActions.getSecretWord(setSecretWord);
  }, []);

  return (
    <div
      data-test="component-app"
      className="App container"
    >
      <h1>Jotto</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[
        { guessedWord: 'robot', letterMatchCount: 5 },
        { guessedWord: 'friend', letterMatchCount: 2 },
        { guessedWord: 'training', letterMatchCount: 7 }
      ]} />
    </div>
  );
}

export default App;
