import React from 'react';

const Header = ({ theme, toggleTheme }) => {
  const icon  = (theme === "light") ? "moon" : "sun";
  const label = (theme === "light") ? "dark" : "light";

  return (
    <header className="d-flex justify-content-between align-items-center py-4 px-5">
      <a href="/" className="d-flex">
        <img src="world.svg" alt=""/>
        <h1 className="my-0 pt-1 px-2">Where in the World ?</h1>
      </a>
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
