import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header  className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">

    <a className="navbar-brand" href="/">
      <img src="/images/logo.png" width="30" height="" alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav justify-content-around w-100">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/" activeClassName="is-active" exact={true}>Home</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/experience" activeClassName="is-active">Experience</NavLink>
      </li>
      <li className="nav-item active">
        <NavLink className="nav-link" to="/projects" activeClassName="is-active">Projects</NavLink>
      </li>
    </ul>
  </div>
  </header>
);

export default Header;
