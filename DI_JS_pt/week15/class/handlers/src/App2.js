import React from 'react'
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      num1:'',
      num2:'',
      sum:0,
      selectedvalue:'',
      texta:'',
      isgoing:''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (e) => {
    // console.log(e.target.name, e.target.value);
    console.log(e.target.type, e.target.checked);
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.setState({[e.target.name]:value})
  }

  handleClick() {
    const {num1, num2} = this.state;
    this.setState({num1:Number(num1)+Number(num2)})
  }

  compemntDidMount(){
    console.log('elena');
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const {num1, num2} = this.state;
    this.setState({sum:Number(num1)+Number(num2)})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
        <form onSubmit={this.handleSubmit}>
          <input  type="text"
                  placeholder="first name"
                  name="num1"
                  value={this.state.num1}
                  onChange={this.handleChange} />
          <p>Num1: {this.state.num1}</p>
          <input  type="text"
                  placeholder="last name"
                  name="num2"
                  onChange={this.handleChange} />
          <p>Num 2: {this.state.num2}</p>
          <button onClick={this.handleClick}>Add</button>
          <h2>{this.state.sum}</h2>
          <select name='selectedvalue' onChange={this.handleChange}>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <p>Select value: {this.state.selectedvalue}</p>
          <textarea name='texta' onChange={this.handleChange} />
          <p>Text: {this.state.texta}</p>
          <input type='checkbox' name='isgoing' onChange={this.handleChange} />
          <p>Is Going: {this.state.isgoing?'Yes':'No'}</p>
        </form>
        </header>
      </div>
    );
  }

}

export default App;