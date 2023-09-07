import React from "react";
import { Route, Routes } from "react-router-dom";
import MusicHome from "../Pages/MusicHome";

const Paths = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<MusicHome />} />
      </Routes>
    </>
  );
};

export default Paths;
