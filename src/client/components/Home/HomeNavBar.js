import React, { Component } from 'react';

const HomeNavBar = () => (
  <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="#">Vital Health</a>
      </div>
      <div id="navbar" className="navbar-collapse collapse">
        <ul className="nav navbar-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <li><a href="../navbar/">Login</a></li>
          <li><a href="../navbar-static-top/">Signup</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default HomeNavBar;
