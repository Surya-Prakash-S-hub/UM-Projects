import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const URL = 'http://localhost:4000/weatherData/in';
  const [data, setData] = useState(null);
  const [Loading, setLoading] = useState(true)
  const [error, setError] = useState(null);
 
  useEffect(()=>{
    fetch(URL).then(response => {
      if(!response.ok){
        throw new Error('server error occured try again sometime');
      }
      return response.json();
    }).then(data => {
      setData(data);
      setLoading(false);
    }).catch(err => {
      setError(err);
      setLoading(false);
    })
  })

  if(Loading){ return (<div><h1>Loading....</h1></div>)};
  if(error){ return (<div><h1> {error} </h1></div>)};

  return (
    <>
      <h1>Fetched Data</h1>
      <pre> {JSON.stringify(data, null, 2)} </pre>
      <p> {data.weather[0].icon} </p>
    </>
  );
}

export default App;
