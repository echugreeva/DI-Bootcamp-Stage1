export const DETAIL = 'DETAIL';

export const showDetail = (obj) => {
    console.log(obj)
    return {
        type: DETAIL,
        payload: obj
    }
}