import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import Dev from "./Dev";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <Dev />
  </>
);
