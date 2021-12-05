import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <div className="header__container">
          <img
            src="/assets/logo.png"
            alt=""
            className="header__logo"
            onClick={() => navigate("/")}
          />
        </div>

        <div className="header__container">
          <ul className="header__navlist">
            <li>
              <Link to="/">Cabs</Link>
            </li>
            <li>
              <Link to="/dashboard/reports">Dashboard</Link>
            </li>
            <li>
              <a href="/">About us</a>
            </li>
          </ul>
        </div>

        <div className="header__container">
          {/* TODO: Here goes the user image className="header__user-image" */}
          <h3 className="header__username">My account</h3>
        </div>
      </div>

      <div className="header__ghost"></div>
    </>
  );
};

export default Header;
