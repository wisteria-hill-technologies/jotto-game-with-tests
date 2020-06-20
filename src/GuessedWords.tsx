import React from "react";
import PropTypes from 'prop-types';

interface Props {

}

const GuessedWords: React.FC<Props> = () => {
  return (
    <div />
  )
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired,
};

export default GuessedWords;