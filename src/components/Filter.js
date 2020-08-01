import React, { useState, useContext } from 'react';
import { CountryContext }              from '../contexts/CountryContext';
import { FilterContext }               from '../contexts/FilterContext';
import Dropdown                        from 'react-bootstrap/Dropdown';

const Filter = () => {
  const countries         = useContext(CountryContext);
  const {setFilter}       = useContext(FilterContext);
  const regions           = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  const [label, setLabel] = useState('Filter By');

  // return filtered countries to FilterContext
  const handleFilter = (event) => {
    event.preventDefault();
    const filterValue = event.target.innerText;
    const validFilter = regions.some((region) => region === filterValue)
    if (!validFilter) {
      setLabel("Filter By");
      return false; }
    else {
      setLabel(filterValue);
      setFilter(countries.filter((country) => country.region === filterValue)); }
  };

  // dropdown regions items
  const dropItems = regions.map((region, index) => {
    return (
      <Dropdown.Item key={index} onClick={handleFilter}>{region}</Dropdown.Item>
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
        <Dropdown.Item onClick={handleFilter}>No Filter</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Filter;
