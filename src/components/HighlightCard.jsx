import { useEffect, useState } from "react";
import Meter from "./Meter";

const HighlightCard = ({
  title,
  value,
  additional,
  meter,
  unit,
  icon,
  wind_direction,
}) => {
  const [dirVal, setDirValue] = useState();

 useEffect(() => {
  switch (additional) {
    case "N":
      setDirValue(348.75 + 11.25);
      break;
    case "NNE":
      setDirValue(11.25 + 33.75);
      break;
    case "NE":
      setDirValue(33.75 + 56.25);
      break;
    case "ENE":
      setDirValue(56.25 + 78.75);
      break;
    case "E":
      setDirValue(78.75 + 101.25);
      break;
    case "ESE":
      setDirValue(101.25 + 123.75);
      break;
    case "SE":
      setDirValue(123.75 + 146.25);
      break;
    case "SSE":
      setDirValue(146.25 + 168.75);
      break;
    case "S":
      setDirValue(168.75 + 191.25);
      break;
    case "SSW":
      setDirValue(191.25 + 213.75);
      break;
    case "SW":
      setDirValue(213.75 + 236.25);
      break;
    case "WSW":
      setDirValue(236.25 + 258.75);
      break;
    case "W":
      setDirValue(258.75 + 281.25);
      break;
    case "WNW":
      setDirValue(281.25 + 303.75);
      break;
    case "NW":
      setDirValue(303.75 + 326.25);
      break;
    case "NNW":
      setDirValue(326.25 + 348.75);
      break;

    default:
      break;
  }
 
    //eslint-disable-next-line react-hooks/exhaustive-deps
 }, [])
 

  return (
    <div className="highlight-card">
      <h5>{title}</h5>
      <h2>
        {value}
        <small style={{ fontWeight: "normal" }}>{unit}</small>
      </h2>
      {additional && (
        <p>
          {icon && (
            <button style={{ transform: `rotate(${dirVal / 2}deg)` }}>
              {icon}
            </button>
          )}
          {additional}
        </p>
      )}
      {meter && <Meter value={value} />}
    </div>
  );
};

export default HighlightCard;
