import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const isStrictMode = import.meta.env.VITE_STRICT_MODE == 'true';

ReactDOM.createRoot(document.getElementById("root")!).render(
  isStrictMode ? (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  ) : (
    <App />
  )
);