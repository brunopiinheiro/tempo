import './App.css';
import Temperatura from './components/temperatura';
import { useState } from 'react';

const api = {
  key: "c45fb80380d4c90a6cee4aaa4d21ae02",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  const [query, setQuery] = useState('');
  const [tempo, setTempo] = useState({});

  const search = async evt => {
    if (evt.key === "Enter") {
      const response = await fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      const tempoJson = await response.json();
      setTempo(tempoJson);
      setQuery(' ');
    }
  }

  return (
    <div className={tempo.main ? ((tempo.main.temp > 16) ? "app warm" : "app") : "app"}>
      <main>
        <div className='search-box'>
          <input
            type="text"
            className='search-bar'
            placeholder='Pesquisar...'
            onChange={e => setQuery(e.target.value)}
            onKeyPress={search}
          />
        </div>
        {(typeof tempo.main != "undefined") && (<Temperatura
          cidade={tempo.name}
          pais={tempo.sys.country}
          temperatura={tempo.main.temp}
          tempo={tempo.weather[0].main} />)
        }

      </main>
    </div>

  );
}

export default App;
