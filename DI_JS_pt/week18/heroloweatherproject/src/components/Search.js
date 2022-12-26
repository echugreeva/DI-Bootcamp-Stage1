import {useContext} from 'react'
import {AppContext} from '../App'
import AutocompleteEx from './AutoCompleteEx'
import OneDaysEx from './OneDayWeatherEx'
import FiveDaysEx from './FiveDaysWeatherEx.json'

const Search = (props)=>{
    const fetchCity = (input) => {
    
        // fetch(
        //     `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=lBHawUgG9LRqS3TZNMPItFBx1VH87wIt&q=${input}`
        //   )
        //     .then((res) => res.json())
        //     .then((data) => {
        //         console.log(data);
        //         setKeyList(data||[]);
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
         setKeyList(AutocompleteEx)

    }

const fetchWeatherFive = (id) => {
    fetch(
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=lBHawUgG9LRqS3TZNMPItFBx1VH87wIt&metric=true`
      )
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            setFiveDay(data.DailyForecasts);
        })
        .catch((err) => {
            console.log(err)
        })


    // setFiveDay(FiveDaysEx.DailyForecasts)

}

    const {input,setInput} = useContext(AppContext)
    const {keyList,setKeyList}=useContext(AppContext)
    const {oneDay, setOneDay}=useContext(AppContext)
    const {fiveDays, setFiveDay}=useContext(AppContext)
    const {chosen, setChosen} =useContext(AppContext)
    return (
        <div className=' h4 flex-column items-center justify-center h-100'>
            <input className="mv4 self-center ba br3 b--light-purple shadow-3 pa2" type='text' placeholder="Start typing city name" 
            onChange = {(e)=>{
                     fetchCity(e.target.value)}
            
            }  
    //         {(e)=>{setInput(e.target.value)
    //             fetchCity(input)}
       
    //    }  
            />
            
            <div className='mv2 w-20 center bg-white br3 '>
        
                {
                    keyList.map((item)=>{
                        return (
                                <p className='pa1' onClick={
                                    (e)=>{
                                        setKeyList([])
                                        setChosen({country:item.Country.LocalizedName, city:item.LocalizedName, key:item.Key})
                                        // fetchWeatherFive(item.Key);
                                    }
                                }
                                key={item.Key}> {item.LocalizedName}, {item.Country.LocalizedName} </p>    
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Search

