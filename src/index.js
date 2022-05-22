import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
    <Buttons />
    <Cards />
  </StrictMode>
);
