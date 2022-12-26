import React from 'react';
import './App.css';
import quotes from './QuotesDatabase'

let prevQuote=0;

  class App extends React.Component{
    constructor (){
      super();
      this.state = {
        quote:quotes[0].quote,
        author:quotes[0].author, 
        color: ''
      };
    }
    
    getQuote =()=> {
      let i = Math.floor(Math.random() * quotes.length);
      if(i !== prevQuote) {
        let quote = quotes[i];
        prevQuote = i;
        this.setState({quote:quote.quote})
        if (quote.author.length > 1){
          this.setState({author:quote.author})
        } else {
          this.setState({author:'unknown'})
        }
        
      } else {
        let quote = quotes[i+1];
        prevQuote = i+1;
        this.setState({quote:quote.quote})
        if (quote.author.length > 1){
          this.setState({author:quote.author})
        } else {
          this.setState({author:'unknown'})
        }
      }
      
    }
    randomColor =() =>{
      const color = `rgb(
        ${Math.floor(Math.random() * 155)},
        ${Math.floor(Math.random() * 155)},
        ${Math.floor(Math.random() * 155)})`;
      return color;
    }


    render (){
      let newColor = this.randomColor();
      const html = document.documentElement;
      html.style.backgroundColor = newColor;
      return (
        <div style={{backgroundColor: 'white'}} > 
          <h1 style={{color: newColor}}>{this.state.quote}</h1>
          <p>{this.state.author}</p>
          <button style={{backgroundColor: newColor}} onClick={this.getQuote}>New quote</button> 
    
        </div>
        
        
      );
    }
  
  
    
  }

export default App;
