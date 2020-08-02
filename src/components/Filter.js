import React, { useState, useContext, useEffect } from 'react';
import { CountryContext } from '../contexts/CountryContext';
import { SearchContext }  from '../contexts/SearchContext';
import { FilterContext }  from '../contexts/FilterContext';
import Dropdown           from 'react-bootstrap/Dropdown';

const Filter = () => {
  const countries           = useContext(CountryContext);
  const {setFilter}         = useContext(FilterContext);
  const {search, setSearch} = useContext(SearchContext);
  const filters             = ['Population', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const defaultLabel        = 'Filter By';
  const [label, setLabel]   = useState(defaultLabel);

  // reset label if search isset
  useEffect(() => {
    if (search.length > 0) {
      setLabel(defaultLabel); }
  } ,[search]);

  // bubble sort population number
  // return descending array
  function sortByPopulation() {
    let arr = [...countries];
    var len = arr.length;

    for (var i = 0; i < len ; i++) {
      for(var j = 0 ; j < len - i - 1; j++){
        if (arr[j].population > arr[j + 1].population) {
          var temp = arr[j];
          arr[j] = arr[j+1];
          arr[j + 1] = temp; }}}

    return arr.reverse();
  }

  // return filtered countries to FilterContext
  const handleFilter = (event) => {
    event.preventDefault();
    const filterValue = event.target.innerText;
    const validFilter = filters.some((filter) => filter === filterValue)

    if (!validFilter) {
      setLabel(defaultLabel);
      setFilter(countries); }
    else {
      setSearch([]); // clear main view if search isset
      setLabel(filterValue);
      if (filterValue === "Population") {
        setFilter(sortByPopulation()); }
      else {
        setFilter(countries.filter((country) => country.region === filterValue)); }}
  };

  // dropdown regions items
  const dropItems = filters.map((filter, index) => {
    return (
      <Dropdown.Item key={index} onClick={handleFilter}>{filter}</Dropdown.Item>
    )
  });

  return (
    <Dropdown className="col-2">
      <Dropdown.Toggle className="w-75" variant="none" id="dropdown-basic">
        {label}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleFilter}>Population</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Region</Dropdown.Header>
        {dropItems}
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleFilter}>❌ No Filter</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Filter;
