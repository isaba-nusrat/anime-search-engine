import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popular from "./Components/Popular/Popular";
import AnimeItem from "./Components/AnimeItem/AnimeItem";

import "./App.scss";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Popular />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
