import React from "react";
import { connect } from "react-redux";
import Button from "./Button";

import { articleView } from "../utils/constants";
// import { fetchArticles, fetchRecent, fetchQuery } from "../utils/actions";

const { GET_FRONT_PAGE } = articleView;

const mapStateToProps = state => {
  return { selectView: state.selectView };
};

const mapDispatchToProps = dispatch => {
  return {};
};

const ConnectedViewButton = ({ selectView }) => {
  // So, just off the cuff, i know this looks dumb as hell and
  // it only works cause i have 2 buttons, but ya boi's brain
  // is melting cause he can not figure out how to make this easier rn
  let x, y;
  if (selectView === GET_FRONT_PAGE) {
    x = true;
    y = false;
  } else {
    y = true;
    x = false;
  }
  return (
    <div style={{ paddingRight: "1rem" }}>
      <Button active={x} text={"Front Page"} />{" "}
      <Button text={"Recent Posts"} active={y} />{" "}
    </div>
  );
};

const ViewButton = connect(mapStateToProps)(ConnectedViewButton);

export default ViewButton;
