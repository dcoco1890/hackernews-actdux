import React from "react";
import ViewButton from "./ViewButton";
const styles = {
  head: {
    color: "#424242",
    fontSize: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%"
  },
  text0: {
    fontSize: "2rem",
    textAlign: "left",
    padding: ".25rem .5rem",
    border: "1px solid #222",
    marginLeft: "1rem"
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
      <h1 style={styles.text0}>HN </h1>
      <ViewButton />
    </header>
  </div>
);

export default Header;
