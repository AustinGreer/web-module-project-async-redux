import React from 'react'
import { connect } from 'react-redux';
import Pokemon from './Pokemon';

function PokeList(props) {
    return (
        <div>
            {props.pokemon.map(poke => {
                return <Pokemon key={poke.name} pokemon={poke} />
                }
            )
            }
        </div>
    )
}

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon
    }
}

export default connect(mapStateToProps, {})(PokeList)
