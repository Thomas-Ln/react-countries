import React, {useState} from 'react';
import Dropdown          from 'react-bootstrap/Dropdown';

const Filter = () => {
  const [filter, setFilter] = useState('Filter By');
  const [value, setValue] = useState('');

  const handleClick = (event) => {
    event.preventDefault();
    let text = event.target.innerText;
    setValue(text);
    setFilter((text === "No Filter") ? "Filter By" : text);

    // load in global
    // array.map where region === text
  };

  return (
    <Dropdown className="col-2">
      <Dropdown.Toggle className="w-75" variant="none" id="dropdown-basic">
        {filter}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={handleClick}>Population</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Header>Region</Dropdown.Header>
        <Dropdown.Item onClick={handleClick}>Africa</Dropdown.Item>
        <Dropdown.Item onClick={handleClick}>America</Dropdown.Item>
        <Dropdown.Item onClick={handleClick}>Asia</Dropdown.Item>
        <Dropdown.Item onClick={handleClick}>Europe</Dropdown.Item>
        <Dropdown.Item onClick={handleClick}>Oceania</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={handleClick}>No Filter</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Filter;
