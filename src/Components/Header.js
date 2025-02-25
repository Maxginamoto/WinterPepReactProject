import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Lo from './Lo.png';

const Header = () => {
  const currentDate = new Date().toDateString();

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light header-container">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          <img src={Lo} alt="Adel" className="logo" />
        </Link>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/trains">Trains</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/flights">Flights</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/hotels">Hotels</Link>
            </li>
          </ul>
        </div>

        <span className="navbar-text current-date">{currentDate}</span>
      </div>
    </nav>
  );
};

export default Header;
