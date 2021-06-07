/* eslint-disable prefer-const */
/* eslint-disable no-console */
// == Import npm
import React from 'react';

// == Import

// components
import Header from 'src/components/Header';
import CurrenciesList from 'src/components/CurrenciesList';
import Result from 'src/components/Result';
import ToggleButton from 'src/components/ToggleButton';

// import des données
import currencies from 'src/data/currencies';

import './styles.css';

// == Composant
class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: true,
      amountToConvert: 1,
      selectedCountry: 30,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleConvertRate = this.handleConvertRate.bind(this);
  }

  handleClick() {
    const { open } = this.state;
    this.setState({
      open: !open,
    });
  }

  handleConvertRate(event) {
    this.setState({
      selectedCountry: event.currentTarget.id,
    });
  }

  render() {
    const { open, amountToConvert, selectedCountry } = this.state;

    return (
      <div className="app">
        <Header amountToConvert={amountToConvert} />
        <ToggleButton isOpen={open} manageClick={this.handleClick} />
        {open && <CurrenciesList currencies={currencies} manageClick={this.handleConvertRate} />}
        <Result
          currencies={currencies}
          selectedCurrency={currencies[selectedCountry].name}
          result={(amountToConvert * currencies[selectedCountry].rate).toFixed(2)}
        />
      </div>
    );
  }
}

// == Export
export default App;
