import React from "react";
import { connect } from "react-redux";
import ArticleCard from "./ArticleCard";
import "./Article.css"

const mapStateToProps = state => {
  return { articles: state.articles.articles };
};

const ConnectedList = ({ articles }) => (
  <>
    <div
      className="row"
      id="connected-row"
   
    >
      {/* Renders a presentational Article componenet */}
      {articles.map((item, i) => (
        <ArticleCard
          key={i}
          title={item.title}
          url={item.url}
          points={item.points}
          author={item.author}
        />
      ))}
    </div>
  </>
);

const ArticleList = connect(mapStateToProps)(ConnectedList);

export default ArticleList;
