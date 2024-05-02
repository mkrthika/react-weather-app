import React from 'react'
import { FaCloudSunRain, FaSnowflake, FaSun } from 'react-icons/fa'
import { FaTemperatureArrowDown, FaTemperatureArrowUp } from 'react-icons/fa6'
import { LiaWindSolid } from 'react-icons/lia'

const Climate = ({weather}) => {
  return (
    <main className='Climate'>
        <ul className='ClimateDetails'>
            <li>{`Temperature :- ${weather.main.temp} deg Celsius    `}
            {weather.main.temp < 30.0  ? <FaSnowflake /> : <FaSun />}
            </li>
            <li>{`Feels-Like :- ${weather.main.feels_like} deg Celsius    `}
            {weather.main.feels_like < 30.0  ? <FaSnowflake /> : <FaSun />}
            </li>
            <li>{`Maximum Temperature  :- ${weather.main.temp_max} deg Celsius    `}
            <FaTemperatureArrowUp />
            </li>
            <li>{`Minimum Temperature :- ${weather.main.temp_min} deg Celsius    `}
            <FaTemperatureArrowDown />
            </li>
            <li>{`Weather :- ${weather.weather[0].main} - ${weather.weather[0].description}   `}
            <FaCloudSunRain />
            </li>
            <li>{`Wind Speed :- ${weather.wind.speed} meters per second   `}
            <LiaWindSolid />
            </li>
            
            
        </ul>
        
    </main>
  )
}

export default Climate