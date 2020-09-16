import React, { Component } from "react";
import "../assets/css/navBar.css";

class NavBar extends Component {
  render() {
    return (
      <nav id="nav-bar" className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Navbar</span>
        <span className="badge badge-pill badge-info">
          {this.props.totalCount}
        </span>
      </nav>
    );
  }
}

export default NavBar;
