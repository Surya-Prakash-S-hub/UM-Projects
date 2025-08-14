import React from "react";
// import imageface from "../assets/face23.jpg";

export const Report = (props) => {
  return (
    <>
      <div className="outerContainer">
        <div className="innerContainer">
          <div className="container">
            <div className="firstPhase">
              <p className=" whitespace-nowrap" > {props.descp} </p>
              <img
                src={`https://openweathermap.org/img/wn/${props.image}@2x.png`}
                alt="weather icon"
              />
            </div>
            <div className="secondPhase">
              <div className="top font-mono">
                <h1> {props.location} </h1>
                <h4> {props.time} </h4>
              </div>
              <div className="bottom">
                <p>Description : {props.howits} <span><ion-icon className="translate-y-1 pl-0.5" name="cloud-outline"></ion-icon></span> </p>
                <p>Temparature : {props.temp}&deg;C <span><ion-icon className="translate-y-1 pl-0.5" name="thermometer-outline"></ion-icon></span></p>
                <p>Humidity : {props.humidity} <span><ion-icon className="translate-y-1 pl-0.5" name="water-outline"></ion-icon></span> </p>
                <p>Wind Speed : {props.wind} <span><ion-icon className="translate-y-1 pl-0.5" name="speedometer-outline"></ion-icon></span> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
