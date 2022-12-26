export const plus = () => {
    return {
        type:'PLUS'
    }

}

export const minus = () => {
    return {
        type:'MINUS'
    }

}

export const incrIfOdd = ()=> {
    return (dispatch, getState) => {
        if(getState()%2===0){
            dispatch(plus())
        }
    }
}

export const incrDelay = ()=> {
    return dispatch => {
        setTimeout(()=>{
            dispatch(plus())
        }, 1000
        )
    }
}