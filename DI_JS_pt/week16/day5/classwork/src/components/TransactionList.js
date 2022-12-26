import TransactionForm from './TransactionForm'
import {connect} from 'react-redux'
import { update_ind, delete_trx } from '../redux/actions';
const TransactionList =(props)=> {
    return (
        <>
        <TransactionForm/>
        <h1>Transaction List:</h1>
        <table style={{border: '1px solid black', margin: '0 auto'}}>
            <tbody>
            {
                props.list.map((item, ind)=> {
                    return(
                    <tr key = {ind}>
                        <td>{item.accountNum}</td>
                        <td>{item.fsc}</td>
                        <td>{item.name}</td>
                        <td>{item.amount}</td>
                        <td><button onClick={()=>props.handleUpdInd(ind)}>Edit</button></td>
                        <td><button onClick={()=>props.del_trx(ind)}>Delete</button></td>
                    </tr>
                    )
                    
                })
            }
            </tbody>    
        </table>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        handleUpdInd: (ind)=> dispatch(update_ind(ind)),
        del_trx: (ind)=> dispatch(delete_trx(ind)),
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(TransactionList)