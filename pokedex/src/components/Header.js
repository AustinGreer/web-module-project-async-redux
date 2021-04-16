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
    padding: 4%;
    background: blue;
    color: yellow;
    display: flex;
    justify-content: center;

    h1{
        
    }
`

export default Header