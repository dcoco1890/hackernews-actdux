import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import { articleView } from "../../utils/Redux/constants";
import { fetchArticles, fetchRecent } from "../../utils/Redux/actions";
import "./Button.css";

// Constant destructured from constants.js
const { GET_FRONT_PAGE } = articleView;

// State is needed here in order to change the
// color/clickability of the buttons
const mapStateToProps = state => {
  return { selectView: state.selectView };
};

// This is how I'm sending the buttons their
// respective dispatch/onClick event.
const mapDispatchToProps = dispatch => {
  return {
    fetchFront: () => dispatch(fetchArticles()),
    fetchNew: () => dispatch(fetchRecent())
  };
};

const ConnectedViewButton = props => {
  // lame

  let x, y;
  if (props.selectView === GET_FRONT_PAGE) {
    x = true;
    y = false;
  } else {
    y = true;
    x = false;
  }
  return (
    <div id="button-view">
      <Button active={x} onClick={props.fetchFront} text={"Front Page"} />{" "}
      <Button active={y} onClick={props.fetchNew} text={"Recent Posts"} />{" "}
    </div>
  );
};

const ViewButton = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedViewButton);

export default ViewButton;
