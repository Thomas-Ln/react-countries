import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({ theme, toggleTheme }) => {
  const icon  = (theme === "light") ? "moon" : "sun";
  const label = (theme === "light") ? "dark" : "light";

  return (
    <header className="d-flex flex-column flex-md-row justify-content-between align-items-center p-3 px-md-5 py-md-4">
      <Link
        className="d-flex"
        to="/">
        <img src="world.svg" alt=""/>
        <h1 className="fz-28 my-0 pt-1 px-2">Where in the World ?</h1>
      </Link>
      <button
        className="btn d-flex justify-content-between border-0 shadow-none theme-toggle"
        onClick={toggleTheme}>
        <img src={icon + ".svg"} alt="theme"/>
        <b>{label} theme</b>
      </button>
    </header>
  );
}

export default Header;
