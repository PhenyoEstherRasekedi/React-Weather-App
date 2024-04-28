import React from "react";
import "./weather.css";
import ReactAnimatedWeather from "react-animated-weather";

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
              <ReactAnimatedWeather
                icon="RAIN"
                color="gray"
                size={34}
                animate={true}
              />
            </span>
          </div>
        </div>
        <ul className="forecast d-flex justify-content-between">
          <li className="forecast-weather">
            Sat{" "}
            <span>
              <ReactAnimatedWeather
                icon="CLEAR_DAY"
                color="goldenrod"
                size={24}
                animate={true}
              />
              <br />{" "}
            </span>
            <span className="temp-high">15°</span>
            <span className="temp-low">9°</span>{" "}
          </li>{" "}
          <li className="forecast-weather">
            Sun{" "}
            <ReactAnimatedWeather
              icon="CLOUDY"
              color="white"
              size={24}
              animate={true}
            />
            <br />
            <span className="temp-high">15°</span>
            <span className="temp-low">10°</span>
          </li>
          <li className="forecast-weather">
            Mon{" "}
            <ReactAnimatedWeather
              icon="FOG"
              color="white"
              size={24}
              animate={true}
            />
            <br />
            <span className="temp-high">15°</span>
            <span className="temp-low">10°</span>
          </li>
          <li className="forecast-weather">
            Tue{" "}
            <ReactAnimatedWeather
              icon="RAIN"
              color="white"
              size={24}
              animate={true}
            />
            <br />
            <span className="temp-high">15°</span>
            <span className="temp-low">11°</span>
          </li>
          <li className="forecast-weather">
            Wed{" "}
            <ReactAnimatedWeather
              icon="WIND"
              color="gray"
              size={24}
              animate={true}
            />
            <br />
            <span className="temp-high">14°</span>
            <span className="temp-low">11°</span>
          </li>
        </ul>
      </main>
      <footer>
        <small>
          This project was coded by
          <a
            href="https://www.linkedin.com/in/phenyo-rasekedi-9b833567/"
            target="_blank"
            rel="noreferrer"
            alt="linkedIn Profile"
          >
            Phenyo Esther Rasekedi
          </a>{" "}
          and is
          <a
            href="https://github.com/PhenyoEstherRasekedi/React-Weather-App"
            target="_blank"
            rel="noreferrer"
            alt="Github Profile"
          >
            open-sourced on Github
          </a>{" "}
          and
          <a
            href="https://app.netlify.com/teams/phenyoestherrasekedi/overview"
            target="_blank"
            rel="noreferrer"
            alt="Netlify link"
          >
            hosted on Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}
