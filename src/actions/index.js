export const updateState = (data) => dispatch => {
    dispatch({
        type: 'UPDATE_STATE',
        payload: data
    })
}
