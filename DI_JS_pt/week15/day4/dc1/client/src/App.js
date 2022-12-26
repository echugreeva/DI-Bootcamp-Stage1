import './App.css';
import React from 'react';


class App extends React.Component{
  constructor (){
    super();
    this.state = {
      resp:'',
      input:'',
      answer:''
      
    };
  
  }
  

  componentDidMount() {
     fetch('http://localhost:5002/api/hello')
     .then(res => res.json())
     .then(res => this.setState({resp: res}));


  }
  sendPost = ()=> {


  console.log(`pressed send`)
  console.log(`${this.state.input}`)
  console.log(JSON.stringify(this.state.input))
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({answer: this.state.input})
};

  // fetch('http://localhost:5002/api/world', {
  //   method: 'POST',
  //   mode: 'no-cors',   
  //   headers: {
  //   'Content-Type': 'application/json',
  //   "Access-Control-Allow-Origin": "*",
  //   "Access-Control-Allow-Headers": "X-Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization-With",
  //   "Access-Control-Allow-Methods": "POST, PUT, PATCH, GET, DELETE, OPTIONS"
  //   },
  //   body: JSON.stringify({answer: this.state.input})
    
    
  // })
  fetch('http://localhost:5002/api/world', requestOptions).then(res => {
      console.log(`before json ${res}`)
     return res.json()
    })
    .then(res => {
    console.log(res);
    this.setState({answer:res})

})
.catch(err=>{console.log(err)})

  }
  render (){
  
    return (<div className="App">
    <header className="App-header">
      <p>this state: {this.state.resp}</p>
      <h4>Post to server</h4>
      <input type='text' onChange={(e)=>{this.setState({input:e.target.value})}}></input>
      <button onClick={this.sendPost}>Send</button>
      <p>answer from server: {this.state.answer}</p>
    </header>
    
  </div>
);
}
}



export default App;
