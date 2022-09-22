import React from 'react';
import './ex4.css';
const Ex4 = () =>{
    return (
        <div>
            <h1 style = {style_header}>Header</h1>
            <p class="para">paragraph</p>
            <a  href="#">I'm a link</a>
            <form>
                Enter your name 
                <input type = "text"></input>
                <input type = "submit"></input>
            </form>
            <p>here is an image</p>
            <img src = "https://media.istockphoto.com/photos/cute-puppy-picture-id598175960?b=1&k=20&m=598175960&s=170667a&w=0&h=kHCUhzdoFICyXcvY_vVAuvI7VJocVWyLuF20FqFtWKY="></img>
            <ul>this is a list
                <li>stuff</li>
                <li>stuff</li>
                <li>stuff</li>
            </ul>
        </div>
        

    )
}

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };

export default Ex4;