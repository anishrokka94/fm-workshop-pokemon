import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";

import Favourites from "../Pages/Favourites";
import Home from "../Pages/Home";
import Footer from "../components/Footer";
import PokedexList from "../Pages/PokedexList";
import PokedexDetails from "../Pages/PokedexDetails";
import Profile from "../Pages/Profile";

const Allroutes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex/list" element={<PokedexList />} />
        <Route path="/view/:name" element={<PokedexDetails />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<p> Page not found </p>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Allroutes;
