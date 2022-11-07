import {useContext, useEffect} from 'react'
import {AppContext} from '../App'
import OneChange from './OneChange';

const OneDay = ({data})  => {
    console.log(`data in props`+ data)

    // const fetchWeather = (id) => {
    //     // fetch(
    //     //     `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=lBHawUgG9LRqS3TZNMPItFBx1VH87wIt`
    //     //   )
    //     //     .then((res) => res.json())
    //     //     .then((data) => {
    //     //         console.log(data);
    //     //         setOneDay(data);
    //     //     })
    //     //     .catch((err) => {
    //     //         console.log(err)
    //     //     })
    //     setOneDay(OneChange)
    
    // }

    const {oneDay, setOneDay, chosen} = useContext(AppContext)
    
    console.log(chosen.key, chosen.city , chosen.country);
    
    
    //  useEffect(()=>{
    //     fetchWeather(chosen.key)
    //     console.log(`oneday fetched weather`)
    //  },[chosen])
    if (window.location.href.indexOf("favorites") > -1) {

        return (
        <div className='center mw5 mw6-ns hidden ba mv4 bg-lightest-blue'>
                <p>{data[0].Temperature.Metric.Value}</p>
                <p>{data[0].WeatherIcon}</p>
                <p>{data[0].WeatherText}</p>   
                
        </div>
        )
    } else if (!chosen.key) {
        
            return (
                <div>no city is chosen</div>
            )
    }
    
     else {
        return (
            <div className='center mw5 mw4-ns hidden ba mv4 bg-lightest-blue'>
                <p>{chosen.country}, {chosen.city}</p>
                <p>{data[0].Temperature.Metric.Value}</p>
                <p>{data[0].WeatherIcon}</p>
                <p>{data[0].WeatherText}</p>   
                
            </div>
        )
    }
    
    
}

export default OneDay