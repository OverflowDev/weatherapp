import { createContext, useReducer } from "react";
import weatherReducer from './WeatherReducer'

const WeatherContext = createContext()

// const WEATHER_URL = process.env.REACT_APP_WEATHER_URL
// const WEATHER_KEY = process.env.REACT_APP_WEATHER_KEY

export const WeatherProvider = ({children}) => {

    const initialState = {
        loc: {},
        loading:false
    }

    const [state, dispatch] = useReducer(weatherReducer, initialState)

    const searchLocation = async (location) => {
        setLoading()

        const params = new URLSearchParams({
            q: location,
        })
        const params_key = new URLSearchParams({
            appid: '7f31755915e63d21170a71769c3701ce',
        })

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?${params}&units=imperial&${params_key}`)
        
        const data = await response.json()

        dispatch({
            type: 'GET_LOCATION',
            payload: data,
        })
    }

    // Set loading
    const setLoading = () => dispatch({
        type: 'SET_LOADING'
    })

    return (<WeatherContext.Provider value={{ 
        loc: state.loc,
        loading: state.loading,
        searchLocation,
     }}>
        {children}
    </WeatherContext.Provider>)
}

export default WeatherContext