import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import MyContext from "./MyContext";

ReactDOM.render(
  <React.StrictMode>
    <MyContext.Provider value={"hello context"}>
      <App />
    </MyContext.Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
