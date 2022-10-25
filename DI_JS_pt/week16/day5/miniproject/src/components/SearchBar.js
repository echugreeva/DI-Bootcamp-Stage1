import React from "react";
import {connect} from 'react-redux'
import {searchSubmit,searchInput} from '../redux/action'
import { NavLink } from "react-router-dom";

const SearchBar = (props) => {
  return (
    <>
    <input
        type="search"
        placeholder="search images" 
        onChange={(e)=>{props.searchInput(e.target.value)}}
        />
    <NavLink to="/search">
         <button onClick={() => {
           const options = {
            method: 'GET',
            headers: {
                Authorization: '563492ad6f91700001000001099cb8888c044472af40dc3b60a997e1',
                'X-RapidAPI-Key': '4980814c76msh916d21acc0ea2b9p1680a1jsn3be7217effc7',
                'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
            }
        };
        console.log(`going to search for ${props.input}`)
        fetch(`https://pexelsdimasv1.p.rapidapi.com/v1/search?query=${props.input}&locale=en-US&per_page=30&page=1&Max=30`, options)
            .then(response => response.json())
            .then((response) => {
                console.log(response.photos)
                let newArr = response.photos;
                props.searchSubmit(newArr)
            })
            .catch(err => console.error(err))
         }} href='/search'>Show me images</button>
    </NavLink>
    
    </>
    
    
  );
};

const mapStateToProps = (state) => {
  return {
      input: state.searchInput
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchSubmit: (txt) => dispatch(searchSubmit(txt)),
    searchInput: (txt)=> dispatch(searchInput(txt))

  }
  
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);