import React from 'react'
import styled from 'styled-components'
import photo from '../Images/photo.svg'
import card from '../Images/Cover/coverbanner4.jpg'
import widget from '../Images/widget-icon.svg'
import item from '../Images/item-icon.svg'
import plus from '../Images/plus-icon.svg'
import {connect} from "react-redux"
function Leftside(props) {
    return (
        <Container>
          <ArtCard>
              <UserInfo>
                  <div>
                      
                    <CardBackground>
                       <img src={card} alt="card"/>
                    </CardBackground>
                    <Photo>
                    {
                        props.user && props.user.photoURL?( <img src={props.user.photoURL}/>):(

                            <img src={photo} alt="photo"/>
                        )
                            
                    }
                    
                    </Photo>
                  </div>
                <Info>

                    <a href="">
                    React | Javascript |Css | HTML
                    </a>
                </Info>

                    
              </UserInfo>
              <Widget>

                  <a>

                      <span className="connect">Connect</span>
                      <span className="grow">Grow your network</span>
                      </a>
                  <img src={widget} alt="widgett"/>
                  
              </Widget>
              <Items>
                 <img src={item} alt="itemm"/> 
                  <span>My Items</span>
              </Items>
          </ArtCard>
          <CommunityCard>
              <a href="">
                  <span>
                      Groups  
                  </span>
              </a>
              <a href="">
                  <span>
                       Events
                      <img src={plus} alt="pluss"/>
                  </span>
              </a>
              <a href="">
                  <span>
                      Follow Hashtags
                  </span>
              </a>
              <a href="">
                  <span>
                      Discover more
                  </span>
              </a>
          </CommunityCard>
        </Container>
    )
}


const Container=styled.div`
grid-area: leftside;

`
const ArtCard=styled.div`
text-align:center;
overflow:hidden;
margin-bottom: 8px;
background-color: #fff;
border-radius: 5px;
transition: box-shadow 83ms;

border:none;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%)
`
const UserInfo=styled.div`
border-bottom: 1px solid rgba(0,0,0,0.15);
padding-bottom: 13px;
display:flex;
flex-direction: column;


`
const Info=styled.div`
a{
    font-size:13px;

}
`
const CardBackground=styled.div`

  height:80px;

  img{
      width:100%;
      height:100%;
      object-fit:cover;
      

      
    
     
  }
  @media(max-width:678px)
  {
      width:678px;
      height: 60px;
      img
      {
          width: 100%;
          height:100%;
          z-index:-10;
      }

  }
`
const Photo=styled.div`
width:70px;
height:70px;
margin:-30px auto 10px;

img{
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:50%;

    border:3px solid white;
}


`
const Link=styled.div`
font-size:16px;
line-height: 1.5;
color:rgba(0 ,0, 0, 0.9);
font-weight: 600;;
`
const Widget=styled.div`
display: flex;
padding: 2px 12px;
a
{
    display: flex;
 flex-direction: column;
 text-align: left;
 flex:.95;
 margin-top:8px;
 span{
    display: flex;
     flex-direction: column;
     text-align: left;
     margin-top:3px;
     &:first-child{
        color:rgba(0,0,0,0.5);
         font-weight: 700;
         font-size: 13px;
     }
     &:nth-child(2)
     {
        font-weight: 650;
         font-size: 13px;
     }
 }
 
}
flex-direction:row;
img{
    align-self: center;

}
:hover
 {
     background-color:rgba(0,0,0,0.08);
 }
 
`
const Items=styled.div`
margin-top: 20px;
display: flex;
justify-items: flex-start;
padding: 12px;
span{
    padding-left: 5px;
    font-size: 13px;
}
img{
    opacity: 0.7;

}
&:hover
{
    background-color: rgba(0,0,0,0.08);
}
`
const CommunityCard=styled(ArtCard)`
padding:8px 0 0;
text-align:left;
display:flex;
flex-direction: column;
a{
    color:black;
    padding:4px 12px;
    font-size:12px;
   &:hover{
       color:#0a66c2;
       cursor: pointer;
      
   }
   span{
       display: flex;
       align-items:center;
       justify-content: space-between;
   }
   &:last-child{
       color:rgba(0,0,0,0.6);
       text-decoration:none;
       border-top:1px solid #d6cec2;
       padding:12px;
       &:hover{
           background-color: rgba(0,0,0,0.08);
       }
   }
}
`
const mapStateToProps=(state)=>{
    return{
        user:state.userState.user
    }
}
export default connect(mapStateToProps)(Leftside)