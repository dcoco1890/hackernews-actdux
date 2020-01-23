import {
  ADD_ARTICLE,
  SAVE_QUERY,
  SET_VIEW,
  RECEIVE_DATA,
  REQUEST_DATA
} from "./constants";
import API from "./API";

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

export const fetchArticles = viewtype => {
  return dispatch => {
    dispatch(requestData());
    return API.getHomePage().then(response => {
      const resp = response.data.hits;
      dispatch(receiveData(resp));
    });
  };
};
