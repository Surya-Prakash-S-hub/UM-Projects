import React, { useState } from "react";
import { Landing } from "./components/LandingPage";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";


function App() {
  const [city, setCity] = useState('');

  const fetchCity = (city)=>{
    const fetchedCity = city;
    setCity(fetchedCity);
  }
  return(
    <>
      <NavBar onAdd={fetchCity} />
      <Landing city={city} />
      <Footer />
    </>
  )
}

export default App;
