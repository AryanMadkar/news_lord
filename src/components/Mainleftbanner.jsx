import React, { useContext, useEffect, useState } from "react";
import { Mycontext } from "../context/Context";
import { FaRegQuestionCircle } from "react-icons/fa";

const Mainleftbanner = () => {
  const [newdataright, setnewdataright] = useState([]);
  const { News } = useContext(Mycontext);

  const givedata = async () => {
    setnewdataright(News.slice(5, 10));
    console.log(newdataright);
  };

  useEffect(() => {
    givedata();
  }, [News]);
  return (
    <div className="flex flex-col border-2 border-orange-500 rounded-2xl items-start justify-center h-full w-full p-2">
      <div className="flex w-full flex-row items-center justify-between text-[2rem]">
        <h1>Picks for you</h1>
        <FaRegQuestionCircle />
      </div>
      {newdataright.map((index, item) => (
        <div>
          <div className="flex flex-row items-center justify-center ">
            <div
              className="flex  transition-all p-1 gap-2 my-2 rounded-2xl flex-col  "
              key={item}
            >
              <a href={index.url}>
                <div className="flex gap-2 flex-col">
                  <h1 className="text-lg">{index.author}</h1>
                  <h3 className="text-sm hover:scale-105 hover:underline">{index.title}</h3>
                </div>
              </a>
            </div>
            <div>
              <img src={index.urlToImage} className="w-[13rem] h-auto" />
            </div>
          </div>

          <div className="w-full h-[2px] bg-white rounded-full"></div>
        </div>
      ))}
    </div>
  );
};

export default Mainleftbanner;
