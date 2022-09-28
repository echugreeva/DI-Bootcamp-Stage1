import React from 'react';
// import './App.css';

class App extends React.Component {
  constructor() {
      super();
      this.state = {
        languages : [
            {name: "Php", votes: 0},
            {name: "Python", votes: 0},
            {name: "JavaSript", votes: 0},
            {name: "Java", votes: 0}
        ]
    };
    
    }
    vote = (i) => {
     let newLang = [...this.state.languages];
     newLang[i].votes++;
     this.setState({languages: newLang})
    }
  render() {
      return (
        
          <div> {
            
              this.state.languages.map((lang, i)=> 
            
                <div key = {i} style={{margin: '0 auto'}}>
                  <span style={{margin: '10px'}}>{this.state.languages[i].votes}</span>
                  <span style={{margin: '10px'}}>{this.state.languages[i].name}</span>
                  <span style={{margin: '10px'}}><button onClick={this.vote.bind(this,i)}>Vote</button></span>
                </div>
            )
            
          }
          </div>
      
      )
  }
}


export default App;
