import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <div className="logo">Ollie</div>
        <nav className="nav">
          <li>
            <a href="/design">Design</a>
          </li>
          <li>
            <a href="/strategy">Strategy</a>
          </li>
          <li>
            <a href="/cases">Cases</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/why">Why work with us?</a>
          </li>
        </nav>
        <div className="contact">
          <a href="/contact">Let's work together</a>
        </div>
        <div className="hamburger-menu">
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
