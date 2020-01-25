import React from "react";

const styles = {
  outerCard: {
    cursor: "pointer",
    width: "12rem",
    height: "13.5rem",
    padding: ".75rem 1.5rem",
    display: " flex",
    flexDirection: "column",
    justifyContent: "space-between",
    margin: ".5rem 1.25rem"
  },
  text: {
    textAlign: "left",
    fontFamily: "Courier New",
    fontWeight: 400,
    fontSize: "0.9rem",
    color: "#212121"
  },
  text2: {
    textAlign: "left",
    fontFamily: "Courier New",
    fontWeight: 400,
    fontSize: "0.9rem",
    color: "#212121"
  }
};

const ArticleCard = ({ title, author, points, url }) => (
  <div className="col">
    <div className="card blue-grey lighten-3" style={styles.outerCard}>
      <div className="header">
        <a href={url} className="card-title" target="_blank">
          <p style={styles.text}>{title}</p>
        </a>
      </div>
      <div className="card-bottom" style={styles.text2}>
        <div className="score">
          Score:
          <span className="deep-orange-text text-darken-3">{points} </span>
        </div>
        <div className="author">
          By:
          <span className="deep-orange-text text-darken-3">{author} </span>
        </div>
      </div>
    </div>
  </div>
);

export default ArticleCard;
