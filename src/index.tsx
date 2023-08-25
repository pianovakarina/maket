import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "../src/components/App/App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
