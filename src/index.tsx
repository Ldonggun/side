import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./shared/login";

const authService = new AuthService();

ReactDOM.render(
  <React.StrictMode>
    <App {...authService} />
  </React.StrictMode>,
  document.getElementById("root")
);
