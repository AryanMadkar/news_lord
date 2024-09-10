import React from "react";
import { IoArrowForwardOutline } from "react-icons/io5";
import Foreyou from "./Foreyou";

const Banner2 = () => {
  return (
    <div className="mt-[1rem] min-h-[100vh] w-full flex flex-col items-start justify-start gap-2">
      <div className="flex flex-row items-center gap-2 text-[2rem] justify-center">
        <h1>For you </h1>
        <h1>
          <IoArrowForwardOutline />
        </h1>
      </div>
      <p>Recommended based on your interests </p>
      <div className="min-h-[70vh] w-[100%] rounded-2xl   ml-4">
        <Foreyou />
      </div>
    </div>
  );
};

export default Banner2;
