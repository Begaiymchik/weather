import React from 'react';
import axios from "axios";

const CityForm = ({setWeatherData, setCity, city, weatherData}) => {
    const API_KEY = 'ede083cfc8944bac406728eab14401c2';
    const getWeatherData = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(({data}) => {
                setWeatherData(data)
            })
            .catch(() => {
                setWeatherData({...weatherData, err: true})
            })
    };
    const inputHandler = (e) => {
        setCity(e.target.value)
    };
    return (
        <div>
            <form action="" onSubmit={getWeatherData}>
                <input type="text" placeholder='Введите город'onChange={inputHandler}/>
                <button type='submit'>Узнать погоду</button>
            </form>
        </div>
    );
};

export default CityForm;