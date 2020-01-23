import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { articles: state.articles.articles };
};

const ConnectedList = ({ articles }) => (
  <ul>
    {articles.map((item, i) => (
      <li key={i}>{item.title}</li>
    ))}
  </ul>
);

const ArticleList = connect(mapStateToProps)(ConnectedList);

export default ArticleList;
