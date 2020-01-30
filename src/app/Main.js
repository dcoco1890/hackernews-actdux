import React from "react";
import Nav from "../components/Nav/Nav";
import Form from "../components/Form/Form"
import Header from "../components/Header/Header";
import QueryList from "../components/SearchTerms/QueryList";
import ArticleList from "../components/Article/ArticleList";

const Main = () => (
  <div style={{ margin: 0 }} className="row">
    <div className="col s12 m3 l2">
      <Nav 
      form={<Form />}
      queries={<QueryList />}
      />
    </div>
    <div style={{ padding: 0 }} className="col s12 m9 l10">
      <Header />
      <ArticleList />
    </div>
  </div>
);

export default Main;
