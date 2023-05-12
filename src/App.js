import { BrowserRouter } from "react-router-dom";

//imports
import "./components/assets/css/style.css";
import MainRouter from "./components/routing/MainRouter";

function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
