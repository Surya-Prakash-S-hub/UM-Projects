import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
const BaseURL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = "843ab655b6356b02b42ea3465c16b4b4";
const latitude = 12.4342;
const longitude = 79.8139;

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', async(req, res) => {
    try{
        const response = await fetch(`${BaseURL}?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`);
        const result = response.rows;

        console.log(result);    
    }catch(err){
        console.log('error occured while fetch the data',err.message);
    }
})

app.listen(port,()=>{
    console.log('running server @ http://localhost:4000');
    console.log('Use ctrl+c to stop the server');
})