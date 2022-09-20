import {useContext} from 'react'
import WeatherContext from '../context/weather/WeatherContext';
import Spinner from '../layouts/Spinner'
import ExtraWeather from './ExtraWeather';

function Weather() {

  const {loc,loading} = useContext(WeatherContext)
  
  if(!loading) {
    return (
      <div>
        {loc.name !== undefined ?
          <div> 
            <div className='flex flex-col items-center'>
              {/* Location  */}
              <div className='flex items-center justify-center'>
                  <h1 className="text-2xl text-red-800">
                    <ion-icon name="location-sharp"></ion-icon>
                  </h1>
                <h1 className='font-semibold tracking-widest uppercase text-3xl'>{loc.name}</h1>
              </div>
              {/* Location  */}
              {/* Icon  */}
              <div className='flex justify-center'>
                <h1 className=''>
                  {loc.weather ? 
                    <img src={`https://openweathermap.org/img/wn/${loc.weather[0].icon}@4x.png`} alt={loc.weather[0].main} />
                    :
                    null
                  }
                </h1>
              </div>
              {/* Icon  */}
              {/* Description  */}
              <div className='flex justify-center'>
                {loc.weather ? 
                    <h1 className='font-bold text-md uppercase tracking-widest'>
                      {loc.weather[0].main}
                    </h1>
                    :
                    null
                  }
              </div>
              {/* Description  */}
              {/* degree  */}
              <div className='flex justify-center items-center'>
                <h1 className='font-bold text-9xl uppercase text-blue-900'>
                  {loc.main ? 
                    <p>
                      {loc.main.temp.toFixed()}<span className='text-blue-400 text-9xl'>°</span>
                    </p>
                    :
                    null
                  }
                </h1>
              </div>
              {/* degree  */}
            </div>

            <ExtraWeather loc={loc} />
          </div> 
          
          :

          <div className='flex flex-col justify-center items-center mt-48'>
            <h1 className='md:text-6xl text-5xl uppercase font-bold tracking-widest leading-3 flex items-center text-red-700'>
              <ion-icon name="alert-outline"></ion-icon>
            </h1>
            <p className='font-light tracking-wider text-md'>Please Enter Correct City</p>
            
          </div>

        }
      </div>
    )
  } else {
    return <Spinner />
  }
}

export default Weather