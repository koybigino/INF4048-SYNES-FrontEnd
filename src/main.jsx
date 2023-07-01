import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RecoilRoot } from "recoil";
import { BrowserRouter } from "react-router-dom";

import { Spinner, ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RecoilRoot>
      <React.Suspense fallback={<div className="w-screen h-screen flex justify-center items-center"><Spinner color="amber" className="w-40 h-40" /></div>}>
        <BrowserRouter>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </React.Suspense>
    </RecoilRoot>
  </React.StrictMode>
);
