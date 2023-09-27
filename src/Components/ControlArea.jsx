import React, { useEffect, useState } from "react";
import {
  BiSolidRightArrow,
  BiSolidPlaylist,
  BiSolidLeftArrow,
} from "react-icons/bi";
import { FaPause } from "react-icons/fa";
import { BsHeart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getSingleMusic, setMusicToggle } from "../Redux/Slices/musicSlice";

const ControlArea = () => {
  const [startTime, setStartTime] = useState("0:00");
  const [finishTime, setFinishTime] = useState("0:00");
  const [banner, setBanner] = useState(true);
  const [progress, setProgress] = useState(0);
  const { toggle, musicInfos, singleMusic } = useSelector(
    (state) => state.musicSlice
  ); //this is to pause or play music and change ui of play btn
  const audioTag = document.querySelector("#music-audio");
  const dispatch = useDispatch();

  //functon to play or pause
  const playHandeller = () => {
    toggle ? audioTag.play() : audioTag.pause();

    dispatch(setMusicToggle());
  };

  //function to calculate duration and display time of a music and to update progress bar

  audioTag?.addEventListener("timeupdate", (e) => {
    setStartTime(
      `${parseInt(e?.target.currentTime / 60)} : ${
        parseInt(e?.target.currentTime % 60) >= 10
          ? parseInt(e?.target.currentTime % 60)
          : "0" + parseInt(e?.target.currentTime % 60)
      }`
    );
    e.target.duration &&
      setFinishTime(
        `${parseInt(e?.target.duration / 60)} : ${
          parseInt(e?.target.duration % 60) >= 10
            ? parseInt(e?.target.duration % 60)
            : "0" + parseInt(e?.target.duration % 60)
        }`
      );
    setProgress((e.target.currentTime / e.target.duration) * 100);
    setBanner(false);
  });

  //function of finding switch Music
  const switchingMusic = (id) => {
    const switchMusic = musicInfos?.find((music) => music.id === id);
    dispatch(getSingleMusic(switchMusic));
  };

  //function for back btn
  const BackBtnHandle = () => {
    if (singleMusic.id >= 1) {
      switchingMusic(singleMusic.id - 1);
      audioTag?.addEventListener("ended", nextBtnHandle());
    } else {
      switchingMusic(musicInfos?.length);
    }
  };
  //function for next btn
  const nextBtnHandle = () => {
    if (singleMusic.id >= musicInfos?.length) {
      switchingMusic(1);
    } else {
      switchingMusic(singleMusic.id + 1);
    }
  };

  audioTag?.addEventListener("ended", () => {
    nextBtnHandle();
  });

  return (
    <>
      <div
        style={{ boxShadow: "#D2E9E9 0px 3px 23px 0px" }}
        className=" bg-white w-100 fixed-bottom   "
      >
        <h1
          className={`px-3 pt-2 text-primary text-truncate  ${
            banner && " d-none "
          }`}
          style={{ fontSize: "15px" }}
        >
          {singleMusic?.name}
        </h1>
        <div
          style={{ height: "6px" }}
          className="w-100 shadow-sm rounded-1 "
          id="progress-bar-container"
        >
          <div
            style={{ width: `${progress}%` }}
            className=" h-100 bg-primary"
            id="progress-bar"
          ></div>
        </div>
        <div
          style={{ fontSize: "14px" }}
          className=" d-flex justify-content-between px-3 mt-1 fw-bold text-primary fst-italic"
        >
          <div id="startTime">{startTime}</div>
          <div id="finishTime">{finishTime}</div>
        </div>
        <div
          className=" mb-4 d-flex justify-content-evenly align-items-center"
          id="control-btn-container"
        >
          <div>
            <BsHeart className=" text-primary fs-5" />
          </div>
          <div className=" d-flex justify-content-center  align-items-center gap-5">
            <BiSolidLeftArrow
              onClick={BackBtnHandle}
              className=" text-primary fs-3"
            />
            <div
              onClick={playHandeller}
              style={{
                width: "40px",
                height: "40px",
                borderRadius: "50%",
              }}
              className=" d-flex align-items-center justify-content-center bg-primary  text-white"
            >
              {toggle ? (
                <BiSolidRightArrow className=" fs-5 " />
              ) : (
                <FaPause className="fs-5" />
              )}
            </div>

            <BiSolidRightArrow
              onClick={nextBtnHandle}
              className=" text-primary fs-3"
            />
          </div>
          <div>
            <BiSolidPlaylist className=" text-primary fs-5" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlArea;
