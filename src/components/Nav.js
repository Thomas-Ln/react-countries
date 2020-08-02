import React, {useContext}         from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import {SearchContext}             from '../contexts/SearchContext';
import Search                      from './Search';
import Filter                      from './Filter';
import Button                      from 'react-bootstrap/Button';

const Nav = () => {
  const history = useHistory();
  const {setSearch} = useContext(SearchContext);

  const handleClick = () => {
    history.push('/');
  }

  const DetailsNav =
    <Button
    className="back-button"
    onClick={handleClick}
    variant="none">
      <span
      role="img"
      className="mr-1"
      aria-label="back-button">
        ⬅️
      </span>
      Back
    </Button>;

  const GlobalNav  =
      <>
        <Search />
        <Filter />
      </>
    ;

  const location = useLocation();
  const content  = (location.pathname === "/") ? GlobalNav : DetailsNav;

  return (
    <nav className="row justify-content-between align-items-center m-5">
      {content}
    </nav>
  );
}

export default Nav;
