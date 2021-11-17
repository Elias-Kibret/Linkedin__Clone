import React from 'react'
import styled from 'styled-components'
function Messaging() {
    return (
        <Container>
        <Main>
        <LeftandMiddle>
        <h1>Message should be private <p></p>😀😀😀 </h1>
        </LeftandMiddle>
        <Right>
        
        </Right>
        </Main>
        </Container>
    )
}
const Container=styled.div`
margin-top:100px;
`
const Main=styled.div`
display: grid;
grid-template-columns: 2.6fr 1fr;
gap:40px;
width:80%;
margin:auto;
`
const LeftandMiddle=styled.div`
background-color:#fff ;
 border-radius:10px;
 box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
 height:400px;
 text-align:center;
h1{
    margin-top:100px;
}

`
const Right=styled.div`
background-color:#fff ;
 border-radius:10px;
 box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
 height:400px;
`
export default Messaging
