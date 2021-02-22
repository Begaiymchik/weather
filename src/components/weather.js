import React from 'react';

const Weather = ({weatherData}) => {
    const formattedTime = (time) => {
        const date = new Date(time * 1000);
        const hours = date.getHours();
        const minutes =  date.getMinutes();
        const seconds =  date.getSeconds();
        return hours + ':' + minutes + ':' + seconds;
    };
    return (
        <div>
            <p>Город: {weatherData.name}<img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt='Icon depicting current weather.'/></p>
            <p>Температура: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
            <p>Скорость ветра: {weatherData.wind.speed} м.с.</p>
            <p>Время: {formattedTime(weatherData.dt)}</p>
            <p>Влажность: {weatherData.main.humidity} % </p>
            <p>Восход: {formattedTime(weatherData.sys.sunrise)}</p>
            <p>Закат:{formattedTime(weatherData.sys.sunset)}</p>
        </div>
    );
};

export default Weather;