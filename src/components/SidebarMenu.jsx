import { useContext, useState } from "react";
import { MdOutlineClose, MdSearch, MdKeyboardArrowRight } from "react-icons/md";
import WeatherContext from "../context/WeatherContext";

const SidebarMenu = ({ toggleMenu }) => {
  const [placeLocation, setPlaceLocation] = useState('');
  const weatherCtx = useContext(WeatherContext);
  const { getWoeidFromLocation } = weatherCtx;

  const searchPlaceHandler = (e) => {
    e.preventDefault();
    if(placeLocation.trim() === '' || placeLocation.length > 0){
      getWoeidFromLocation(placeLocation);
    }
    setPlaceLocation('');
  };

  return (
    <div className="sidebar-menu">
      <div className="close-menu-wrapper">
        <button className="menu-closed" onClick={toggleMenu}>
          <MdOutlineClose />
        </button>
      </div>

      {/* SEARCH FOR PLACE */}
      <form className="search-place-form" onSubmit={searchPlaceHandler}>
        <label htmlFor="search-location">
          <MdSearch />
          Seach for places
        </label>
        <input
          type="text"
          placeholder="search location"
          id="search-location"
          value={placeLocation}
          onChange={(e) => setPlaceLocation(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Search
        </button>
      </form>

      {/* RESULT LIST */}
      <ul className="result-list">
        <li onClick={() => getWoeidFromLocation('Delhi')}>
          Delhi <MdKeyboardArrowRight />
        </li>
        <li onClick={() => getWoeidFromLocation('London')}>
          London <MdKeyboardArrowRight />
        </li>
        <li onClick={() => getWoeidFromLocation('Barcelona')}>
          Barcelona <MdKeyboardArrowRight />
        </li>
        <li onClick={() => getWoeidFromLocation('Long Beach')}>
          Long Beach <MdKeyboardArrowRight />
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
