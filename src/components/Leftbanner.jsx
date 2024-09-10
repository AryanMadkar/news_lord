import React, { useContext, useEffect, useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { Mycontext } from "../context/Context";
import axios from "axios";

const Leftbanner = () => {
  const [onlyone, setOnlyone] = useState([]);
  const { News } = useContext(Mycontext);

  const givedata = () => {
    setOnlyone(News.slice(0, 1));
  };

  useEffect(() => {
    givedata();
  }, [News]);

  return (
    <div className="h-full w-full flex flex-col gap-1 mt-2">
      <div className="flex flex-row min-h-[50vh] gap-1 items-center justify-center rounded-2xl w-[25vw]  ">
        {onlyone.map((article, item) => (
          <div
            key={item}
            className="flex flex-col gap-3 overflow-hidden items-start border-2 border-white rounded-2xl p-2 justify-start"
          >
            <img src={article.urlToImage} className="" />
            <h1 className="text-[2rem] font-bold">{article.author}</h1>
            <h1 className="text-[1rem] font-bold">{article.title}</h1>
            <a
              href={article.url}
              className="text-blue-500 text-sm font-semibold"
            >
              {article.Description}
            </a>
            <h1>{"Date: " + article.publishedAt.slice(0, 10)}</h1>
            <h1>{"Time: " + article.publishedAt.slice(11, 19)}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leftbanner;
