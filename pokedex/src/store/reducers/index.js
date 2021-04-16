import {
    POKE_FETCH_START, 
    POKE_FETCH_SUCCESS
} from '../actions'

const initialState = {
    pokemon: [],
    fetchStart: false,
    fetchSuccess: false,
    fetchFail: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case POKE_FETCH_START:
            return ({
                ...state,
                fetchStart: true
            })

        case POKE_FETCH_SUCCESS:
            return ({
                ...state,
                pokemon: action.payload,
                fetchStart: false,
                fetchSuccess: true,
                fetchFail: false
            })
        
        default:
            return state
    }
}