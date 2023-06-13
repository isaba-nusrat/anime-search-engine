import { BrowserRouter, Route, Routes } from "react-router-dom";
import Popular from "./Components/Popular/Popular";
import AnimeItem from "./Components/AnimeItem/AnimeItem";
import Home from "./Components/Home/Home";
import CharacterGallery from "./Components/CharacterGallery/CharacterGallery";

import "./App.scss";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
        <Route path="/character/:id" element={<CharacterGallery />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
