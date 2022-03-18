import Clear from "./assets/Clear.png";
import Hail from "./assets/Hail.png";
import HeavyCloud from "./assets/HeavyCloud.png";
import HeavyRain from "./assets/HeavyRain.png";
import LightCloud from "./assets/LightCloud.png";
import LightRain from "./assets/LightRain.png";
import Shower from "./assets/Shower.png";
import Sleet from "./assets/Sleet.png";
import Snow from "./assets/Sleet.png";
import Thunderstorm from "./assets/Sleet.png";

const WeatherIcon = ({ imgSrc }) => {
  switch (imgSrc) {
    case 'Clear':
      imgSrc = Clear;
      break;
    case 'Hail':
      imgSrc = Hail;
      break;
    case 'Heavy Cloud':
      imgSrc = HeavyCloud;
      break;
    case 'Heavy Rain':
      imgSrc = HeavyRain;
      break;
    case 'Light Cloud':
      imgSrc = LightCloud;
      break;
    case 'Light Rain':
      imgSrc = LightRain;
      break;
    case 'Showers':
      imgSrc = Shower;
      break;
    case 'Sleet':
      imgSrc = Sleet;
      break;
    case 'Snow':
      imgSrc = Snow;
      break;
    case 'Thunderstorm':
      imgSrc = Thunderstorm;
      break;

    default:
      break;
  }

  return (
    <>
      <img src={imgSrc} alt={imgSrc.split('/')[3].split('.')[0]} />
    </>
  );
};

export default WeatherIcon;
