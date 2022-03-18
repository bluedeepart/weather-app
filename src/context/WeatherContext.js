import { createContext, useEffect, useState } from "react";

const WeatherContext = createContext();

const BASE_URL = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${BASE_URL}`;

export const WeatherContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [cityWeatherData, setCityWeatherData] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (pos) {
      getWoeidFromLatLon(`${pos.coords.latitude},${pos.coords.longitude}`);
      return `${pos.coords.latitude},${pos.coords.longitude}`;
    });

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getWoeidFromLocation = (location) => {
    setIsLoading(true);
    fetch(`${REQUEST_URL}/search/?query=${location}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]) {
          fetchWoeidLocation(data[0].woeid);
        }
      });
  };

  const getWoeidFromLatLon = (lattLong) => {
    setIsLoading(true);
    fetch(`${REQUEST_URL}/search/?lattlong=${lattLong}`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0]) {
          fetchWoeidLocation(data[0].woeid);
        }
      });
  };

  const fetchWoeidLocation = (woied) => {
    fetch(`${REQUEST_URL}/${woied}`)
      .then((res) => res.json())
      .then((data) => {
        setCityWeatherData(data);
        // console.log(data);
        setIsLoading(false);
      });
  };

  return (
    <WeatherContext.Provider
      value={{
        isLoading,
        cityWeatherData,
        getWoeidFromLocation,
        getWoeidFromLatLon,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
