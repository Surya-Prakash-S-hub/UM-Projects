import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";
import dotenv from "dotenv";

//config dotenv data in the server.js file
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;
const api_key = process.env.API_KEY;
const base_URI = process.env.WEATHER_API;

// Coordination for New York
const latitude =  40.7127281;
const longitude = -74.0060152;

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());


// this is home page of the backend server
app.get('/',(req, res) => {
    res.render('home.ejs');
})


// returns the data from the weather api
app.get('/weatherData/in', async(_, res) => {
    try{
        const response = await axios.get(`${base_URI}?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`);
        const result = response.data;
        
        res.json(result);
    }catch(err){
        console.log('error occured while fetch the data',err.message);
        console.error('cannot fetch data')
    }
})


//returns data from the weather api based on city
app.post('/getcoord/in', async(req, res) => {
    const city = req.body['city'];
    // const city = 'London'
    if(!city){
        res.status(400).json({error: 'place name required, try again'});
    }

    try {
    const url = `${base_URI}?q=${city}&appid=${api_key}&units=metric`;
    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      return res.status(404).json({ error: "City not found" });
    }

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching weather data" });
  }

})


//this link useded to return icon for api data
app.get('/weatherIcon/in', async(req, res) => {
    
    //this one not implemented yet. but it will soon...
    res.status(501).json({ error: "Not implemented" });
})


//server running port at localhost 4000
app.listen(port,()=>{
    console.log('running server @ http://localhost:4000');
    console.log('Your Weather API running in the back');
    console.log('Use ctrl+c to stop the server');
})