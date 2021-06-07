// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './currencies-list.scss';

// == Composant
const CurrenciesList = ({ currencies, manageClick }) => (
  <ul className="countries__list">
    <h4 className="countries__list__title">Currencies</h4>
    {currencies.map((currency) => (
      <li
        key={[currency.name]}
        id={currencies.indexOf(currency)}
        className="countries__list__item"
        onClick={
          manageClick
        }
      >{currency.name}
      </li>
    ))}
  </ul>
);

CurrenciesList.propTypes = {
  manageClick: PropTypes.func.isRequired,
  currencies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};
// == Export
export default CurrenciesList;
