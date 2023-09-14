import React from "react";
import MusicBars from "../Components/MusicBars";
import MusicContainer from "../Components/MusicContainer";
import { useSelector } from "react-redux";

const MusicHome = () => {
  const { musicUrl } = useSelector((state) => state.musicSlice);
  console.log(musicUrl);
  return (
    <div>
      <MusicContainer />
      <div>
        <audio id="music-audio" autoPlay src={musicUrl}></audio>
      </div>
    </div>
  );
};

export default MusicHome;
