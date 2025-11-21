import React, { useEffect, useState } from "react";
import Notes from "./component/Notes";

const App = () => {
  const [show, setShow] = useState(true);
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    setIsLoading(true);
    const url = 'http://api.weatherapi.com/v1/current.json?key=3bb9cd9b61d1450b914130226252111&q=japan&aqi=no';
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setWeatherData(data);
        console.log(data);
        console.log(Object.keys(data));
        console.log(JSON.stringify(data, null, 2));
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", mode);
  }, [mode]);

  //toggle light || dark
  const handleToggle = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <div className={mode === "light" ? "light" : "dark"}>
      {/*  darkmode   */}
      <button className="btn" onClick={handleToggle}>
        {" "}
        {mode === "light" ? "dark" : "light"}{" "}
      </button>

      {/*  text and password toggle  */}
      <h1>Toggel show and hide password</h1>
      <input
        style={{
          padding: "5px",
          marginRight: "10px",
        }}
        type={show ? "text" : "password"}
      />
      <button onClick={() => setShow(!show)}>{show ? "hide" : "show"}</button>
      <hr /><hr />
      <h1>Weather</h1>
      {isLoading && <p>loading... <br /> Please wait</p>}
      {error ? <p>{error.mesaage ?? String(error)}</p> : (
        <div className="weather-data">
          <p>{weatherData.current?.last_updated}</p>
          <p>{weatherData.location?.name}</p>
          <p>{weatherData.location?.tz_id}</p>
 </div>
 
 
)}
<hr />
<Notes />

    </div>
  );
};

export default App;
