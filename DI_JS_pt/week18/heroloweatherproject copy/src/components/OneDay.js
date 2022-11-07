import {useContext, useEffect} from 'react'
import {AppContext} from '../App'
import OneDaysEx from './OneDayWeatherEx';

const OneDay = (props)  => {
    const fetchWeather = (id) => {
        // fetch(
        //     `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=lBHawUgG9LRqS3TZNMPItFBx1VH87wIt`
        //   )
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         setOneDay(data);
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        setOneDay(OneDaysEx)
    
    }

    const {oneDay, setOneDay, chosen} = useContext(AppContext)
    console.log(chosen)
    useEffect=(()=>{
        fetchWeather(chosen.key)
    },[])

    if(oneDay.length<1){
        return (
            <div>blabla</div>
        )
    } else {
        return (
            <div>
                <p>{chosen.country}, {chosen.city}</p>
                <p>{oneDay[0].Temperature.Metric.Value}</p>
                <p>{oneDay[0].WeatherIcon}</p>
                <p>{oneDay[0].WeatherText}</p>   
                
            </div>
        )
    }
    
    
}

export default OneDay