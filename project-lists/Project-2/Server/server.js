import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 4000;
const BaseURL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = "843ab655b6356b02b42ea3465c16b4b4";
const latitude = 12.4342;
const longitude = 79.8139;

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
let icon='';

app.get('/weatherData/in', async(req, res) => {
    try{
        const response = await axios.get(`${BaseURL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        const result = response.data;
        res.json(result);
        try{
            console.log(result.weather[0].ico)
        }
    }catch(err){
        console.log('error occured while fetch the data',err.message);
        console.error('cannot fetch data')
    }
})
app.get('/weatherIcon/in', async(req, res) => {
    console.log(icon);
})

app.listen(port,()=>{
    console.log('running server @ http://localhost:4000');
    console.log('Use ctrl+c to stop the server');
})