import { ADD_ARTICLE, SAVE_QUERY, SET_VIEW } from "./constants";

// action creators
export function setArticleView(filter) {
  return {
    type: SET_VIEW,
    filter
  };
}
// trying out ES6 syntax, returning obj by enclosing in ()
export const addArticle = article => ({
  type: ADD_ARTICLE,
  article
});

export const saveQuery = query => ({
  type: SAVE_QUERY,
  query
});
