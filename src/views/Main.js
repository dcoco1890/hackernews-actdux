import React from "react";
import Nav from "./Nav";
import Section from "./Section";

const Main = () => (
  <div style={{ margin: 0 }} className="row">
    <div className="col s12 m4 l3">
      <Nav />
    </div>
    <div style={{ padding: 0 }} className="col s12 m8 l9">
      <Section />
    </div>
  </div>
);

export default Main;
