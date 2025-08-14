import React, { useState, useEffect } from "react";
import { Report } from "./Report";

export const Landing = (props) => {
  const retrivedCity = props.city;
  const [datas, setData] = useState(null);
  const [localTime, setLocalTime] = useState("");
  const [city, setCity] = useState();
  const [error, setError] = useState("");
  const baseURL = import.meta.env.VITE_API_RUL;

  useEffect(() => {
    if (retrivedCity) {
      setCity(retrivedCity);
    }
  }, [retrivedCity]);

  useEffect(() => {
    if (city) {
      fetch(`${baseURL}/getcoord/in`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ city }),
      })
        .then(async (res) => {
          if (!res.ok) {
            // Get error message from backend
            const errData = await res.json();
            throw new Error(errData.error || "Something went wrong");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError(""); // Clear error if success
        })
        .catch((err) => {
          setError(err.message);
          setData(null); // Clear old data on error
        });
    } else {
      fetch(`${baseURL}/weatherData/in`)
        .then(async (res) => {
          if (!res.ok) {
            const errData = await res.json();
            throw new Error(errData.error || "Something went wrong");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setError("");
        })
        .catch((err) => {
          setError(err.message);
          setData(null);
        });
    }
  }, [city,baseURL]);

  function getCloudDescription(cloudiness) {
    if (cloudiness <= 10) return "Clear sky";
    if (cloudiness <= 30) return "Mostly clear";
    if (cloudiness <= 60) return "Partly cloudy";
    if (cloudiness <= 85) return "Mostly cloudy";
    return "Overcast";
  }

  useEffect(() => {
    if (datas) {
      const timeOffSet = datas.timezone;
      const time = new Date((datas.dt + timeOffSet) * 1000);

      const localTime = time.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });

      setLocalTime(localTime);
    }
  }, [datas]);
  if (error) {
    return (
      <>
        {city ? (
          <div id="error" className=" w-full h-ful text-white">
            <h1>Error</h1>
            <h2 className="text-4xl">
              User Value: <strong>{city}</strong>{" "}
            </h2>
            <h3 className="text-3xl"> Error: {error} </h3>
            <h3 className="text-3xl"> Please Re-enter the correct place. </h3>
          </div>
        ) : (
          <div id="error" className=" w-full h-ful text-white">
            <h1>Error</h1>
            <h3 className="text-3xl"> Error: {error} Data </h3>
            <h3 className="text-3xl"> Server Error Occured, try again. </h3>
          </div>
        )}
      </>
    );
  }
  if (!datas) {
    return (
      <div>
        <h1>Loading....</h1>
      </div>
    );
  }

  return (
    <>
      {datas && (
        <Report
          time={localTime}
          location={datas.name}
          wind={datas.wind.speed}
          howits={`${datas.weather[0].main} (${getCloudDescription(
            datas.clouds.all
          )})`}
          descp={datas.weather[0].description}
          temp={datas.main.temp}
          humidity={datas.main.humidity}
          image={datas.weather[0].icon}
          key={datas.id}
        />
      )}
    </>
  );
};
