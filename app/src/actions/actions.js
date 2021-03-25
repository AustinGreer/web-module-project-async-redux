import axios from 'axios'

export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";
export const FETCH_POKEMON_FAILURE = "FETCH_POKEMON_FAILURE";

export const fetchPokemon = () => {
    return (dispatch) => {
        // loading state begins here
        dispatch({type: FETCH_POKEMON_START});

        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(res => {
            // happy path: sending data to reducer
            dispatch({type: FETCH_POKEMON_SUCCESS, payload: res.data.results})
        })
        .catch(err => {
            // sad path: sending error message to reducer
            dispatch({type: FETCH_POKEMON_FAILURE, payload: err.message})
        })
    }
}