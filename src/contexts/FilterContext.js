import React, { Component } from 'react';

export const FilterContext = React.createContext();

// return filtered countries
// (by continent or population number)
export default class FilterContextProvider extends Component {
  state = {
    filter: []
  }

  setFilter = (countries) => {
    this.setState({filter: countries});
  }

  render () {
    const {filter}    = this.state;
    const {setFilter} = this;

    return (
      <FilterContext.Provider value={{filter, setFilter}}>
        {this.props.children}
      </FilterContext.Provider>
    );
  }
}
