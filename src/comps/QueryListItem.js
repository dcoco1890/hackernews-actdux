import React from "react";

const QueryListItem = props => (
  <li id={props.id} onClick={props.onClick} className="collection-item">
    <button onClick={props.onClick}> {props.item}</button>
  </li>
);

export default QueryListItem;
