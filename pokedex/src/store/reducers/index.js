const initialState = {
    pokemon: [
        {
            name: 'bulbasaur'
        },
        {
            name: 'charmander'
        },
        {
            name: 'squirtle'
        }
    ],
    fetchStart: false,
    fetchSuccess: false,
    fetchFail: false
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}