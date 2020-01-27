import React from "react";
import { connect } from "react-redux";
import ArticleCard from "../comps/ArticleCard";

const mapStateToProps = state => {
  return { articles: state.articles.articles };
};

const ConnectedList = ({ articles }) => (
  <>
    <div
      className="row"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "0 1.25rem",
        maxHeight: "calc(100vh - 55px)",
        overflow: "auto"
      }}
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
