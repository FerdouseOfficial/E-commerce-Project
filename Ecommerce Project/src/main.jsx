import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { EcomConProvider, EcomContext } from "./Context/EcomContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <EcomConProvider>
      <App />
    </EcomConProvider>
  </StrictMode>,
);

// Can you please explain each and everything about the children please for me as you always does very simply okay and professionally so that I can also make other or interview question professionally okay

// from now on You will answer every question on this way on this structure okay which I have told you
