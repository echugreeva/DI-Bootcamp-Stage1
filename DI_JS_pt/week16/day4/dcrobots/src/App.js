import React, { Component } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";
import { robots } from "./components/robots";
import {connect} from 'react-redux'
import {searchFieldChange} from './redux/action'


const  App = (props)=> {
console.log(props.robots)
console.log(props.searchField)
const filterRobots = props.robots.filter(
      (robot) => {
        return robot.name
          .toLowerCase()
          .includes(props.searchField.toLowerCase());
      }
    );
  return (
    <div className="App-header">
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox
            searchChange={props.searchFieldChng}
          />
          <Scroll>
            <ErrorBoundary>
              <CardList robots={filterRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
    </div>
      );


  }


  // componentDidMount() {
  //   fetch(
  //     "http://jsonplaceholder.typicode.com/users"
  //   )
  //     .then((res) => res.json())
  //     .then((users) =>
  //       this.setState({ robots: users })
  //     );
  // }
  

const mapStateToProps = (state) => {
  return {
      robots: state.robots,
      searchField: state.searchField || ''
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    searchFieldChng: (txt) => dispatch(searchFieldChange(txt))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)