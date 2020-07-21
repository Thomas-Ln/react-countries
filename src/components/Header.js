import React from 'react';

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center py-4 px-5">
      <a href="/" className="d-flex text-dark text-decoration-none">
        <img src="world.svg" alt=""/>
        <h1 className="my-0 pt-1 px-2">Where in the World ?</h1>
      </a>
      <span className="theme-toggle">
        <img src="moon.svg" alt="theme"/>
        <b className="text-dark">Dark Theme</b>
      </span>
    </header>
  );
}

export default Header;
