import React, { Component } from 'react';
import {formatNumber}       from '../helpers';
import CountryLight         from '../components/CountryLight';

class General extends Component {
  constructor() {
    super();
    this.state = {
      countries: []
    };
  };

  componentDidMount() {
    // if storage contains data
    const json = localStorage.getItem('json')
    if (json) {
      this.setState({ countries: JSON.parse(json) })
    } else {
      // else fetch countries data from api
      fetch('https://restcountries.eu/rest/v2/all?fields=flag;name;capital;region;population')
      .then(res => res.json())
      .then((data) => {
        this.setState({ countries: data });
        // and save in local storage
        localStorage.setItem('json', JSON.stringify(data))
      }).catch(console.log)
    }
  };

  render () {
    const countries = this.state.countries.map(country => {
      return (
        <CountryLight
          flag={country.flag}
          name={country.name}
          capital={country.capital}
          region={country.region}
          population={formatNumber(country.population)}
        />
      )
    });

    return (
      <>
        {countries}
      </>
    );
  }
}

export default General;
