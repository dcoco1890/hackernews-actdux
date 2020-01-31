import {
  articleView,
  SET_VIEW,
  SAVE_QUERY,
  RECEIVE_DATA,
  REQUEST_DATA
} from "./constants";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

// Config for persist
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["queries"]
};

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

// In use, removed spread operator from action.query because it was
// spreading string into separate pieces
const queries = (state = [], action) => {
  switch (action.type) {
    case SAVE_QUERY:
      return [...state, action.query];
    default:
      return state;
  }
};

// works, adds articles and adds them to state
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

const rootReducer = combineReducers({
  selectView,
  articles,
  queries
});

const pReducer = persistReducer(persistConfig, rootReducer);

export default pReducer;
