import React from 'react';
import PropTypes from 'prop-types';

import './toggleButton.scss';

const ToggleButton = ({ isOpen, manageClick }) => {
  let cssClass = 'toggle-button';
  if (isOpen) {
    cssClass += ' toggle-button--open';
  }

  return (
    <button
      className={cssClass}
      type="button"
      onClick={() => {
        manageClick();
      }}
    >
      =
    </button>
  );
};

ToggleButton.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  // function
  manageClick: PropTypes.func.isRequired,
};

export default ToggleButton;
