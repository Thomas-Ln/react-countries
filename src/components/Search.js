import React, { useState, useContext, useEffect } from 'react';
import { CountryContext }                         from '../contexts/CountryContext';
import { FilterContext }                          from '../contexts/FilterContext';
import { SearchContext }                          from '../contexts/SearchContext';
import { Form, FormControl, InputGroup, Button }  from 'react-bootstrap';

const Search = (props) => {
  const countries         = useContext(CountryContext);
  const {filter}          = useContext(FilterContext);
  const {setSearch}       = useContext(SearchContext);
  const [value, setValue] = useState('');

  // reset input value if filter isset
  useEffect(() => {
    setValue('');
  }, [filter])

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  // return searched country to SearchContext
  const handleSubmit = (event) => {
    event.preventDefault();
    const search = countries.filter((country) =>
      // country.name.toLowerCase() === value.toLowerCase());
      country.name.toLowerCase().includes(value.toLowerCase()));
    if (typeof search !== "undefined") {
      setSearch(search); }
    else {
      setSearch(countries); }
  };

  return (
      <Form
        className="row col-xl-4 col-md-6"
        onSubmit={handleSubmit}>
          <InputGroup className="mb-3">
            <InputGroup.Prepend className="col-2">
              <Button
                className="shadow-none"
                variant="none"
                type="submit">
                <img src="search-dark.svg" alt="submit"/>
              </Button>
            </InputGroup.Prepend>
            <FormControl
              className="col-10 pl-3 border-0"
              aria-describedby="basic-addon1"
              type="search"
              placeholder="Search for a country..."
              value={value}
              onChange={handleChange}
            />
          </InputGroup>
      </Form>
  );
}

export default Search;
