import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPokemon } from '../actions/actions'
import styled from 'styled-components'

const Pokemon = (props) => {
    const { fetchPokemon } = props;
    
    const catchPokemon = (event) => {
        event.preventDefault();
        fetchPokemon()
    }
    
    return (
        <div>
            <button onClick={catchPokemon}>Catch All Gen 1 Pokemon Here!</button>
            {props.isLoading ? (
                <h3>Loading...</h3>
            ) : null}

            {props.error ? (
                <h3 style={{color: 'red', fontSize: '30px'}}>{props.error}</h3>
            ): null}

            {props.pokemon.map(poke => {
                return (
                    <StyledContainer key={poke.url}>
                        <h3>{poke.name}</h3>
                    </StyledContainer>
                )
            })}
            
        </div>
    )
}

const StyledContainer = styled.div`
    border: 1px solid white;
    width: 25%;
    display: flex;
`

const mapStateToProps = state => {
    return ({
        pokemon: state.pokemon,
        isLoading: state.isLoading,
        error: state.error
    })
}

export default connect(mapStateToProps, {fetchPokemon})(Pokemon);