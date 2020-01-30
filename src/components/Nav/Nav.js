import React from "react";
import "./Nav.css";

const Nav = props => (
  <nav id="navbar">
    <div>
      <h4 id="search-hn-header">Search HN</h4>
      {props.form}
    </div>
    <div className="queries">{props.queries}</div>
  </nav>
);

export default Nav;
