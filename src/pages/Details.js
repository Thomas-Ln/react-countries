import React, { Component } from 'react';
import {formatNumber}       from '../helpers';
import Country              from '../components/Country';

class Details extends Component {
  constructor() {
    super();
    this.state = {
      details: [],
      error: false
    };
  };

  componentDidMount() {
    fetch( 'https://restcountries.eu/rest/v2/name/' + this.props.match.params.name.replace(/_/g, " ") + '?fields=flag;name;nativeName;capital;region;subregion;population;topLevelDomain;languages;currencies;borders')
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('country not found !') }
    })
    .then((data) => {
      this.setState({ details: data })
    })
    .catch((error) => {
      this.setState({ error: error.toString() })
    })
  };

  render () {
    let content;
    if (this.state.error === false) {
      content = this.state.details.map(country => {
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
      })
    } else {
      content = <h2>{this.state.error}</h2>;
    }

    return (
      <>
        {content}
      </>
    );
  }
}

export default Details;
