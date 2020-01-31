import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import store from "./utils/Redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";
import configStore from "./utils/Redux/store/";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const { persistor, store } = configStore();

const onBeforeLift = () => (
  <div>
    <p>Nothing to see here</p>
  </div>
);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate
      loading={null}
      onBeforeLift={onBeforeLift}
      persistor={persistor}
    >
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
