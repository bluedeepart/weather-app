import Footer from "./layout/Footer";
import HighlightCard from "./HighlightCard";
import WeatherCard from "./WeatherCard";
import { FaLocationArrow } from "react-icons/fa";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const WeatherDetails = () => {
  const weatherCtx = useContext(WeatherContext);
  const { cityWeatherData } = weatherCtx;

  const toggleTemp = (e) => {
    const target = e.target;
    if (target.textContent.indexOf("F") > 0) {
      e.target.classList.add("active");
      e.target.previousElementSibling.classList.remove("active");
      const temps = document.querySelectorAll(".temp");
      temps.forEach((temp) => {
        if (temp.classList.contains("cel")) {
          temp.style.display = "none";
        }
        if (temp.classList.contains("fah")) {
          temp.style.display = "block";
        }
      });
    } else {
      e.target.classList.add("active");
      e.target.nextElementSibling.classList.remove("active");
      const temps = document.querySelectorAll(".temp");
      temps.forEach((temp) => {
        if (temp.classList.contains("fah")) {
          temp.style.display = "none";
        }
        if (temp.classList.contains("cel")) {
          temp.style.display = "block";
        }
      });
    }
  };

  if (cityWeatherData) {
    const { consolidated_weather } = cityWeatherData;
    return (
      <section className="weather-wrapper">
        <div className="weather-container">
          <div className="converter-wrapper">
            {/* Convert C to F */}
            <button className="active" onClick={toggleTemp}>
              °C
            </button>
            {/* Convert F to C */}
            <button onClick={toggleTemp}>°F</button>
          </div>

          {/* 5 DAYS Preview */}
          <div className="weather-card-wrapper">
            {consolidated_weather
              .filter((weather) => weather.id !== consolidated_weather[0].id)
              .map((weather, index) => (
                <WeatherCard key={weather.id} weather={weather} index={index} />
              ))}
          </div>

          {/* Highlights */}
          <h4>Today’s Hightlights </h4>
          <div className="weather-highlights">
            {}
            <HighlightCard
              title="Wind status"
              value={consolidated_weather[0].wind_speed.toFixed(0)}
              unit="mph"
              wind_direction={consolidated_weather[0].wind_direction}
              additional={consolidated_weather[0].wind_direction_compass}
              icon={<FaLocationArrow />}
            />
            <HighlightCard
              title="Humidity"
              value={consolidated_weather[0].humidity}
              unit="%"
              meter="true"
            />
            <HighlightCard
              title="Visibility"
              value={consolidated_weather[0].visibility.toFixed(1)}
              unit=" miles"
            />
            <HighlightCard
              title="Air Pressure"
              value={consolidated_weather[0].air_pressure.toFixed(0)}
              unit=" mb"
            />
          </div>
        </div>
        <Footer />
      </section>
    );
  } else {
    return <div>WeatherDetails</div>;
  }
};

export default WeatherDetails;
