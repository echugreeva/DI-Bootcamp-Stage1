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
        //         setKeyList(data);
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //     })
        setKeyList(AutocompleteEx)

    }


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

    const {input,setInput} = useContext(AppContext)
    const {keyList,setKeyList}=useContext(AppContext)
    const {oneDay, setOneDay}=useContext(AppContext)
    const {fiveDays, setFiveDay}=useContext(AppContext)
    const {chosen, setChosen} =useContext(AppContext)
    return (
        <div>
            <input type='text' onChange = {(e)=>setInput(e.target.value)}/>
            
            <div>
                <button onClick={(e)=>{
                    fetchCity(input);
                }}>choose city</button>
                {
                    keyList.map((item)=>{
                        return (
                                <p onClick={
                                    (e)=>{
                                        setChosen({country:item.Country.LocalizedName, city:item.LocalizedName, key:item.Key})
                                        // fetchWeather(item.Key);
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

