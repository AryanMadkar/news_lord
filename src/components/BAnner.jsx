import React, { useContext, useEffect, useState } from "react";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Mycontext } from "../context/Context";
import Leftbanner from "./leftbanner";
import Rightbanner from "./Rightbanner";
import { IoMdArrowDropright } from "react-icons/io";
import Mainleftbanner from "./Mainleftbanner";
import Banner2 from "./Banner2";

const BAnner = () => {
  const { temperature } = useContext(Mycontext);

  return (
    <div className="min-h-[100vh]  p-[2rem] px-[3rem] text-white w-full flex flex-col">
      <div className="flex flex-row justify-between  items-center  min-h-[20vh]">
        <div className="flex flex-col bg-[#211B40] p-[0.8rem] cursor-pointer rounded-3xl hover:rounded-br-none transition-all hover:rounded-tl-none">
          {" "}
          <h1 className="text-3xl capitalize font-bold">your Breifing</h1>
          <h1 className="text-sm capitalize">Tuesday 10 september</h1>
        </div>
        <div className="flex flex-row items-center gap-2 hover:rounded-tr-none bg-[#5A3424] cursor-pointer rounded-3xl transition-all p-[0.8rem] justify-center hover:rounded-bl-none">
          <TiWeatherPartlySunny className="text-[3rem]" />
          <div className="flex flex-col  justify-center">
            <h1>Mumbai</h1>
            <h1 className="capitalize">{Math.round(temperature)}°C</h1>
            <a href="/">more on weather.com</a>
          </div>
        </div>
      </div>
      <div className="min-h-[100vh] w-full flex-row  rounded-2xl p-2 flex items-start justify-around ">
        <div className="w-[70%] min-h-[95vh] p-2 flex flex-col items-start justify-center gap-2  rounded-2xl ">
          <div className="flex flex-row items-center justify-center">
            <h1 className="text-3xl capitalize">Headlines</h1>
            <IoMdArrowDropright className="text-5xl " />
          </div>
          <div className="w-full h-[2px] bg-white rounded-full"></div>
          <div className="flex flex-row justify-center  p-2  item-start w-full h-full ">
            <Leftbanner />
            <Rightbanner />
          </div>
        </div>
        <div className="w-[27%]  min-h-[95vh] rounded-2xl bg-red -500">
          <Mainleftbanner />
        </div>
      </div>
      <div className="w-full h-[2px] bg-white rounded-full"></div>
      <Banner2 />
    </div>
  );
};

export default BAnner;
