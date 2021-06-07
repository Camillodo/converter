// == Import npm
import React from 'react';

// == Import
import './result.scss';
import PropTypes from 'prop-types';

// == Composant
const Result = ({ selectedCurrency, result }) => (
  <footer className="result__container">
    <h2 className="result__amount">{result}</h2>
    <h3 className="result__currency">{selectedCurrency}</h3>
  </footer>
);

Result.propTypes = {
  result: PropTypes.string.isRequired,
  selectedCurrency: PropTypes.string.isRequired,

};
// == Export
export default Result;
