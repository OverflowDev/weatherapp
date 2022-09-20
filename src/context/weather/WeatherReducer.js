const weatherReducer = (state, action) => {

    switch(action.type) {

        case 'GET_LOCATION':
            return {
                ...state,
                loc: action.payload,
                loading: false,
            }

        case 'SET_LOADING': 
            return {
                ...state,
                loading: true
            }
        
            default:
                return state
    }

}

export default weatherReducer