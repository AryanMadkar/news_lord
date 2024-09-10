import React from "react";
import { FcSearch } from "react-icons/fc";

const NAvbar = () => {
  return (
    <div className="h-[3rem] w-full flex items-center flex-row  bg-[#F2F2F2] justify-between px-[2rem] ">
      <div className="left flex items-center justify-center font-semibold gap-1">
        <a href="/">
          <h1>News</h1>
        </a>
        <h1>/</h1>
        <a href="/">
          <h1>Events</h1>
        </a>
        <h1>/</h1>
        <a href="/">
          <h1>Shops</h1>
        </a>
        <h1>/</h1>
        <a href="/">
          <h1>Galery</h1>
        </a>
      </div>
      <div className="center mr-4">
        <div>
          <a>
            <h1 className="text-[2rem] flex items-center justify-center text-orange-600 font-bold">
              NEws LoRd
            </h1>
          </a>
        </div>
      </div>
      <div className="right flex items-center justify-center gap-1">
        <div className="text-2xl bg-[#001E23] px-2 rounded-2xl flex items-center justify-center gap-1">
          <input
            type="text"
            placeholder="search..."
            className="p-[0.3rem] bg-[#001E23] text-white outline-none border-none text-[15px] w-[20rem] px-2 rounded-2xl"
          />
          <button className="p-[0.5rem] rounded-full text-white bg-[#001E23] border-none">
            <FcSearch />
          </button>
        </div>
       
      </div>
    </div>
  );
};

export default NAvbar;
