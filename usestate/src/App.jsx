import React, { useEffect, useState } from "react";
import Notes from "./component/Search";
import Search from "./component/Search";

const App = () => {
  const [show, setShow] = useState(true);
  const [mode, setMode] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const [weatherData, setWeatherData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //search 
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  
  console.log(results)
  //search
  useEffect(() => {
    //if search is empty ,clear everything
    if (search.trim() === "") {
      setResults([]);
      return;
    }

    setLoading(true);

    //Debounce --> wait 500ms
    const timer = setTimeout(() => {

      //fetch data
     fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then((res) => res.json())
        .then((data) => {
          setResults(data.products); // save results to state
          setLoading(false);
        })
        .catch(() => setLoading(false));

    }, 500);

    //clean up time out
    return () => clearTimeout(timer);
  }, [search]);

  //weather api
  useEffect(() => {
    setLoading(true);
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
        setLoading(false);
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
      {loading && <p>loading... <br /> Please wait</p>}
      {error ? <p>{error.mesaage ?? String(error)}</p> : (
        <div className="weather-data">
          <p>{weatherData.current?.last_updated}</p>
          <p>{weatherData.location?.name}</p>
          <p>{weatherData.location?.tz_id}</p>
        </div>


      )}
      <hr />
      <Search search={search} setSearch={setSearch} results={results} loading={loading} />

    </div>
  );
};

export default App;
