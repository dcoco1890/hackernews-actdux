import React from "react";

const styles = {
  head: {
    color: "#424242",
    fontSize: "2rem"
  },
  text0: {
    fontSize: "2rem"
  }
};

const Header = () => (
  <div style={{ padding: 0 }} className="col s12">
    <header style={styles.head}>
      <h1 style={styles.text0}>Hackernews</h1>
    </header>
    <p>hey</p>
  </div>
);

export default Header;
