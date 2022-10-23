import {connect} from 'react-redux'

const Form = (props) => {
    return(
        <div>
          <input type='text' id='one' placeholder='blabla'></input>
          <input type='text' id='two' placeholder='blabla'></input>
          <input type='text' id='three' placeholder='blabla'></input>
          <input type='text' id='four' placeholder='blabla'></input>
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
    )
    
}

const mapStateToProps = (state) => {
    return {
        transaction: state.transaction,
        list: state.transactionList,
        update: state.update
    }
  }
  
  const mapDispatchToProps = (dispatch)=> {
    return {
        submit: (obj) => dispatch(submit(obj))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Form)
