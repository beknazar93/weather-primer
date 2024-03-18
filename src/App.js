
import { useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {


  const [cityName, setCityName] = useState('')

  const [weather, setWeather] = useState([])


  const KEY = '3039a1657f9a1f626b6607d7fd9d470b'


  const getWeather = () => {

    axios(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${KEY}`)
      .then(({ data }) => setWeather(data)).catch((error) => alert("вы не правельно ввели город"))

      setCityName("")
  }



  return (
    <div className="App">
      <div className="container">
        <div className='input'>
          <input value={cityName} onChange={(e) => setCityName(e.target.value)} type="text" placeholder='введите город' className="App__input" />
          <button onClick={getWeather}>Узнать</button>
        </div>
        {weather.length === 0 ? "здесь будет ваша погода" :
          <table className='table' border={1}>
            <thead>
              <tr >
                <th >Прогноз погоды</th>
              </tr>


            </thead>
            <tbody>
              <tr>
                <td>город</td>
                <td>{weather.name}</td>
              </tr>
              <tr>
                <td>Страна</td>
                <td>{weather.sys.country}</td>
              </tr>
              <tr>
                <td>Температура</td>
                <td>{(weather.main.temp - 273.15).toFixed(1)}°C</td>
              </tr>
              <tr>
                <td>небо</td>
                <td>
                  <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`} alt="" />
                </td>
              </tr>
            </tbody>
          </table>
        }


      </div>



    </div>
  );
}

export default App;
