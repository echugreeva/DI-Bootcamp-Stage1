import {useContext,useEffect} from 'react'
import {AppContext} from '../App'
import FiveDaysEx from './FiveDaysWeatherEx.json';
import FiveChange from './FiveChange.json'

const FiveDays = (props)  => {
    const {fiveDays, setFiveDay, chosen} = useContext(AppContext)

    // console.log(fiveDays)

//     const fetchWeatherFive = (id) => {
//         fetch(
//             `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=lBHawUgG9LRqS3TZNMPItFBx1VH87wIt&metric=true`
//           )
//             .then((res) => res.json())
//             .then((data) => {
//                 console.log(data);
//                 setFiveDay(data.DailyForecasts);
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
    
    
//         // setFiveDay(FiveChange.DailyForecasts)
//         // console.log(fiveDays)
    
//     }

    
//      useEffect(()=>{
//         fetchWeatherFive(chosen.key)
//    },[chosen])

   if (!chosen.key){
       return (
           <p>No forecast yet</p>
       )
   } else {


    return (
        
        <div className='flex justify-around'>
            {
                fiveDays.map((item,i)=>{
                    // console.log(i)
                    return (
                         <div className='center mw5 mw4-ns hidden ba mv4 bg-lightest-blue' key={i}>
                            <p>{item.Date}</p>
                            <p>{item.Temperature.Minimum.Value} - {item.Temperature.Maximum.Value}</p>
                            <p>{item.Day.Icon}</p>
                            <p>{item.Day.IconPhrase}</p>
                        </div>
                    )
                }
                    )
            }
        </div>
    )
   }
    
    
}

export default FiveDays


// {
//     fiveDays.map((item,i)=>{
//         return(
//             <div key={i}>
//                 <p>{item.Date}</p>
//                 <p>{item.Temperature.Minimum.Value} - {item.Temperature.Maximum.Value}</p>
//                 <p>{item.Day.Icon}</p>
//                 <p>{item.Day.IconPhrase}</p>
                
//             </div>
//         )
//     })
// }