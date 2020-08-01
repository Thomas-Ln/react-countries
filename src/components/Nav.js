import React  from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Search from './Search';
import Filter from './Filter';
import Button from 'react-bootstrap/Button';

const Nav = () => {
  const history = useHistory();
  const DetailsNav =
    <Button
    className="back-button"
    onClick={() => history.push('/')}
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
