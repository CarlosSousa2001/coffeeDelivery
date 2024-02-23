import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { GlobalStyles } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyles/>
    </BrowserRouter>
  );
}

export default App;
