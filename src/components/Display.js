import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { output } = props;
  return (
    <div className="display">{output}</div>
  );
};

Display.propTypes = {
  output: PropTypes.string.isRequired,
};

export default Display;
