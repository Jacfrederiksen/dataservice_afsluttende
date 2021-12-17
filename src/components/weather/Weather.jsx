import { useState, useEffect } from 'react'
import { ScaleLoader } from 'react-spinners'
import { weatherData } from '../../helpers/weather'
import './weather.scss';

const Weather = () => {

    const [weather, setWeather] = useState()
    const [loading, setLoading] = useState(false)
    const [fejl, setFejl] = useState(false)

    useEffect(() => {

        setLoading(true);

        weatherData()
            .then(
                data => {
                    if (data) {
                        console.log(data);
                        setWeather(data); 
                        setFejl(false);
                    } else {
                        setWeather();
                        setFejl(true);
                    }
                }
            )
            .finally(
                setLoading(false)
            )
    }, [])

    return (
        <div className="weatherCon">
            {
                weather && <div className="weather">
                <h3>Dagens vejr i Viborg</h3>
                    {
                        <div key={weather.weather.id}>
                        <div><p>{weather.weather[0].main}</p>
                        <p>{Math.round(weather.main.temp)} &deg; (Feels like: {Math.round(weather.main.feels_like)} &deg;) </p>
                        </div>
                        <img src={"http://openweathermap.org/img/wn/" + weather.weather[0].icon + '@2x' + ".png"} alt="Weather Icon" ></img>
                        </div>
                    }
                    {
                        loading && <div>
                            <p>Der loades data fra API'et... Vent venligst</p>
                            <ScaleLoader color={"#FF0000"} />
                        </div>
                    }
                    {
                        fejl && <p>Der er opstået en fejl</p>
                    }
                </div>
            }
        </div>
    )
}


export default Weather