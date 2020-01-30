import React from "react";
import "./Article.css";



const ArticleCard = ({ title, author, points, url }) => (
  <div className="col">
    <div className="card blue-grey lighten-3">
      <div className="header">
        <a
          href={url}
          rel="noreferrer noopener"
          className="card-title"
          target="_blank"
        >
          <p className="article-headline">{title}</p>
        </a>
      </div>
      <div className="card-bottom">
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
