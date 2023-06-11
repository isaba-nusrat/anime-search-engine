import { BrowserRouter } from "react-router-dom";
import Popular from "./Components/Popular/Popular";

import "./App.scss";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Popular />
      </div>
    </BrowserRouter>
  );
}

export default App;
