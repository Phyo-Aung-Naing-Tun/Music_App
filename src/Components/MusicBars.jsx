import React from "react";
import { useDispatch } from "react-redux";
import { getMusicUrl } from "../Redux/Slices/musicSlice";

const MusicBars = ({ url, name }) => {
  const dispatch = useDispatch();
  const musicHandeller = (e) => {
    console.log(e.target.getAttribute("alt"));
    dispatch(getMusicUrl(e.target.getAttribute("alt")));
  };
  return (
    <div
      onClick={musicHandeller}
      alt={url}
      className=" boreder-black py-3 border  min-w-full text-black"
    >
      <div
        alt={url}
        className=" text-black fs-5 fw-semibold px-5 text-[20px] tracking-wider"
      >
        {name}
      </div>
    </div>
  );
};

export default MusicBars;
