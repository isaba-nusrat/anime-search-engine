import "./App.scss";
import "./styles/global.scss";
import Popular from "./Components/Popular/Popular";
import { useContext } from "react";
import { useGlobalContext } from "./context/global";

function App() {
  const global = useGlobalContext();
  console.log(global);
  return (
    <div className="App">
      <Popular />
    </div>
  );
}

export default App;
