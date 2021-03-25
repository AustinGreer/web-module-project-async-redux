import React from 'react'
import styled from 'styled-components'
import Pokemon from './components/Pokemon'

function App() {
  return (
    <StyledDiv>
      <h1>Pokemon Generation 1!</h1>
      <Pokemon></Pokemon>
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  color: yellow;
  width: 80%;
  margin: 0 auto;

  h1 {
    font-size: 50px;
  }
`

export default App;
