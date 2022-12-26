import {useContext,useEffect} from 'react'
import {AppContext} from '../App'
import FiveDaysEx from './FiveDaysWeatherEx.json';

const FiveDays = (props)  => {

    // console.log(fiveDays)

    const fetchWeatherFive = (id) => {
        // fetch(
        //     `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=lBHawUgG9LRqS3TZNMPItFBx1VH87wIt`
        //   )
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         setFiveDay(data.DailyForecasts);
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
    
    
        setFiveDay(FiveDaysEx.DailyForecasts)
    
    }

    const {fiveDays,setFiveDay, chosen} = useContext(AppContext)
    useEffect=(()=>{
        fetchWeatherFive(chosen.key)
    },[])
    
    return (
        
        <div>
            {
                fiveDays.map((item,i)=>{
                    return(
                        <div key={i}>
                            <p>{item.Date}</p>
                            <p>{item.Temperature.Value}</p>
                            <p>{item.Day.Icon}</p>
                            <p>{item.Day.Icon.Phrase}</p>
                            
                        </div>
                    )
                })
            }
        </div>
    )
}

export default FiveDays