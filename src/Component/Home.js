import React from 'react'
import styled from 'styled-components'
import Leftside from './Leftside'
import Mainside from './Mainside'
import Rightside from './Rightside'
import {Redirect} from "react-router-dom"
import {connect} from 'react-redux'

function Home(props) {
    
    return (
    <Container >
        {
            !props.user && <Redirect to='/'/>
        }
        <Section>
            <h5><a href="#">Hiring in a hurray? -</a></h5>
            <p>Find talented pros in record time with Upwork and keep business moving. </p>
        </Section>

        <Layout>
            <Leftside/>
            <Mainside/>
            <Rightside/>
        </Layout>
    </Container>
    )
}

const Container =styled.div`
position: relative;
top:45px;

`
const Section =styled.div`
display:  flex;
justify-content: center;
align-items: center;
text-decoration:underline;
font-weight: 700;
font-size:17px;
min-height: 50px;
a
{ font-size:14px;
    
    color:#0A66C2;
}
p{
    font-size: 14px;
    color:#434649;
}
@media(max-width:768px)
{
    flex-direction: column;
    padding:0 5px;
}

`
const Layout=styled.div`
display:grid ;
width:90%;
margin:auto;
grid-template-areas:"leftside main rightside" ;
grid-template-columns: minmax(0,5fr) minmax(0,12fr) minmax(300px ,8fr);
column-gap:25px;
grid-template-rows: auto;
@media(max-width:768px)
{
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    text-align: left;
    margin:25px 0px;

}
`
const mapStateToProps=(state)=>
{
    return{
        user:state.userState.user
    }
}
export default connect(mapStateToProps)(Home)