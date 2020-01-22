import React from "react";
import { connect } from "react-redux";

const styles = {
  query: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafa",
    color: "green"
  },
  nav: {
    height: "100vh"
  }
};

const mapStateToProps = state => {
  return { queries: state.queries };
};
// connected nav component takes in queries (for now, might split later)
const ConnectedNav = ({ queries }) => (
  <nav style={styles.nav}>
    <div className="search">
      <input type="text" />
    </div>
    <div className="queries" style={styles.query}>
      <ul>
        {queries.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  </nav>
);

const Nav = connect(mapStateToProps)(ConnectedNav);
export default Nav;
