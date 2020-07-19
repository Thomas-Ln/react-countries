import React, { Component } from 'react';
import {formatNumber} from '../helpers';
import CountryLight from '../components/CountryLight';

class General extends Component {
  constructor() {
    super();
    this.state = {countries: []};
  };

  componentDidMount() {
    const api_url = 'https://restcountries.eu/rest/v2/all?fields=flag;name;capital;region;population';
    fetch(api_url)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        countries: data
      })
    }).catch(console.log)
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
