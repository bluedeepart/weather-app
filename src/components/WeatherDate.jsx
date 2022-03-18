const WeatherDate = ({ time }) => {
  const daysName = ["Sun", "Mon", "Tue", "Web", "Thu", "Fri", "Sat"];
  const monthsName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const today = new Date(time);

  return (
    <h5 className="weather-date">
      {daysName[today.getDay()]}, {today.getDate()}{" "}
      {monthsName[today.getMonth()]}
    </h5>
  );
};

export default WeatherDate;
