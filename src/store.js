import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';

// Creating store for Provider
const store = createStore(rootReducer);

export default store;