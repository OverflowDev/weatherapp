import {useState, useContext} from 'react'
import AlertContext from '../context/alert/AlertContext'
import WeatherContext from '../context/weather/WeatherContext'

function WeatherSearch() {

    const [location, setLocation] = useState('')

    const {searchLocation} = useContext(WeatherContext)
    const {setAlert} = useContext(AlertContext)

    const handleChange = (e) => setLocation(e.target.value)

    const handleSubmit = (e) => {
        e.preventDefault()

        if(location === ''){
            setAlert('Please Enter a Location', 'error')
        } else {
            searchLocation(location)
            setLocation('')
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <div className="relative flex justify-center overflow-hidden p-4">
            <div className="flex relative rounded-2xl bg-blue-50 px-6 p-3 shadow-lg ring-2 ring-blue-200 sm:mx-auto sm:max-w-lg sm:px-10">
                {/* <form action="" className=""> */}
                    <div className="mx-auto max-w-md">
                        <input 
                            type="text" 
                            value={location}
                            placeholder='Enter Location'
                            onChange={handleChange}
                            className="peer cursor-pointer relative z-10 h-12 w-12 rounded-full border-2 border-blue-400 bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-blue-400 focus:pl-16 focus:pr-4" 
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-blue-700 px-3.5 peer-focus:border-blue-300 peer-focus:stroke-blue-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <button type='submit' className='ml-2 px-6 sm:px-10 p-3 bg-blue-200 hover:bg-blue-300 rounded-2xl'>Search</button>
                {/* </form>  */}
            </div>
        </div>
    </form>
  )
}

export default WeatherSearch