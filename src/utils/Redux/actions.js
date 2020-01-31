import {
  ADD_ARTICLE,
  SAVE_QUERY,
  SET_VIEW,
  RECEIVE_DATA,
  REQUEST_DATA,
  articleView
} from "./constants";
import API from "../API/API";

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

export const requestData = () => ({
  type: REQUEST_DATA
});

export const receiveData = data => ({
  type: RECEIVE_DATA,
  data,
  receivedAt: Date.now()
});

// default search, grabs front page posts
export const fetchArticles = () => {
  return dispatch => {
    dispatch(requestData());
    dispatch(setArticleView(articleView.GET_FRONT_PAGE));
    return API.getHomePage().then(response => {
      const resp = response.data.hits;
      dispatch(receiveData(resp));
    });
  };
};

// Ssearches HN for most recently posted articles
export const fetchRecent = () => {
  return dispatch => {
    dispatch(requestData());
    dispatch(setArticleView(articleView.GET_RECENT_POSTS));
    return API.getRecentPosts().then(response => {
      const resp = response.data.hits;
      dispatch(receiveData(resp));
    });
  };
};

// Uses API to search hn for search term
export const fetchQuery = queryTerm => {
  return dispatch => {
    // letting state know we are requesting data
    dispatch(requestData());
    // setting state reflect view section (get query items)
    dispatch(setArticleView(articleView.GET_QUERY_ITEM));
    return API.searchQueryTerm(queryTerm).then(response => {
      const resp = response.data.hits;
      dispatch(receiveData(resp));
    });
  };
};
