import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import { fetchArticles } from "./actions";

// Store that will get passed to Reducer with thunk
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

// Create Initial search of current front-page of HN
store.dispatch(fetchArticles()).then(() => console.log(store.getState()));

// Old testing stuff, uncomment out for sum fun
// store.dispatch(fetchArticles()).then(() => console.log(store.getState()));
// store.dispatch(saveQuery("hi"));
// store.dispatch(saveQuery("hi"));
export default store;
