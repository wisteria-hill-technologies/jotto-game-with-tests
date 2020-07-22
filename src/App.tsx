import React, { Component } from 'react';
import './App.css';
import GuessedWords from './GuessedWords';
import Congrats from './Congrats';

class App extends Component {
  render() {
    return (
      <div className="App container">
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
}

export default App;
