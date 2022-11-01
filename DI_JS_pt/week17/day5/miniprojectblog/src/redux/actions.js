export const deletePost = (id) => {
    return {
        type: 'DELETE',
        payload: id
    }
}