const initState = {
    input:'',
    movieList:[],
    movieData:{},
    err:''
}

export const reducer = (state=initState, action={})=>{
    switch (action.type) {
        case 'SEARCH':
            return {...state, input: action.payload}
        case 'GET_SUCCESS':
            return {...state, movieList: action.payload}
        case 'GET_SUCCESS_DATA':
            return {...state, movieData: action.payload}
        case 'GET_FAIL':
            return {...state, err: action.payload}
        
        default:
            return {...state}
    }
}
