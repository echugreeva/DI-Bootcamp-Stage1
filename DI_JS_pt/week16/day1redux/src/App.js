import logo from './logo.svg';
import './App.css';
import React from 'react'
import {connect} from 'react-redux'
import Child from './Child';
import {handleChangeAction}  from './redux/actions'


class App extends React.Component{
  constructor(){
    super()
    this.state={
      prop_1:'one',
      prop_2:'two',
    }
  }
  render(){
    return (
      <div className="App">
        <p>redux example</p>
        <p>{this.state.prop_1}</p>
        <p>{this.state.prop_2}</p>
        <input onChange={(e)=>{
          this.setState({prop_1:e.target.value})
        }}/>
        <h2>Redux store</h2>
        <p>Prop One from store: {this.props.a}</p>
        <input onChange={this.props.handleC}/>
        <p>Prop Two from store: {this.props.b}</p>
        <Child/>
      </div>
    );
  }
  
}
const mapStateToProps = (state)=> {
  return {
    a: state.prop_1,
    b: state.prop_2
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    handleC: (e) => dispatch(handleChangeAction(e.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
