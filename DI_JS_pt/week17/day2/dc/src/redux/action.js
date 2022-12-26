export const searchFieldChange = (txt) => {
    console.log(txt)
    return {
        type: 'SEARCH',
        payload: txt
    }
}

const getRobotsLoading = () => {
    return {
        type:'LOAD',
        payload:1
    }
}

const getRobotsSuccess = (arr)=> {
    return {
        type: "GET_SUCCESS",
        payload: {
            robots: arr,
            showLoading: 0
        }

    }
}

const getRobotsFail = (err)=> {
    return {
        type: "GET_FAIL",
        payload: {
            err: err,
            showLoading: 0
        }

    }
}

export const getRobots = (dispatch) => {
    console.log(`clicked getRobots`);
    dispatch(getRobotsLoading());
    setTimeout(()=>{
        fetch(
            "http://jsonplaceholder.typicode.com/users"
          )
            .then((res) => res.json())
            .then((users) => {
                console.log(users);
                dispatch(getRobotsSuccess(users, 0))
            })
            .catch((err) => {
                dispatch(getRobotsFail(err.message));
            })
    }, 1000)
    
}