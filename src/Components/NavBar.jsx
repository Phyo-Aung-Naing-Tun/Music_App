import React, { useRef } from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";

const NavBar = () => {
  return (
    <div className=" d-flex justify-content-evenly align-items-center py-3 shadow">
      <h1 className=" fst-italic  fw-bold fs-4 text-primary ">My Music</h1>
      <div className=" d-flex gap-2">
        <form>
          <div className="search-input  input-group">
            <input
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
          onClick={(e) => {
            const inputmp3 = document.querySelector("#inputmp3");
            inputmp3.click();
          }}
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
