import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import { fetchArticles, saveQuery, fetchRecent, fetchQuery } from "./actions";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
//log store to console
store.dispatch(fetchRecent()).then(() => console.log(store.getState()));
// store.dispatch(fetchArticles()).then(() => console.log(store.getState()));
store.dispatch(saveQuery("hi"));
store.dispatch(saveQuery("hi"));
export default store;
