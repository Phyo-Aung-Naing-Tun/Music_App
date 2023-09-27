import React, { useRef, useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

import OffcanvasMusic from "./OffcanvasMusic";
import { useDispatch, useSelector } from "react-redux";
import { getFilterMusic, setToggleForSearch } from "../Redux/Slices/musicSlice";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const [inputData, setInputData] = useState("");
  const { musicInfos } = useSelector((state) => state.musicSlice);
  const nav = useNavigate();
  const dispatch = useDispatch();
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

        <OffcanvasMusic />
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
