const initialState = {
    spells: [{
        "index": "acid-arrow",
        "name": "Acid Arrow",
        "url": "/api/spells/acid-arrow"
    },
    {
        "index": "acid-splash",
        "name": "Acid Splash",
        "url": "/api/spells/acid-splash"
    },]
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state;
    }
}