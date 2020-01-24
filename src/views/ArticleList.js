import React from "react";
import { connect } from "react-redux";
import ArticleCard from "../comps/ArticleCard"

const mapStateToProps = state => {
  return { articles: state.articles.articles };
};

const ConnectedList = ({ articles }) => (
  <>
  <div className="row" style={{marginTop: "2rem"}}>
  
    {articles.map((item, i) => (
      <ArticleCard title={item.title}/>
    ))}
  
  </div>
  </>
);

const ArticleList = connect(mapStateToProps)(ConnectedList);

export default ArticleList;
