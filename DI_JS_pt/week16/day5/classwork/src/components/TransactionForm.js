import {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {insertTrx, update_trx} from '../redux/actions';


const TransactionForm =(props)=> {
    const [transaction, setTransaction] = useState({
        accountNum:'',
        fsc:'',
        name:'',
        amount:''
    })

    useEffect (()=> {
        if(props.curInd !== -1){
            const trx = props.list[props.curInd];
            setTransaction({
                
                    accountNum:trx.accountNum||'',
                    fsc:trx.fsc||'',
                    name:trx.name||'',
                    amount:trx.amount||''
                }
            )
        }
    }, [props.curInd])



    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.curInd === -1) {
            props.handleInsert(transaction)
        } else {
            props.handleUpdate(transaction)
        }
        
        setTransaction({
            accountNum:'',
            fsc:'',
            name:'',
            amount:''
        })
        
    }
    const handleChange = (e) => {
        setTransaction({...transaction, [e.target.name]:e.target.value})
    }
    
    return (
        <>
        <h1>Transaction Form</h1>
        <form onSubmit={handleSubmit}>
            <input type='text'
                   name='accountNum'
                    onChange={handleChange}
                    placeholder = 'accountNum'
                    value={transaction.accountNum}
            /><br/>
            <input type='text'
                   name='fsc'
                    onChange={handleChange}
                    placeholder = 'fsc'
                    value={transaction.fsc}
            /><br/>
            <input type='text'
                   name='name'
                    onChange={handleChange}
                    placeholder = 'name'
                    value={transaction.name}
            /><br/>
            <input type='text'
                   name='amount'
                    onChange={handleChange}
                    placeholder = 'amount'
                    value={transaction.amount}
                    
            /><br/>
            <input type='submit' value={props.curInd === -1 ? 'Submit': 'Update'}/>
        </form>
        </>
    )
}

const mapStateToProps = (state)=> {

    return {
        curInd: state.curIndex,
        list: state.list
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        handleInsert: (trx) => dispatch(insertTrx(trx)),
        handleUpdate: (trx) => dispatch(update_trx(trx))
    }
}

export default connect (mapStateToProps, mapDispatchToProps)(TransactionForm)