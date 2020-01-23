import store from "./store";
import {
  addArticle,
  setArticleView,
  saveQuery,
  receiveData,
  requestData
} from "./actions";

window.store = store;
window.addArticle = addArticle;
window.saveQuery = saveQuery;
window.receiveData = receiveData;
window.setArticleView = setArticleView;
window.requestData = requestData;
