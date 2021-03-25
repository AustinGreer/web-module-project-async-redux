import { FETCH_POKEMON_START, FETCH_POKEMON_SUCCESS, FETCH_POKEMON_FAILURE} from '../actions/actions'

const initialState = {
    pokemon: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_POKEMON_START:
            return {
                ...state,
                isLoading: true
            };

        case FETCH_POKEMON_SUCCESS:
            return {
                ...state,
                pokemon: action.payload,
                isLoading: false,
                error: ''
            }

        case FETCH_POKEMON_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        
        default:
            return state
    }
}