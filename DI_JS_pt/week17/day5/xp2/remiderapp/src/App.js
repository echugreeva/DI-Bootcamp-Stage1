import logo from './logo.svg';
import './App.css';

import { connect } from 'react-redux'
import { addReminder, delReminder, clear } from './redux/actions'
function App(props) {
  let textInput = ''
  return (
    <div className="App">
      <h1>Reminder App</h1>
      <input type='text'
        onChange={(e) => { textInput = e.target.value }}></input>
      <button onClick={(e) => {
        props.addReminder(textInput)
        document.querySelector('input').value = ''
      }}>Add reminder</button>
      <ul>
        {
          props.itemsList.map((item, i) => {
            return (

              <li key={i}>
                {item}
                <button onClick={(e) => {
                  props.delReminder(i)
                }} >x</button>
              </li>

            )
          })
        }
      </ul>
      <button  onClick={
                  props.clear}>Clear all</button>

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
    addReminder: (txt) => dispatch(addReminder(txt)),
    delReminder: (id) => dispatch(delReminder(id)),
    clear: () => dispatch(clear())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
