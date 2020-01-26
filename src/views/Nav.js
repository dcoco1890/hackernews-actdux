import React from "react";
import { connect } from "react-redux";
import QueryListItem from "../comps/QueryListItem";
import Form from "../comps/Form";
import { fetchQuery } from "../utils/actions";

const styles = {
  query: {
    display: "flex",

    backgroundColor: "#fafafa",
    color: "green"
  },
  nav: {
    backgroundColor: "#ffd180",
    padding: ".25rem "
  }
};

const mapDispatchToProps = dispatch => {
  return {
    search: searchTerm => dispatch(fetchQuery(searchTerm))
  };
};

const mapStateToProps = state => {
  return { queries: state.queries };
};
// connected nav component takes in queries (for now, might split later)
const ConnectedNav = props => (
  <nav style={styles.nav}>
    <div className="nav-form">
      <h4 id="search-hn-header">Search HN</h4>
      <Form />
    </div>
    <div className="queries" style={styles.query}>
      <ul>
        {props.queries.map(item => (
          <QueryListItem
            key={item}
            item={item}
            id={item}
            onClick={() => props.search(item)}
          />
        ))}
      </ul>
    </div>
  </nav>
);

const Nav = connect(mapStateToProps, mapDispatchToProps)(ConnectedNav);
export default Nav;
