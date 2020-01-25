import React from "react";
import Nav from "./Nav";

import Header from "../comps/Header";
import ArticleList from "./ArticleList";

const Main = () => (
  <div style={{ margin: 0 }} className="row">
    <div className="col s12 m3 l2">
      <Nav />
    </div>
    <div style={{ padding: 0 }} className="col s12 m9 l10">
      <Header />
      <ArticleList />
    </div>
  </div>
);

export default Main;
