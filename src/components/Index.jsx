import React, { useContext } from "react";
import WeatherContext from "../context/WeatherContext";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import WeatherDetails from "./WeatherDetails";

const Index = () => {

  const weatherCtx = useContext(WeatherContext);
  const { isLoading } = weatherCtx;

  if(isLoading){
    return <Loading />
  }else{
    return (
      <main className="body-wrapper">
        <Sidebar />
        <WeatherDetails />
      </main>
    );
  }
};

export default Index;
