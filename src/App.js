import "./components/assets/css/style.css";
import MainRouter from "./components/routing/MainRouter";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <MainRouter />
    </BrowserRouter>
  );
}

export default App;
