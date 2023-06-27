import { BrowserRouter, Route, Routes } from "react-router-dom";
import AnimeItem from "./Components/AnimeItem/AnimeItem";
import Home from "./Components/Home/Home";
import CharacterGallery from "./Components/CharacterGallery/CharacterGallery";
import SignUpForm from "./Components/SignUpForm/SignUpForm";
import SignInForm from "./Components/SignInForm/SignInForm";

import "./App.scss";
import "./styles/global.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anime/:id" element={<AnimeItem />} />
        <Route path="/character/:id" element={<CharacterGallery />} />
        <Route path="/signin/form" element={<SignInForm />} />
        <Route path="/signup/form" element={<SignUpForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
