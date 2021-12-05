import React from "react";
import { Link } from "react-router-dom";

const DashboardScreen = () => {
  return (
    <div className="dashboard">
      <div className="navbar">
        <div className="navbar__info">
          <div className="navbar__image">
            <img
              src="https://images.unsplash.com/photo-1604004555489-723a93d6ce74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="user"
            />
          </div>
          <h3 className="h3 h3--2">User name</h3>
        </div>

        <div className="navbar__container">
          <Link to="/cabs">
            <h3 className="h3 h3--2">Cabs</h3>
          </Link>
          <Link to="/cabs">
            <h3 className="h3 h3--2">Reports</h3>
          </Link>
        </div>
      </div>
      <div className="data">Hello</div>
    </div>
  );
};

export default DashboardScreen;
