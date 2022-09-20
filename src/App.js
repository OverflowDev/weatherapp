
import WeatherSearch from './components/WeatherSearch'
import Weather from './components/Weather'

import video from './assets/Pexels Videos 2453852.mp4'

import {WeatherProvider} from './context/weather/WeatherContext';
import {AlertProvider} from './context/alert/AlertContext';
import Alert from './layouts/Alert';
import Navbar from './layouts/Navbar';


function App() {
  
  return (
    <div className="font-barlow">
      <video src={video} autoPlay loop muted className='h-screen w-full object-cover bg-blend-darken' />
      <WeatherProvider>
        <AlertProvider>
          <div className='absolute top-0 w-full'>
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
