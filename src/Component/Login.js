import React from 'react'
import { signInAPI } from '../Action'
import { connect } from 'react-redux'
import styled from 'styled-components'
import LinkedinImage from '../Images/login-logo.svg'
import LoginHero from '../Images/login-hero.svg'
import google from '../Images/google.svg'
import { Redirect } from 'react-router-dom'
function Login(props) {
    return (
        <Container>
            {
                props.user&&<Redirect to="/home"/>
            }
            <Nav>
            <a href="/">
                <img  src={LinkedinImage} alt="linked" />
            </a>
            <div>
                <Join>Join now</Join>
               <Signin>Sign in</Signin>
            </div>
            </Nav>
            <Section>
                <LoginForm>
                <h1>Welcome to your professional Community</h1>  
                <GoogleSignIn onClick={()=>props.signIn()}>
                    <div>
                        <div>
                        <img src={google} alt="google"/> 
                        </div>
                    
                    <span>Sign in with Google </span>
                    </div>
                </GoogleSignIn>
                </LoginForm>
                 <Hero>
                  
                   <img src={LoginHero} alt=""login/>             
                 </Hero>
            </Section>
        </Container>
    )
}
const  Container=styled.div`
padding:0px;
margin-top: 18px;
`
const Nav=styled.div`
max-width:1128px;
display: flex;
align-items: center;
justify-content: space-between;
flex-wrap: nowrap;
position: relative;
margin:0 auto;
&>a
{ 
    width:150px;
    height:34px;
    @media(max-width: 768px)
    {
        padding: 0px 5px ;
    }

}

`
const Join=styled.a`
font-size:18px;
padding: 10px 12px;
text-decoration: none;
background-color: rgba(0,0,0,0);
color:rgba(0,0,0,0.6) ;
margin:0px 16px;
border: transparent;
border-radius: 4px;
&:hover{
    background-color: rgba(0,0,0,0.08);
    color:rgba(0,0,0,0.9);
    padding: 10px 12px;
}
`
const Signin=styled.a`
box-shadow:inset 0 0 0 1px #0a66c2; 
background-color: rgba(0,0,0,0);
color: #0a66c2;
border-radius:24px;
padding:10px 24px;
transition-duration:167ms ;
font-weight: 600;
line-height: 40px;
text-align: center;
cursor: pointer;
&:hover{
  background-color: rgba(112,181,249,0.15);
  color: #0a66c2;
  text-decoration: none;
  box-shadow:inset 0 0 0 2px #0a66c2;
}

`
const Section=styled.div`
display: flex;
align-items: flex-start;
justify-content: center;
position: absolute;

@media  (max-width:768px)
{
    display:block;
    margin:auto;
    min-height: 0px;
}

`
const Hero =styled.div`
width: 1000px;
height: 870px;
position: relative;
top:-50px;
img{
    width: 100%;
    height: 100%;
    @media (max-width:768px)
    {
    
     width:500px;
     height:auto;
     position: relative;
     top:200px;
     img{
         width: 100%;
         height: 100%;;
     }
    }
}

`
const LoginForm= styled.div`
h1{
position: relative;
left:80px;
top:80px;
font-weight: 200;
font-size: 3.6rem;
color: #2977c9;
line-height: 70px;}
@media (max-width:768px)
{
    h1{
        font-size:1.4rem;
        text-align: start;
        position: relative;
        left:40px;
    
    }
}

`
const GoogleSignIn=styled.button`
display: flex;
justify-content: center;
background:transparent;
align-items: center;
position: relative;
left: 60px;
top:200px;
width:450px;
height:60px;
border: none;
padding: 0 32px;
text-align: center;
border-radius: 28px;
background-color: #fff;
cursor: pointer;
box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%), inset 0 0 0 2px rgb(0 0 0 / 0%), inset 0 0 0 1px rgb(0 0 0 / 0%);
div{
    
    display: flex;
    align-items: center;
    justify-content: center;
   div{
       width:30px;
       height: 30px;
       padding: 0 10px;
    img{
        width:100%;
        height:100%;
        object-fit: contain;
        z-index:100;
    }

    
   }
   span{
    font-size:20px;
    font-weight: 500;
    color:rgba(0,0,0,0.7);
    }
}
&:hover{
    border: 1px solid rgba(0,0,0,0.6);
    background-color: rgba(0,0,0,0.08);
    div{
        
            span{
           color: rgba(0,0,0,0.9);
            
        }
    }
}

`
const mapStateToProps=(state)=>
{
    return {
        user:state.userState.user
    }
}
const mapDispatchToProps=(dispatch)=>(
{
signIn: () =>dispatch(signInAPI())
})
export default connect(mapStateToProps,mapDispatchToProps)(Login)
