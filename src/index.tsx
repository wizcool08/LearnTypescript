import * as React from "react";
// import Hello from "./components/Hello/Hello";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import Hello from "./containers/Hello";
import "./index.css";
import { enthusiasm } from "./reducers/index";
import { IStoreState } from "./types/index";
import { EnthusiasmAction } from "./actions";

const store = createStore<IStoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: "TypeScript"
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById("root") as HTMLElement
);
