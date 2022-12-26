import React from "react";
import {connect} from 'react-redux'
import searchFieldChange from '../redux/action'

const SearchBox = ({searchChange}) => {
  return (
    <div className="pa2">
      <input
        type="search"
        placeholder="search robots"
        className="pa3 ba b--green bg-lightest-blue"
        onChange={(e)=>{searchChange(e.target.value)}}
      />
    </div>
  );
};

export default SearchBox;