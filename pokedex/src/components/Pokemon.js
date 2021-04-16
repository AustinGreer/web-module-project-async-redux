import axios from 'axios'
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

function Pokemon(props) {
    const [pokeman, setPokeMan] = useState({})
    
    useEffect (() => {
        axios.get(`${props.pokemon.url}`)
        .then (res => {
            setPokeMan(res.data)
        })
    }, [])


    return (
        <StyledPokemon>
            <img src={pokeman.sprites.front_default}></img>
            <div>
                <p>Id: {pokeman.id}</p>
                <p>Name: {pokeman.name}</p>
            </div>
        </StyledPokemon>
    )
}

const StyledPokemon = styled.div`
    border: 2px solid white;
    width: 20%;
    border-radius: 15px;
    margin-top: 5%;
    display: flex;
    justify-content: space-evenly;
    background-color: white;
`

export default Pokemon;