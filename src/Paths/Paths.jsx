import React from "react";
import { Route, Routes } from "react-router-dom";
import MusicHome from "../Pages/MusicHome";
import NavBar from "../Components/NavBar";
import FavouriteMusic from "../Pages/FavouriteMusic";
import ControlArea from "../Components/ControlArea";

const Paths = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MusicHome />} />
        <Route path="/favourite" element={<FavouriteMusic />} />
      </Routes>
      <ControlArea />
    </>
  );
};

export default Paths;
