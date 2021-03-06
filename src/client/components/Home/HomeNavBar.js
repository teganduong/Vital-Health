import React, { Component } from 'react';
import { Link } from 'react-router';

const HomeNavBar = () => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button 
          type="button" 
          className="navbar-toggle collapsed" 
          data-toggle="collapse" 
          data-target="#navbar" 
          aria-expanded="false" 
          aria-controls="navbar"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Fit Together</a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#section1">Section1</a></li>
          <li><a href="#section2">Section2</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a data-toggle="modal" data-target="#loginModal">Login</a></li>
          <li><Link to="/signup">Create Account</Link></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default HomeNavBar;
