import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { AppProvider } from "./context/context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
