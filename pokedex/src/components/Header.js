import React from 'react'
import styled from 'styled-components';

function Header() {
    return (
        <StyledHeader>
            <h1>Pokedex</h1>
        </StyledHeader>
    )
}

const StyledHeader = styled.div`
    background: blue;
    color: yellow;
    display: flex;
    justify-content: center;

    h1{
        font-size: 5rem
    }
`

export default Header