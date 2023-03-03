import {useEffect, useState} from 'react'
import { getWeather } from '../services/weather'

const CountryDetails = ({country}) => {
    const [temperature, setTemperature] = useState('')
    const [wind, setWind] = useState('')
    const [logoURL, setLogoURL] = useState('')

    useEffect(() => {
        getWeather(country.capital).then(res => {
            setTemperature(res.data.main.temp - 273)
            setWind(res.data.wind.speed)
            setLogoURL(`http://openweathermap.org/img/wn/${res.data.weather[0].icon}@2x.png`)
        })
    }, [])  
    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>Capital: {country.capital}</p>
            <p>Area: {country.area} </p>
            <h3>Languages:</h3> 
            <ul>
                {Object.keys(country.languages).map((key,index) => {
                    return (
                        <li key={index}>{country.languages[key]}</li>
                    )
                })}
            </ul>
            <img src={country.flags.png} alt="Country flag"/>
            <h1>Weather in {country.capital}</h1>
            <p>temperature {temperature} Celsius</p>
            <img src={logoURL} alt="weather icon"/>
            <p>Wind {wind} m/s</p>
        </div>
    )
}

export default CountryDetails