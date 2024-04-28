import React from "react";
import "./weather.css";

export default function Weather() {
  let weatherData = {
    city: "Gaborone",
    date: "Tuesday 10:00",
    description: " moderate rain",
    currentTemperature: "9℃",
    currentEmoji: "⛅",
    humidity: "87%",
    Wind: "7.2km/h",
  };

  return (
    <div className="weather">
      {" "}
      <header>
        <form>
          <input
            className="search-input"
            type="search"
            placeholder="Enter a City..."
            required
          />
          <input type="submit" value="search" className="search-button" />
        </form>
      </header>
      <main>
        <div className="current-weather d-flex">
          <br />
          <h1 className="current-city">{weatherData.city}</h1>
          <p className="current-details mt-4 mb-5">
            <span>{weatherData.date}</span>, {weatherData.description}
            <br />
            Humidity: <strong>{weatherData.humidity},</strong> Wind:
            <strong>{weatherData.Wind}</strong>
          </p>
          <div className="current-temperature">
            <span className="current-temperature-value">
              {weatherData.currentTemperature}
            </span>{" "}
            <span className="current-temperature-emoji">
              {weatherData.currentEmoji}
            </span>
          </div>
        </div>
        <ul className="forecast d-flex justify-content-between">
          <li className="forecast-weather">
            Sat☀
            <br />
            <span className="temp-high">15°</span>
            <span className="temp-low">9°</span>
          </li>
          <li className="forecast-weather">
            Sun☁
            <br />
            <span className="temp-high">15°</span>
            <span className="temp-low">10°</span>
          </li>
          <li className="forecast-weather">
            Mon☁
            <br />
            <span className="temp-high">15°</span>
            <span className="temp-low">10°</span>
          </li>
          <li className="forecast-weather">
            Tue☁
            <br />
            <span className="temp-high">15°</span>
            <span className="temp-low">11°</span>
          </li>
          <li className="forecast-weather">
            Wed⛅
            <br />
            <span className="temp-high">14°</span>
            <span className="temp-low">11°</span>
          </li>
        </ul>
      </main>
      <footer>
        <small>
          This project was coded by
          <a href="" target="_blank">
            Phenyo Esther Rasekedi
          </a>{" "}
          and is
          <a href="" target="_blank">
            open-sourced on Github
          </a>{" "}
          and
          <a href="" target="_blank">
            hosted on Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}
