import store from "./store";
import { addArticle, setArticleView, saveQuery } from "./actions";

window.store = store;
window.addArticle = addArticle;
window.saveQuery = saveQuery;
