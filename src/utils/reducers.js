import {
  articleView,
  SET_VIEW,
  SAVE_QUERY,
  RECEIVE_DATA,
  REQUEST_DATA
} from "./constants";
import { combineReducers } from "redux";

// Works, tested, returns state with new view option
const { GET_FRONT_PAGE } = articleView;
const selectView = (state = GET_FRONT_PAGE, action) => {
  switch (action.type) {
    case SET_VIEW:
      return action.filter;
    default:
      return state;
  }
};

// Not yet in use
const queries = (state = [], action) => {
  switch (action.type) {
    case SAVE_QUERY:
      return [...state, ...action.query];
    default:
      return state;
  }
};

// works, adds articles async-ly and adds them to state
const articles = (state = { isFetching: false, articles: [] }, action) => {
  switch (action.type) {
    case REQUEST_DATA:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_DATA:
      return Object.assign({}, state, {
        isFetching: false,
        articles: action.data
      });
    default:
      return state;
  }
};

// the root reducer, combines all reducers
// reducers split up and manage separate parts of state
const rootReducer = combineReducers({
  selectView,
  articles,
  queries
});

export default rootReducer;
