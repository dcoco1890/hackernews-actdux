// Adding redux-persist imports 1/31/20
import { persistStore } from "redux-persist";

// Typical Redux stuff
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { fetchArticles } from "../actions";
import pReducer from "../reducers";

// Logging
// import logger from "redux-logger";

// New Persisting reducer

export default () => {
  let store = createStore(pReducer, applyMiddleware(thunkMiddleware));
  let persistor = persistStore(store);
  store.dispatch(fetchArticles());
  return { store, persistor };
};

// USe this if you want to log state
// let store = createStore(pReducer, applyMiddleware(thunkMiddleware, logger));
