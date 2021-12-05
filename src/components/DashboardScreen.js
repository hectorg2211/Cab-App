import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import DashBoardGraphs from "./DashBoardGraphs";

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
          <Link to="/dashboard/reports">
            <h3 className="h3 h3--2">Reports</h3>
          </Link>
          <Link to="/dashboard/cabs">
            <h3 className="h3 h3--2">Cabs</h3>
          </Link>
        </div>
      </div>

      <div className="navbar__ghost"></div>

      <div className="data">
        <div className="data__title">
          <h2 className="h2 h2--1">Dashboard</h2>

          <Routes>
            <Route path="/reports" element={<DashBoardGraphs />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default DashboardScreen;
