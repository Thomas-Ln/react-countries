import React, { Component } from 'react';
import {formatNumber} from '../helpers';
import Country from '../components/Country';

class Details extends Component {
  constructor() {
    super();
    this.state = {details: []};
  };

  componentDidMount() {
    const api_url = 'https://restcountries.eu/rest/v2/name/France?fields=flag;name;nativeName;capital;region;subregion;population;topLevelDomain;languages;currencies;borders';
    fetch(api_url)
    .then(res => res.json())
    .then((data) => {
      this.setState({
        details: data
      })
    }).catch(console.log)
  };


  render () {
    const country = this.state.details.map(country => {
      return (
        <Country
          flag={country.flag}
          name={country.name}
          nativeName={country.nativeName}
          capital={country.capital}
          region={country.region}
          subregion={country.subregion}
          population={formatNumber(country.population)}
          topLevelDomain={country.topLevelDomain}
          currencies={country.currencies}
          languages={country.languages}
          borders={country.borders}
        />
      )
    });

    return (
      <>
        {country}
      </>
    );
  }
}

export default Details;
