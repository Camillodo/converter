// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import
import './header.scss';

// == Composant
const Header = ({ amountToConvert }) => (
  <header className="header">
    <h1 className="header__title">Converter</h1>
    <h3 className="header__subtitle">{amountToConvert} Euro</h3>
  </header>
);

Header.propTypes = {
  amountToConvert: PropTypes.number.isRequired,
};
// == Export
export default Header;
