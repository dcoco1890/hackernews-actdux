import React from "react";
import ViewButton from "./ViewButton";
const styles = {
  head: {
    color: "#424242",
    fontSize: "2rem",
    display: "flex",
    justifyContent: "space-between"
  },
  text0: {
    fontSize: "2rem",
    textAlign: "left",
    paddingLeft: "1rem"
  }
};

const Header = () => (
  <div
    style={{
      padding: 0,
      borderBottom: "1px solid rgba(0,0,0,0.14)",
      height: "55px"
    }}
   
  >
    <header style={styles.head}>
      <h1 style={styles.text0}>Hackernews</h1>
      <ViewButton />
    </header>
  </div>
);

export default Header;
