import React, { useContext, useEffect, useState } from "react";
import { Mycontext } from "../context/Context";

const Foreyou = () => {
  const { setcat, catdata } = useContext(Mycontext);
  const [data, setData] = useState([]);
  const [data2, setdata2] = useState([]);
  const givedata = () => {
    setData(catdata.slice(0, 5));
    setdata2(catdata.slice(5, 10));
  };
  useEffect(() => {
    console.log(data);

    givedata();
  }, [catdata]);
  return (
    <div className="flex p-2 rounded-2xl jam flex-col item-start">
      <div className="niga h-[2rem] flex flex-row items-center justify-center gap-3 w-full mt-2 ">
        <button
          value="business"
          onClick={(e) => {
            setcat(e.target.value);
            setCatdata([]);
          }}
        >
          business
        </button>
        <button
          onClick={(e) => {
            setcat(e.target.value);
            setCatdata([]);
          }}
          value="entertainment"
        >
          entertainment
        </button>
        <button
          onClick={(e) => {
            setcat(e.target.value);
          }}
          value="general"
        >
          general
        </button>
        <button
          onClick={(e) => {
            setcat(e.target.value);
          }}
          value="health"
        >
          health
        </button>
        <button
          onClick={(e) => {
            setcat(e.target.value);
          }}
          value="science"
        >
          science
        </button>
        <button
          onClick={(e) => {
            setcat(e.target.value);
          }}
          value="sports"
        >
          sports
        </button>
        <button
          onClick={(e) => {
            setcat(e.target.value);
          }}
          value="technology"
        >
          technology
        </button>
      </div>
      <div className="flex flex-row mt-2 items-center justify-center gap-2">
        <div className="left flex w-1/2 flex-col items-start justify-center gap-3">
          {data.map((item, index) => (
            <div
              key={index}
              className="flex w-[45vw] h-[32vh] rounded-2xl hover:scale-105 transition-all hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] cursor-pointer border-2 flex-row items-center justify-between "
            >
              <div className=" flex flex-col text-white items-start justify-center gap-2 border-white  p-2">
                {" "}
                <h1 className="text-black font-bold text-2xl">
                  {item.source.name}
                </h1>
                <h1 className="text-black font-bold text-sm">{item.title}</h1>
                <p className="text-black font-bold text-lg  ">
                  {item.publishedAt.slice(0, 10)}
                </p>
              </div>
              <div className="h-[32vh] flex items-center justify-center mr-2">
                <img
                  src={item.urlToImage}
                  className="rounded-2xl h-[95%] w-auto"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="min-h-[110vh] mb-2 w-[2px] mt-3 bg-white rounded-full"></div>
        <div className="right w-1/2 h-full flex-col items-start justify-center gap-3">
          {data2.map((item, index) => (
            <div
              key={index}
              className="flex hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)] hover:scale-105 transition-all cursor-pointer w-[45vw] my-3  h-[32vh] rounded-2xl border-2 flex-row items-center justify-between "
            >
              <div className=" flex flex-col text-white items-start justify-center gap-2 border-white  p-2">
                {" "}
                <h1 className="text-black font-bold text-2xl">
                  {item.source.name}
                </h1>
                <h1 className="text-black font-bold text-sm">{item.title}</h1>
                <p className="text-black font-bold text-lg">
                  {item.publishedAt.slice(0, 10)}
                </p>
              </div>
              <div className="h-[32vh] flex items-center justify-center mr-2">
                <img
                  src={item.urlToImage}
                  className="rounded-2xl h-[95%] w-auto"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Foreyou;
