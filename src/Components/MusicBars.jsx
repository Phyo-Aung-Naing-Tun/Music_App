import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  getSingleMusic,
  setMusicToggle,
  deleteMusic,
} from "../Redux/Slices/musicSlice";

const MusicBars = (props) => {
  const { url, name, id } = props;
  const { toggle, musicInfos } = useSelector((state) => state.musicSlice);
  const dispatch = useDispatch();
  const musicHandeller = (e) => {
    // e.target.classList.add("active");
    e.stopPropagation();
    if (e.target.id === "delBtn") {
      const result = musicInfos?.filter((info) => !info.name.includes(name));
      dispatch(deleteMusic(result));
    } else {
      document.querySelector("#music-audio").autoplay = true;
      toggle && dispatch(setMusicToggle());
      dispatch(getSingleMusic(props));
    }
  };

  return (
    <div
      id={`musicList-${id}`}
      onClick={musicHandeller}
      alt={url}
      className="music-bar d-flex flex-row gap-5 px-4  align-items-center justify-content-between  bg-info text-primary list-group boreder-black py-3 border min-w-full "
    >
      <div alt={url} className=" text-truncate  fw-semibold  tracking-wider">
        {`${id} . ${name}`}
      </div>
      <button
        id="delBtn"
        className="  btn btn-sm btn-outline-primary pointer-event  "
      >
        Delete
      </button>
    </div>
  );
};

export default MusicBars;
