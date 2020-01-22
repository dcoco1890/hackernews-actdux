import { ADD_ARTICLE, articleView, SET_VIEW, SAVE_QUERY } from "./constants";
import { setArticleView, addArticle } from "./actions";

const initialState = {
  view: articleView.GET_FRONT_PAGE,
  articles: {},
  queries: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VIEW:
      return Object.assign({}, state, {
        articleView: action.filter
      });
    case ADD_ARTICLE:
      return Object.assign({}, state, {
        articles: {
          ...state.articles,
          ...action.article
        }
      });
    case SAVE_QUERY:
      return Object.assign({}, state, {
        queries: [...state.queries, action.query]
      });
    default:
      return state;
  }
};

export default rootReducer;
