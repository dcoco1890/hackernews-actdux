// Adding redux-persist imports 1/31/20

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// redux-persist-----------------------
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "../reducers";
import { fetchArticles } from "../actions";

const persistConfig = {
  key: "root",
  storage
};

const pReducer = persistReducer(persistConfig, rootReducer);

// Store that will get passed to Reducer with thunk
// const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// // Create Initial search of current front-page of HN
// store.dispatch(fetchArticles());

// export default store;

export default () => {
  console.log("Loading Stuff");
  let store = createStore(pReducer, applyMiddleware(thunkMiddleware));
  let persistor = persistStore(store);
  store.dispatch(fetchArticles());
  return { store, persistor };
};
