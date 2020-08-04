import React from 'react';
import PropTypes from 'prop-types';

interface Props {
  secretWord: string
}

const Input: React.FC<Props> = ({ secretWord }) => {
  return (
    <div data-test="component-input">
      Input Component
    </div>
  );
};

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
};

export default Input;