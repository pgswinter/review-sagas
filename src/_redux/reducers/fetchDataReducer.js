const initialState = {loading: true};

export const sagaReducer = ( state = initialState, action ={}) => {
    switch (action.type) {
        case `FETCH_REQUESTED   `:
            return {...state, loading: true, payload :[]}
        case `FETCH_SUCCEEDED`:
            return {...state, payload: action.payload, loading: false}
        case `FETCH_FAILED`: let error = "fetch Failed!"
            return {...state, payload: error, loading: false}
        default:
            return state
    }
}