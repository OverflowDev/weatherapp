import wind from '../assets/wind.svg'
import humidity from '../assets/humidity-svgrepo-com.svg'
import weather from '../assets/weather-moon-svgrepo-com.svg'

function ExtraWeather({loc}) {
  return (
    <div className='grid grid-cols-3 gap-3 md:p-12 p-2 md:my-0 my-24'>
      <div className='flex flex-col justify-center items-center'>
        <img src={wind} alt="wind" className='h-12 w-12' />
        {loc.wind ? 
          <p className='font-bold tracking-widest leading-7'>{loc.wind.speed} MPH</p>
          :
          null
        }
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src={humidity} alt="humidity" className='h-12 w-12' />
        {loc.main ? 
          <p className='font-bold tracking-widest leading-7'>{loc.main.humidity} %</p>
          :
          null
        }
      </div>
      <div className='flex flex-col justify-center items-center'>
        <img src={weather} alt="feels like" className='h-12 w-12' />
        {loc.main ? 
          <p className='font-bold tracking-widest leading-7'>{loc.main.feels_like.toFixed()} °</p>
          :
          null
        }
      </div>
    </div>
  )
}

export default ExtraWeather