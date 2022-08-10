import "./App.css";
import MainContainer from "./pages/main/main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
