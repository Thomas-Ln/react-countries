import React, { Component } from 'react';
import {formatNumber}       from '../helpers';
import Pagination           from '../components/Pagination';
import CountryLight         from '../components/CountryLight';

class Global extends Component {
  constructor() {
    super();
    this.state = {
      countries: [],
      currentPage: 1
    };
    this.handleChangePage = this.handleChangePage.bind(this);
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

  handleChangePage(page) {
    this.setState({currentPage: page});
  }

  render () {
    const itemsPerPage = 25;

    const paginatedCountries = Pagination.getData(
      this.state.countries,
      this.state.currentPage,
      itemsPerPage
    );

    const CountriesList = paginatedCountries.map((country) => {
      return (
        <CountryLight
          flag={country.flag}
          name={country.name}
          capital={country.capital}
          region={country.region}
          population={formatNumber(country.population)}
        />)
    })

    return (
      <>
        {CountriesList}
        <Pagination
          currentPage={this.state.currentPage}
          itemsPerPage={itemsPerPage}
          length={this.state.countries.length}
          onPageChanged={this.handleChangePage}
        />
      </>
    );
  }
}

export default Global;
