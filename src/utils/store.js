import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";
import { fetchArticles } from "./actions";

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
store.dispatch(fetchArticles()).then(() => console.log(store.getState()));
export default store;
