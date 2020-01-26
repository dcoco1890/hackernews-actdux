import React from "react";

const QueryListItem = props => (
  <li id={props.id} onClick={props.onClick}>
    <button className="waves-effect waves-light btn" onClick={props.onClick}>
      {" "}
      {props.item}
    </button>
  </li>
);

export default QueryListItem;
