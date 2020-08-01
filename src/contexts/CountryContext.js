import React from 'react';

export const CountryContext = React.createContext();

export default class CountryContextProvider extends React.Component {
  state = {
    countries: []
  }

  componentDidMount() {
    const json = localStorage.getItem('json')
    if (json) {
      this.setState({ countries: JSON.parse(json) })
    } else {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then((data) => {
        this.setState({ countries: data });
        localStorage.setItem('json', JSON.stringify(data))
      }).catch(console.log)
    }
  }

  render() {
    return (
      <CountryContext.Provider value={this.state.countries}>
        {this.props.children}
      </CountryContext.Provider>
    );
  }
}
