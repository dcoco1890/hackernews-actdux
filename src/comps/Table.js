import React from "react";
import { connect } from "react-redux";
import Row from "./Row";

const mapStateToProps = state => {
  return { articles: state.articles };
};

const ConnectedTable = ({ articles }) => {
  // if no articles return nothing
  if (!articles) return null;
  return (
    <table>
      <tbody>
        {/*Looping through the articles, and rendering a row comp */}
        {articles.map(item => (
          <Row key={item.id} data={item} />
        ))}
      </tbody>
    </table>
  );
};
