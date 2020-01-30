import React from "react";
import { connect } from "react-redux";
import { fetchQuery } from "../../utils/actions";
import QueryListItem from "./QueryListItem";

const mapDispatchToProps = dispatch => {
  return {
    search: searchTerm => dispatch(fetchQuery(searchTerm))
  };
};

const mapStateToProps = state => {
  return { queries: state.queries };
};

const ConnectedQueryLists = props => (
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
);
const QueryList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedQueryLists);
export default QueryList;
