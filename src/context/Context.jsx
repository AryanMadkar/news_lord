import { createContext, useEffect, useState } from "react";

export const Mycontext = createContext();
import axios from "axios";
export const ThemeProvider = ({ children }) => {
  const [isDarkTheme, SetisDarkTheme] = useState(false);
  const [News, setNews] = useState([]);
  const [everything, seteverything] = useState([]);
  const [search, setSearch] = useState("India");
  const [lat, setLat] = useState("19.0760");
  const [lon, setLon] = useState("72.8777");
  const [weather, setWeather] = useState([]);
  const [cat, setcat] = useState("business");
  const [catdata, setCatdata] = useState([]);
  const [temperature, settemperature] = useState(20);
  const fetchweather = async () => {
    const response =
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=175ceee39699ab62aeb8be05e73337e0
`);
    setWeather(response.data);
    settemperature(response.data.main.temp - 273.15);
  };
  //for headline
  const fetchdatahedline = async () => {
    const response = await axios.get(
      "https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=f0e837d5a3f94f1893ed10e2ef0c9416"
    );
    setNews(response.data.articles);
  };
  const fetchcate = async () => {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?category=${cat}&apiKey=f0e837d5a3f94f1893ed10e2ef0c9416`
    );
    setCatdata(response.data.articles);
  };
  const feteverything = async () => {
    if (search.length > 1) {
      const response = await axios.get(
        `https://newsapi.org/v2/top-headlines?q=${search}&apiKey=f0e837d5a3f94f1893ed10e2ef0c9416`
      );
      seteverything(response.data);
    }
  };

  useEffect(() => {
    fetchdatahedline();
    fetchweather();
  }, [setWeather, setNews]);

  useEffect(() => {
    fetchcate();
    console.log(cat);
  }, [cat]);
  const toggleTheme = () => SetisDarkTheme(true);

  return (
    <Mycontext.Provider
      value={{
        isDarkTheme,
        toggleTheme,
        News,
        everything,
        search,
        setSearch,
        weather,
        setLat,
        setLon,
        fetchweather,
        temperature,
        setcat,
        catdata,
        setCatdata,
      }}
    >
      {children}
    </Mycontext.Provider>
  );
};
