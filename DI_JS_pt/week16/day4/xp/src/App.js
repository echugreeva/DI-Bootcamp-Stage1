
import './App.css';
import {connect} from 'react-redux'
import { submit } from './redux/actions'
import Transaction from './components/transaction'

function App (props) {
  console.log(props.list);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input style={{display:'block'}}type='text' id='one' placeholder='blabla'></input>
          <input style={{display:'block'}}type='text' id='two' placeholder='blabla'></input>
          <input style={{display:'block'}}type='text' id='three' placeholder='blabla'></input>
          <input style={{display:'block'}}type='text' id='four' placeholder='blabla'></input>
          <button onClick={()=>{props.submit(
            {
              one:document.querySelector('#one').value,
              two:document.querySelector('#two').value, 
              three:document.querySelector('#three').value,
              four:document.querySelector('#four').value
            })
            console.log(props.list);
            document.querySelectorAll('input').forEach(element => {
              element.value =''
            });
            }}>
                submit
          </button>
        </div>
        <div>
          {
             props.list.map((item, i) => {
              return (
                  <div key = {i}>
                      <Transaction data={item} id={i}/>
                  </div>
              )
          })
          }
        </div>
      </header>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
      transaction: state.transaction,
      list: state.transactionList
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
      submit: (obj) => dispatch(submit(obj))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
