export const searchFieldChange = (txt) => {
    console.log(txt)
    return {
        type: 'SEARCH',
        payload: txt
    }
}

const getMoviesSent = () => {
    console.log('searching')
    return {
        type:'LOAD'
    }
}

const getMoviesSuccess = (arr)=> {
    return {
        type: "GET_SUCCESS",
        payload: arr

    }
}

const getMoviesFail = (err)=> {
    return {
        type: "GET_FAIL",
        payload: err

    }
}

export const getMovies = (dispatch, txt) => {
    console.log(`clicked search`);
    dispatch(getMoviesSent());
    
    fetch(
            `https://www.omdbapi.com/?apikey=addfb034&s=${txt}`
          )
            .then((res) => res.json())
            .then((movies) => {
                console.log(movies);
                dispatch(getMoviesSuccess(movies.Search))
                console.log(movies.Search);
            })
            .catch((err) => {
                dispatch(getMoviesFail(err.message));
            })
    
    
}



const getMovieDataSent = () => {
    console.log('clicked more data')
    return {
        type:'LOAD_DATA'
    }
}

const getMovieDataSuccess = (obj)=> {
    return {
        type: "GET_SUCCESS_DATA",
        payload: obj

    }
}

const getMovieDataFail = (err)=> {
    return {
        type: "GET_FAIL",
        payload: err

    }
}

export const getMovieData = (dispatch, id) => {
    // console.log(`clicked more data`);
    dispatch(getMovieDataSent());
    
    fetch(
            `https://www.omdbapi.com/?apikey=addfb034&i=${id}`
          )
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                dispatch(getMovieDataSuccess(data))
            })
            .catch((err) => {
                dispatch(getMovieDataFail(err.message));
            })
    
    
}
