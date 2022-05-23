import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";
import Login from "../components/Login";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Login />
    <App />
    <Buttons />
    <Cards />
  </StrictMode>
);
