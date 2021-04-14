import React from 'react'
import { connect } from 'react-redux'
;
function SpellList (props) {
    return (
        <div>
            {props.spells.map(spell => (
                <p key={spell.index}>{spell.name}</p>
            ))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        spells: state.spells
    }
}

export default connect(mapStateToProps, {})(SpellList)