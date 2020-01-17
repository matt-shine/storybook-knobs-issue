import React from 'react';
import PropTypes from 'prop-types';

const Test = ({ textProp, numberProp }) => (
    <div>{textProp} {numberProp}</div>
);

Test.propTypes = {
  textProp: PropTypes.string.isRequired,
  numberProp: PropTypes.number.isRequired,
};

export default Test;
