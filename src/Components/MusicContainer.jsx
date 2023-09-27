import React from "react";
import MusicBars from "./MusicBars";
import { useSelector } from "react-redux";
const MusicContainer = () => {
  const { musicInfos, toggleForSearch, filterMusic } = useSelector(
    (state) => state.musicSlice
  );

  return (
    <div
      id="music-container"
      className=" list-group d-flex flex-column px-1 "
      style={{ marginBottom: "90px", gap: "1.3px" }}
    >
      {toggleForSearch
        ? musicInfos?.map((music) => (
            <MusicBars key={Math.random()} {...music} />
          ))
        : filterMusic?.map((music) => (
            <MusicBars key={Math.random()} {...music} />
          ))}
    </div>
  );
};

export default MusicContainer;
