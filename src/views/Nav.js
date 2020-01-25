import React from "react";
import { connect } from "react-redux";
import QueryListItem from "../comps/QueryListItem";
import Form from "../comps/Form";

const styles = {
  query: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafa",
    color: "green"
  },
  nav: {
    height: "100vh",
    backgroundColor: "#ff6e40 "
  },
  ul: {
    display: "flex",
    flexDirection: "column",
    padding: "0 .75rem"
  }
};

const mapStateToProps = state => {
  return { queries: state.queries };
};
// connected nav component takes in queries (for now, might split later)
const ConnectedNav = ({ queries }) => (
  <nav style={styles.nav}>
    {/*This might need to be componentized */}
    <Form />
    <div className="queries" style={styles.query}>
      <p>Your searches:</p>
      <ul className="collection" style={styles.ul}>
        {/* {queries.map(item => (
          <QueryListItem item={item} />
        ))} */}
      </ul>
    </div>
  </nav>
);

const Nav = connect(mapStateToProps)(ConnectedNav);
export default Nav;
