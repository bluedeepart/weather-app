import { useContext, useEffect, useState } from "react";
import WeatherContext from "../context/WeatherContext";
import cloudBG from "./assets/Cloud-background.png";
import { MdLocationPin, MdMyLocation } from "react-icons/md";
import SidebarMenu from "./SidebarMenu";
import WeatherDate from "./WeatherDate";

const Sidebar = () => {
  const [lattLong, setLattLong] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  const weatherCtx = useContext(WeatherContext);
  const { cityWeatherData, getWoeidFromLatLon } = weatherCtx;

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      setLattLong(`${pos.coords.latitude},${pos.coords.longitude}`);
      // console.log(`${pos.coords.latitude},${pos.coords.longitude}`);
    });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (cityWeatherData) {
    const { title, consolidated_weather } = cityWeatherData;
    const {
      applicable_date,
      the_temp,
      weather_state_name,
      weather_state_abbr,
    } = consolidated_weather[0];

    return (
      <aside className="sidebar">
        {showMenu && <SidebarMenu toggleMenu={toggleMenu} />}

        <header className="sidebar-header">
          {/* SEARCH FOR PLACE */}
          <button className="search-for-place" onClick={toggleMenu}>
            Seach for places
          </button>

          {/* GET LOCATION */}
          <button
            className="get-location-btn"
            onClick={() => getWoeidFromLatLon(lattLong)}
          >
            <MdMyLocation />
          </button>
        </header>

        <section className="weather-sidebar-info">
          {/* ICON */}
          <div className="weather-icon">
            <div
              className="weather-icon-bg"
              style={{ backgroundImage: `url(${cloudBG})` }}
            ></div>
            <img
              src={`https://www.metaweather.com/static/img/weather/png/${weather_state_abbr}.png`}
              alt={weather_state_name}
            />
          </div>

          {/* TEMP */}
          <div className="weather-temp-wrapper">
            <h1 className="weather-temp">
              <div className="cel temp">
                {Math.floor(the_temp)}
                <span>°C</span>
              </div>
              <div className="fah temp" style={{display: 'none'}}>
                {(the_temp * (9 / 5) + 32).toFixed(1)}
                <span>°F</span>
              </div>
            </h1>
          </div>

          {/* Weather */}
          <h3 className="weather-title">{weather_state_name}</h3>

          {/* DAY and DATE */}
          <div className="weather-dd">
            <h5 className="weather-day">Today</h5>
            <span style={{ margin: "0 10px" }}>•</span>
            <WeatherDate time={applicable_date} />
          </div>

          {/* Location */}
          <h5 className="sidebar-location">
            <MdLocationPin />
            {title}
          </h5>
        </section>
      </aside>
    );
  } else {
    return <div>SIDEBAR</div>;
  }
};

export default Sidebar;
