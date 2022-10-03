// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Form from './Form';
import FormValues from './FormValues';

class App extends React.Component{
  constructor (){
    super();
    this.state = {
      fName:'',
      lName:'',
      age:'',
      gender:'',
      destination:'',
      nutsFree:'',
      lactoseFree:'',
      vegan:''
    };
  
  }
  handleChange = (e) => {
    console.log(e.target.type, e.target.checked);
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({[e.target.name]:value})
  }

  handleClick = () => {
    const options = {
    	method: 'GET',
    	headers: {
    		'X-RapidAPI-Key': '8e714f6b88mshbb20deb3af21b66p17c12cjsnb08e0581e35c',
    		'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
    	}
    }
    };

  render () {
    return (
      <div className="App">
        <header className="App-header">
          <Form handleChange={this.handleChange} handleClick={this.handleClick} />
          <FormValues 
          fName={this.state.fName} 
          lName={this.state.lName} 
          age ={this.state.age} 
          gender = {this.state.gender} 
          destination = {this.state.destination}
          nutsFree = {this.state.nutsFree}
          lactoseFree = {this.state.lactoseFree}
          vegan = {this.state.vegan}
           />

        </header>
      </div>
    );
  }
  
}

export default App;
