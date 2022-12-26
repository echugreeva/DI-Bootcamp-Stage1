import './App.css';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from "redux";
import {connect} from 'react-redux'
import {reducer} from './redux/reducer';
// import myMiddleWare from './redux/middlewares';
import thunkMiddleware from 'redux-thunk';
import { useEffect} from 'react';
 

import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Scroll from "./components/Scroll";
import ErrorBoundary from "./components/ErrorBoundary";
import Loading from './components/Loading';
import {searchFieldChange, getRobots} from './redux/action'

const store = createStore(reducer, applyMiddleware(thunkMiddleware));

const  App = (props)=> {

useEffect(() => {
    props.getRobots()
  },[]);  

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
    <Provider store={store}>
      
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox
            searchChange={props.searchFieldChng}
          />
           <Loading showLoading={props.showLoading}/>
          <Scroll>
           
            <ErrorBoundary>
              <CardList robots={filterRobots} />
            </ErrorBoundary>
          </Scroll>
        </div>
    
    </Provider>
    
      );


  }


const mapStateToProps = (state) => {
  return {
      robots: state.robots,
      searchField: state.searchField || '',
      showLoading: state.showLoading

  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    searchFieldChng: (txt) => dispatch(searchFieldChange(txt)),
    getRobots: ()=>(getRobots(dispatch))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)

