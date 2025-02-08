import { createRoot } from "react-dom/client";
import GlobalState from "./context/index.jsx";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
      <GlobalState>
        <App />
      </GlobalState>
  </BrowserRouter>
);