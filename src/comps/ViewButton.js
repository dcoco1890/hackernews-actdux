import React from "react";
import { connect } from "react-redux";
import Button from "./Button";
import { articleView } from "../utils/constants";
import { fetchArticles, fetchRecent } from "../utils/actions";

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
  // So, just off the cuff, i know this looks dumb as hell and
  // it only works cause i have 2 buttons, but ya boi's brain
  // is melting cause he can not figure out how to make this easier rn
  console.log(props);
  let x, y;
  if (props.selectView === GET_FRONT_PAGE) {
    x = true;
    y = false;
  } else {
    y = true;
    x = false;
  }
  return (
    <div style={{ paddingRight: "1rem" }}>
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
