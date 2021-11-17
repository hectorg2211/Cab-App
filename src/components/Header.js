import React from "react";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <img src="./assets/logo.jpg" alt="" className="header__logo" />
      </div>
      <div className="header__container">
        <ul className="header__navlist">
          <li>
            <a href="/">Cabs</a>
          </li>
          <li>
            <a href="/">Data</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
      </div>
      <div className="header__container">
        <img src="./assets/hector.jpeg" alt="" className="header__user-image" />
        <h3 className="header__username">My account</h3>
      </div>
    </div>
  );
};

export default Header;
