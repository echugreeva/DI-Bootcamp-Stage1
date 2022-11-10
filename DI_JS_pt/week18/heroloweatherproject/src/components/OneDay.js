import {useContext, useState, useEffect} from 'react'
import {AppContext} from '../App'
import OneChange from './OneChange';
import OneDaysEx from './OneDayWeatherEx'


const OneDay = ({keyC, keyF, city, country})  => {

    const [oneDay, setDay] = useState(OneDaysEx)

    const {chosen} = useContext(AppContext)
    
    console.log(chosen.key, chosen.city , chosen.country);
     console.log(`oneday component props`+ keyC + keyF + city + country)
     let toFetch;
     if(window.location.href.indexOf("favorites") > -1) {
        toFetch = keyF
        console.log(toFetch)
     } else {
        toFetch = chosen.key
        console.log(toFetch)
     }
     

    const fetchWeather = (id) => {
        fetch(
            `http://dataservice.accuweather.com/currentconditions/v1/${id}?apikey=lBHawUgG9LRqS3TZNMPItFBx1VH87wIt`
          )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setDay(data);
            })
            .catch((err) => {
                console.log(err)
            })
        //  setDay(OneChange)
    
    }
    let iconId;
    if(oneDay[0].WeatherIcon<9) {
        iconId = "0" + oneDay[0].WeatherIcon.toString()
    } else {
        iconId = oneDay[0].WeatherIcon
    }

    let imgSrc = `https://developer.accuweather.com/sites/default/files/${iconId}-s.png`
    
    
    
     useEffect(()=>{
        fetchWeather(toFetch)
        console.log(`oneday fetched weather`)
     },[])

    if (window.location.href.indexOf("favorites") > -1) {

        return (
        <div className='center mw5 mw6-ns hidden ba mv4 bg-lightest-blue'>
                <p>{country}, {city} </p>
                <p>Temperature: {oneDay[0].Temperature.Metric.Value} C</p>
                <img src={imgSrc}/>
                <p>{oneDay[0].WeatherPhrase}</p>   
                
        </div>
        )
    } else if (!chosen.key) {
        
            return (
                <div>no city is chosen</div>
            )
    }
    
     else {
        return (
            <div className='center mw5 mw-ns hidden ba mv4 bg-lightest-blue'>
                <p>{chosen.country}, {chosen.city}</p>
                <p>Temperature: {oneDay[0].Temperature.Metric.Value} C</p>
                <img src={imgSrc}/>
                <p>{oneDay[0].WeatherText}</p>   
                
            </div>
        )
    }
    
    
}

export default OneDay