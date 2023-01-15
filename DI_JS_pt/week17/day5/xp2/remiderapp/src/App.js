import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import { connect } from 'react-redux'
import { addReminder, delReminder, clear } from './redux/actions'
import moment from 'moment';

// const getFromNowDate = moment(new Date(dueDate)).fromNow();


function App(props) {
  //let textInput = '';
   const [dueDate, setDate] = useState('')
   const [textInput, setInput] = useState('')
  // let dueDate = '';
  

  return (
    <div className="App">
      <h1>Reminder App</h1>
      <input type='text'
        onChange={(e) => { setInput(e.target.value) }}></input>
      <input type='datetime-local'
      onChange={(e) => {setDate(e.target.value) ;
      console.log(e.target.value)}}
      ></input>
      <button onClick={(e) => {
        console.log(textInput, dueDate)
        props.addReminder(textInput, dueDate)
        document.querySelector('input').value = ''
      }}>Add reminder</button>
      <ul>
        {
          props.itemsList.map((item, i) => {
            return (

              <li key={i}>
                {item[0]}
                <p>due date:
                {moment(new Date(item[1])).fromNow()} </p>
                <button onClick={(e) => {
                  props.delReminder(i)
                }} >x</button>
              </li>

            )
          })
        }
      </ul>
      <button  onClick={(e)=>{props.clear()}
                  }>Clear all</button>

    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    itemsList: state.itemsList,
    textInput: state.textInput || '',


  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addReminder: (txt, dueDate) => dispatch(addReminder(txt,dueDate)),
    delReminder: (id) => dispatch(delReminder(id)),
    clear: () => dispatch(clear())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
