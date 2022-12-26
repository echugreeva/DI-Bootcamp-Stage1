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

export const getRobots = () => (dispatch, getState)=>{
    console.log(getState())
    fetch(`https://jsonplaceholder.typicode.com/users`)
                    .then(response => response.json())
                    .then((response) => {
                        dispatch({
                            type:'GET',
                            payload:response
                        })
                        
                    })
                    .catch(err => console.error(err))

}

// same
export const getRobots2 = () => async(dispatch)=>{

    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await res.json()
        dispatch({type:'GET',payload:data})
    }

    catch (e){
        console.log(e)
    }

}