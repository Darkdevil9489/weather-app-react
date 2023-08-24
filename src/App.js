import "./styles.css";
import { useState } from "react";
export default function App() {
  const [search, setSearch] = useState("");
  const [temp, setTemp] = useState("");
  const [name, setName] = useState("");
  const [hum, setHum] = useState("");
  const [spd, setSpd] = useState("");

  let apik = "28cc6ccc3756641a18bb92a3c2b49fac";

  function convertion(val) {
    return (val - 273).toFixed(2);
  }

  function changevalue() {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        search +
        "&appid=" +
        apik
    )
      .then((res) => res.json())
      .then((data) => {
        setName(`The Name of City :  ${data["name"]}`);
        setHum(`Humidity : ${data["weather"]["0"]["main"]}`);
        setTemp(`Temperatur is : ${convertion(data["main"]["temp"])} `);
        setSpd(`The wind speed : ${["wind"]["speed"]}`);
      })
      .catch((err) => alert("You entered Wrong city name"));
  }

  return (
    <div className="App">
      <div class="App-head">
        <h1>Weather App </h1>
        <div className="d-flex justify-content-center ser mt-3">
          <input
            name="search"
            type="text"
            placeholder="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button onClick={changevalue}>submit </button>
        </div>
      </div>

      <div className="container-fluid mt-1">
        <div className="temp-pic">
          <h1>{name}</h1>
          <h1 class="text-center">{temp}</h1>
        </div>
        <div className="hum-spd ">
          <h3 class="text-center">{hum}</h3>
          <h3>{spd}</h3>
        </div>
      </div>
    </div>
  );
}
