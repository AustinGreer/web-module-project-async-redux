import React from 'react'
import styled from 'styled-components'

function Pokemon(props) {
    return (
        <StyledPokemon>
            <h3>{props.pokemon.name}</h3>
        </StyledPokemon>
    )
}

const StyledPokemon = styled.div`
    border: 2px solid white;
    width: 20%;
    border-radius: 15px;
    margin-top: 5%;
    display: flex;
    justify-content: center;
    background-color: white;
`

export default Pokemon;