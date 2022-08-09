export const updateState = (data) => {
    return {
        type: 'UPDATE_STATE',
        payload: data
    }
}


export const updateTime = (data) => {
    return {
        type: 'UPDATE_TIME',
        payload: data
    }
}
