import {useContext,useEffect} from 'react'
import {AppContext} from '../App'
import FiveDaysEx from './FiveDaysWeatherEx.json';
import FiveChange from './FiveChange.json'

const FiveDays = (props)  => {
    const {fiveDays, setFiveDay, chosen} = useContext(AppContext)

    

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
                    let iconId;
                    if(item.Day.Icon<9) {
                        iconId = "0" + item.Day.Icon.toString()
                        } else {
                            iconId = item.Day.Icon
                        }
                    let date = item.Date.slice(0,10)

    let imgSrc = `https://developer.accuweather.com/sites/default/files/${iconId}-s.png`
                    return (
                         <div className='center mw5 mw4-ns hidden ba mv4 bg-lightest-blue' key={i}>
                            <p>Date: {date}</p>
                            <p>Temperature: {item.Temperature.Minimum.Value} C - {item.Temperature.Maximum.Value} C</p>
                            <img src={imgSrc}/>
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

