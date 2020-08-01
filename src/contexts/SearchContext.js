import React, { Component } from 'react';

export const SearchContext = React.createContext();

// return Searched country
export default class SearchContextProvider extends Component {
  state = {
    search: []
  }

  setSearch = (countries) => {
    this.setState({search: countries});
  }

  render () {
    const {search}    = this.state;
    const {setSearch} = this;

    return (
      <SearchContext.Provider value={{search, setSearch}}>
        {this.props.children}
      </SearchContext.Provider>
    );
  }
}
