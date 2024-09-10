import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Mycontext } from "../context/Context";

const Rightbanner = () => {
  const [newdataright, setnewdataright] = useState([]);
  const { News } = useContext(Mycontext);

  const givedata = async () => {
    setnewdataright(News.slice(1, 5));
  };

  useEffect(() => {
    givedata();
  }, [News]);

  return (
    <div>
      {newdataright.map((article, index) => (
        <div className="flex border-2 flex-row items-center justify-center gap-2 rounded-2xl transition-all p-1 border-purple-900 hover:scale-105 my-2 ">
          {" "}
          <div
            className="flex   gap-2  flex-col  "
            key={index}
          >
            <a href={article.url}>
              <div className="flex gap-2 flex-col">
                <h1 className="text-lg">{article.author}</h1>
                <h3 className="text-md">{article.title}</h3>
                <p className="text-sm">{article.description}</p>
              </div>
            </a>
          </div>
          <div>
            <img src={article.urlToImage} className="w-[13rem] h-auto" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rightbanner;
