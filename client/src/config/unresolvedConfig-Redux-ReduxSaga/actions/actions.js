// Our actions from redux to request data throughout the app
// key: GET_DATA_REQUEST -> value: describes the action
export const Types = {
    GET_DATA_REQUEST: 'get_data_request',
}

// function that returns an object literal
export const getDataRequest = () => ({
    type: Types.GET_DATA_REQUEST
})