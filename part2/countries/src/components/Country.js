import { useState, useEffect } from 'react';
import axios from 'axios';
import Weather from './Weather';

const Country = ({ country }) => {

    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const [ lat, lon ] = country.capitalInfo.latlng;
        const URL = 'https://api.openweathermap.org/data/2.5/weather';
        axios.get(URL, {
            params: {
                lat: lat,
                lon: lon,
                appid: process.env.REACT_APP_API_KEY,
                units: 'metric'
            }
        }).then(response => {
            setWeather(response.data)
        })
    }, [country])

    return (
        <>
            <div>
                <h1>{country.name.common}</h1>
                <p>
                    capital {country.capital}<br />
                    area {country.area}
                </p>
                <h3>languages:</h3>
                <ul>
                    {Object.values(country.languages).map(lang => <li key={lang}>{lang}</li>)}
                </ul>
                <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
            </div>
            { weather && <Weather weather={weather} /> }
        </>
        
    );
}

export default Country;