import axios from 'axios';

export const POKE_FETCH_START = 'POKE_FETCH_START';
export const POKE_FETCH_SUCCESS = 'POKE_FETCH_SUCCESS'

export const fetchPokemon = () => {
    return (dispatch) => {
        dispatch({type: POKE_FETCH_START})
        return (
            axios
                .get('https://pokeapi.co/api/v2/pokemon?limit=151')
                .then(res => {
                    console.log(res) // res.data.results
                    dispatch({type: POKE_FETCH_SUCCESS, payload: res.data.results})
                })
                .catch(err => {
                    console.log(err)
                })
        )
    }
}