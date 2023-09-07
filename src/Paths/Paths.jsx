import React from "react";
import { Route, Routes } from "react-router-dom";
import MusicHome from "../Pages/MusicHome";
import NavBar from "../Components/NavBar";

const Paths = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MusicHome />} />
      </Routes>
    </>
  );
};

export default Paths;
