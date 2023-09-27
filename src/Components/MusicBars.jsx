import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMusic, setMusicToggle } from "../Redux/Slices/musicSlice";

const MusicBars = (props) => {
  const { url, name, id } = props;
  const { toggle } = useSelector((state) => state.musicSlice);
  const dispatch = useDispatch();
  const musicHandeller = () => {
    document.querySelector("#music-audio").autoplay = true;
    toggle && dispatch(setMusicToggle());
    dispatch(getSingleMusic(props));
    // e.target.classList.add("active");
  };

  return (
    <div
      id={`musicList-${id}`}
      onClick={musicHandeller}
      alt={url}
      className="music-bar bg-info text-primary list-group boreder-black py-3 border min-w-full "
    >
      <div
        alt={url}
        className=" text-truncate  fw-semibold px-5 tracking-wider"
      >
        {`${id} . ${name}`}
      </div>
    </div>
  );
};

export default MusicBars;
