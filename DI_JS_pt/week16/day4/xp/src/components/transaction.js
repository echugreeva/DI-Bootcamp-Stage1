import {connect} from 'react-redux'
import {edit, del} from '../redux/actions'

const Transaction = (props) => {
    console.log(props.id, props.data.one)
    return (
        <div >
            <p style={{display:'inline-block', padding: '2px', border: '1px white solid'}}>{props.data.one}</p>
            <p style={{display:'inline-block', padding: '2px', border: '1px white solid'}}>{props.data.two}</p>
            <p style={{display:'inline-block', padding: '2px', border: '1px white solid'}}>{props.data.three}</p>
            <p style={{display:'inline-block', padding: '2px', border: '1px white solid'}}>{props.data.four}</p>
            <button style={{display:'inline-block'}}
            onClick={
                ()=>{props.edit(props.id, {
                    one:props.data.one,
                    two:props.data.two,
                    three:props.data.three,
                    four:props.data.four
                })}}
            
            >edit</button>
            <button style={{display:'inline-block'}} onClick={
                ()=>{props.del(props.id)}
            }>delete</button>
        </div>
    )

}

const mapStateToProps = (state) => {
    return {
        transaction: state.transaction,
        list: state.transactionList
    }
  }
  
  const mapDispatchToProps = (dispatch)=> {
    return {
        del: (id) => dispatch(del(id)),
        edit: (id, obj) => dispatch(edit(id, obj))
    }
  }
  
export default connect(mapStateToProps, mapDispatchToProps)(Transaction)

