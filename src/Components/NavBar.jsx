import React, { useRef, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import {
  getFilterMusic,
  getMusicInfos,
  setMusicToggle,
  setToggleForSearch,
} from "../Redux/Slices/musicSlice";

const NavBar = () => {
  const [inputData, setInputData] = useState("");
  const { musicInfos, toggle } = useSelector((state) => state.musicSlice);
  const dispatch = useDispatch();
  const addingSongsHandeller = () => {
    const inputmp3 = document.querySelector("#inputmp3");
    let id = 0;
    inputmp3.click();
    inputmp3.addEventListener("change", (e) => {
      const inputDatas = e.target.files;
      console.log(inputDatas);
      for (let i = 0; i < inputDatas.length; i++) {
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
          id++;
          if (toggle) {
            dispatch(
              getMusicInfos({
                id,
                name: inputDatas[i].name,
                url: e.target.result,
              })
            );
          }
        });
        reader.readAsDataURL(inputDatas[i]);
      }
      dispatch(setMusicToggle());
    });
  };
  return (
    <div className=" d-flex justify-content-evenly sticky-top bg-white align-items-center py-1 shadow">
      <h1 className=" d-flex justify-content-center align-items-center gap-2 fst-italic mb-0  fw-bold fs-4 text-primary ">
        My Music
      </h1>
      <div className=" d-flex gap-3">
        <form>
          <div className="search-input  input-group">
            <input
              value={inputData}
              onChange={(e) => {
                setInputData(e.target.value);
                // nav("/search");
                const filtering = musicInfos?.filter((info) =>
                  info.name
                    .toLowerCase()
                    .includes(inputData?.toLocaleLowerCase())
                );

                dispatch(getFilterMusic(filtering));
                dispatch(setToggleForSearch(false));
              }}
              placeholder="Search songs"
              className="  form-control "
              type="text"
            />
            <div
              style={{ width: "40px" }}
              className=" fw-bolder btn btn-sm border btn-ouline-primary text-primary fs-2  d-flex justify-content-center align-items-center "
            >
              <BiSearchAlt2 />
            </div>
          </div>
        </form>
        <button
          onClick={addingSongsHandeller}
          className=" d-flex btn align-items-center btn-primary text-uppercase fw-semibold "
        >
          <FiPlus className=" fs-4  me-2" />
          songs
        </button>
      </div>
      <input
        className=" d-none"
        id="inputmp3"
        type="file"
        multiple
        accept="audio/*"
      />
    </div>
  );
};

export default NavBar;
