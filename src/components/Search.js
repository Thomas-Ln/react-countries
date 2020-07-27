import React, { useState, useEffect } from 'react';
import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

const Search = () => {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    // arraycountry.find(value)
  }

  return (
    <Form
      className="row col-4"
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
