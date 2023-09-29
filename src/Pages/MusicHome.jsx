import React, { useRef } from "react";
import MusicContainer from "../Components/MusicContainer";
import { useSelector } from "react-redux";
// import ControlArea from "../Components/ControlArea";

const MusicHome = () => {
  const { singleMusic } = useSelector((state) => state.musicSlice);
  return (
    <div>
      <MusicContainer />
      <div>
        <audio id="music-audio" src={singleMusic?.url}></audio>
      </div>
    </div>
  );
};

export default MusicHome;
