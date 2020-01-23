import React from "react";

const styles = {
  color: "#eee",
  fontSize: "2rem"
};

const Header = () => (
  <div style={{ padding: 0 }} className="col s12">
    <header style={styles}>
      <h1 style={styles}>Hackernews</h1>
    </header>
  </div>
);

export default Header;
