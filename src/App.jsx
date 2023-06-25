import ScrollToTop from "./components/scoll-to-top/Main";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

function App() {
  return (
      <BrowserRouter>
        <Router />
        <ScrollToTop />
      </BrowserRouter>
  );
}

export default App;
