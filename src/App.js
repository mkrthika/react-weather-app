import { useState } from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Weather from './Weather';
import axios from 'axios';
import Climate from './Climate';

function App() {

  const[search , setSearch] = useState('')
  const[weather , setWeather] = useState({})
  const api = {
    key: "d2841dc6c1305bafa41334b464a82390",
    base_url: "https://api.openweathermap.org/data/2.5/"
  }

  const handleSearch = async(e) => {
    e.preventDefault();
    try{
      const response = await axios.get(`${api.base_url}weather?q=${search}&units=metric&appid=${api.key}`);
      console.log(response.data)
      setWeather(response.data)
    }
    catch(err){
      console.log(err.message)
    }
    finally{}
  }

 
  return (
    <div className='App'>
      <Header title="Weather App"/>
      <Weather 
      search = {search}
      setSearch = {setSearch}
      handleSearch = {handleSearch}/>
      <Climate
      weather = {weather} 
      />
      <Footer />
    </div>
  );
}

export default App;
