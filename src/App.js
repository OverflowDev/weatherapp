
import WeatherSearch from './components/WeatherSearch'
import Weather from './components/Weather'

import {WeatherProvider} from './context/weather/WeatherContext';
import {AlertProvider} from './context/alert/AlertContext';
import Alert from './layouts/Alert';
import Navbar from './layouts/Navbar';


function App() {
  
  return (
    <div className="font-barlow">
      <WeatherProvider>
        <AlertProvider>
          <div className='container'>
            <Navbar />
            <Alert />
            <WeatherSearch />
            <Weather />
          </div>

        </AlertProvider>
      </WeatherProvider>
    </div>
  );
}

export default App;
