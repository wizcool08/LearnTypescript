import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "./components/Hello/Hello";
import "./index.css";

ReactDOM.render(
  <Hello name="TypeScript" enthusiasmLevel={2} />,
  document.getElementById("root") as HTMLElement
);
