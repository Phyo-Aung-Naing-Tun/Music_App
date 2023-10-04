import React from "react";
import { Route, Routes } from "react-router-dom";
import MusicHome from "../Pages/MusicHome";
import NavBar from "../Components/NavBar";
import ControlArea from "../Components/ControlArea";

const Paths = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<MusicHome />} />
      </Routes>
      <ControlArea />
    </>
  );
};

export default Paths;
