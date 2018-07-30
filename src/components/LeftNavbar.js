import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./LeftNavbar.css";

class LeftNavbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/user">UserProfile</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default LeftNavbar;
