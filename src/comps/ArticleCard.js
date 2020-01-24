import React from "react"

const ArticleCard = ({title, author, comments, url}) => (
    <div class="card blue-grey darken-1">
        <div class="card-content white-text">
            <span class="card-title">{author}</span>
            <p>{title}</p>
            <p>{comments}</p>
        </div>
        <div class="card-action">
            <a href={url}>This is a link</a>
        </div>
  </div>
)

export default ArticleCard;