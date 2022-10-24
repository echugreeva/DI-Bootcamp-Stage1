export const searchFieldChange = (txt) => {
    console.log(txt)
    return {
        type: 'SEARCH',
        payload: txt
    }
}