import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import {fetchPokemon} from '../store'
import Pokemon from './Pokemon';
import styled from 'styled-components';

function PokeList(props) {
    useEffect(() => {
        props.fetchPokemon()
    }, [])
    
    return (
        <StyledPokeContainer>
            {props.fetchStart ? <h2>Loading Pokedex...</h2> : null}
            {props.fetchFail ? 
                <h2>Uh Oh... There was an error fetching your Pokemon.</h2> : null}
            {props.pokemon.map(poke => {
                return <Pokemon key={poke.name} pokemon={poke} />
                }
            )
            }
        </StyledPokeContainer>
    )
}

const StyledPokeContainer = styled.div`
    width: 95%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        fetchStart: state.fetchStart,
        fetchSuccess: state.fetchSuccess,
        fetchFail: state.fetchFail
    }
}

export default connect(mapStateToProps, {fetchPokemon})(PokeList)