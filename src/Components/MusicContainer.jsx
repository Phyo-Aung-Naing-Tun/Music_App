import React from "react";
import MusicBars from "./MusicBars";
import { useSelector } from "react-redux";

const MusicContainer = () => {
  const { musicInfos } = useSelector((state) => state.musicSlice);
  console.log(musicInfos);

  return (
    <div>
      {musicInfos?.map((music) => (
        <MusicBars key={Math.random()} {...music} />
      ))}
    </div>
  );
};

export default MusicContainer;
