
import React from 'react'
import styled from 'styled-components'
import more from '../Images/more.svg'
import pp10 from '../Images/profile/pp10.jpg'
import pp11 from '../Images/profile/pp11.jpg'
import pp12 from '../Images/profile/pp12.jpg'
import pp13 from '../Images/profile/pp13.jpg'
import pp14 from '../Images/profile/pp14.jpg'
import pp15 from '../Images/profile/pp15.jpg'
import pp16 from '../Images/profile/pp16.jpg'
import key from '../Images/key.png'
import ll1 from '../Images/Logo/ll1.jpg'

import ll3 from '../Images/Logo/ll3.jpg'

import ll5 from '../Images/Logo/ll5.jpg'
import ll6 from '../Images/Logo/ll6.jpg'
import ll7 from '../Images/Logo/ll7.jpg'
function Notifications() {

    const data=[
        {   image:ll6,
            title:'Udemy® Course is a week away. tilahun ali and 18145 others will be attending.',
            time:'4h',
            type:'View all post'
        },
        
        {   image:pp10,
            title:'Congratualte Elias Kibret for strating a new positon as Legal Intern at EPCDS software ',
            time:'4h',
            type:'Say Congrats'
        },
        {   image:ll3,
            title:'CPBS Technologies PLC ,is Looking for Frontedn Developer.see this and 3 other jobs recommendations',
            time:'4h',
            type:'View jobs'
        },
        {   image:pp11,
            title:' Wish Ahmed Bashu a Happy birthday (yesterday)',
            time:'1d',
            type:'Say Happy Birthday'
        },
        {   image:pp12,
            title:'People are reacting to vayans post ',
            time:'7h',
            type:'View Post'
        },
        {   image:pp13,
            title:'New from krishna Gospal in The Corporate Karma Guide :How overcome the "No one tells me anything " syndrome?',
            time:'2d',
            type:'Check out '
        },
        
        {   image:pp15,
            title:'HackerRank was live: Join us for a fun conversation as we chat with Leaders from our Engineering, Product, Customer Success, People, and Marketing Teams talk about what we ',
            time:'2d',
            type:'Read More'
        },
        {   image:pp16,
            title:'one of your connection is shared a post',
            time:'5d',
            type:'view post'
        },
        {   image:ll1,
            title:'PMI Agile Certified Practitioner (PMI-ACP)® Course is coming up on WednesdayPMI Agile Certified Practitioner (PMI-ACP)® Course is coming up on Wednesday',
            time:'9h',
            type:'Share Event'
        },
        
        {   image:ll3,
            title:'CPBS Technologies PLC ,is Looking for Frontedn Developer.see this and 3 other jobs recommendations',
            time:'4h',
            type:'View jobs'
        },
        
        {   image:ll5,
            title:'Institute i4 - IIBA Certification Programs shared a post in PMI Agile Certified Practitioner (PMI-ACP)® Course:- IIBA Certification Programs shared a post in PMI Agile Certified Practitioner (PMI-ACP)® Course:',
            time:'23h',
            type:'view '
        },
        {   image:ll6,
            title:'Udemy® Course is a week away. tilahun ali and 18145 others will be attending.',
            time:'4h',
            type:'View all post'
        },
        {   image:pp14,
            title:'Ermias Tekile viewed your Profile',
            time:'1h',
            type:'See all views'
        },
        {   image:ll7,
            title:'  OUEDRAOGO Relwindé Guillaume Victorien #learning #developer #coding ',
            time:'2h',
            type:'View Post'
        }

    ]
    return (
        <Container>
           <Main>
               <Left>
                   <div>

               <h4>Notifications</h4>
               <p>You’re all caught up! Check back later for new notifications</p>
                   </div>
                   <p>Improve your notifications</p>
                   <span>View Settings</span>
               </Left>
               <Middle>
                   {
                       data.map((data,index)=>(
                        <NotMain>

                        <NotificatinBar>

                    <div>
                        <Image>
                            <img src={data.image} alt="elias"/>
                        </Image>
                        <Description>
                            <Title>

                            <p>{data.title}</p>
                            </Title>
                     
                               <Button>
                                  <button>
                                  {data.type}
                                  </button>
                                  
                                
                     
                           </Button>
                        

                   
                        </Description>
               
                    </div>
                    <Actions>
                        <span>{data.time}</span>
                        <div>
                            <img src={more} alt="elias"/>
                        </div>
                        </Actions>
                        </NotificatinBar>
                        </NotMain>
                       )

                       )
                   }
                   

               </Middle>
               <Right>
                   <RightMain>

                   <Ad>
                       <span>Ad</span>
                       <img src={more} alt="more"/>
                   </Ad>
                  <Header>
                      <span>Elias Become an ROI hero with Linkdin Ads</span>
                  </Header>
                  <Info>
                      <PP>
                          <img src={pp16} alt="pp16"/>

                      </PP>
                      <PP2>
                          <img src={key} alt="key"/>
                      </PP2>
                      
                  </Info>
                  <p>Get started in minutes with $%0 in ad Credits</p>
                  <Button>
                      <button className="Check">
                      Request $50 credit
                      </button>
                     
                  </Button>
                   </RightMain>

               </Right>
           </Main>
        </Container>

    )
}
const Container=styled.div`
margin-top:100px;
`
const Main=styled.div`
display:grid;
width:90%;
margin:auto;
gap:40px;
grid-template-columns: .9fr 2.2fr 1.2fr;
`
const Left=styled.div`
display: flex;
flex-direction: column;
div{
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    h4{
        margin-bottom: 10px;
        font-weight: 550;
        font-size: 17px;
        color:rgba(0,0,0,0.8)
    }
    p{
        color:rgba(0,0,0,0.6);
        font-size:14px;
    }
    padding: 20px;
    border-bottom:1px solid rgba(0,0,0,0.2);
margin-bottom: 10px;;
    background-color:#fff ;
}
p{
    font-size: 14px;
    color:rgba(0,0,0,0.8)
}
span{
    color:#0a66c2;
    font-weight: 650;
}
text-align:center;
border-radius:10px;
background-color: #f9fafb;
 
 box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
 height:200px;

`
const Middle=styled.div`
background-color:#fff ;
 border-radius:10px;
 box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);

`
const Right=styled.div`
background-color:#fff ;
 border-radius:10px;
 box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
 height:260px;
`
const Image=styled.div`
height: 50px;
width: 50px;

img{
    width:100%;
    height: 100%;
    object-fit: cover;
    border-radius:50%50%;
    
}
`
const Description=styled.div`
flex:1;
margin:0px 15px;
display: flex;
flex-direction: column;

`
const Title=styled.div`
p{
    font-size:14px;
    color:rgba(0,0,0,0.7);
}
`
const Button=styled.div`
margin-top:20px;
width:100%;

display: flex;
button{

    border: none;
    width:180px;
     background: transparent;
     font-size: 14px;
     font-weight: 550;
     box-shadow: inset 0 0 0 1px #0a66c2;
     border-radius: 24px;
     display:flex;
     align-self: center;
     padding: 8px 0px;
     justify-content: center;
     background-color: #00000000;
     color:#0a66c2;
     text-align:center;
     &:hover{
         background-color:rgba(112,181,249,0.2) ;
         color:#0a66c2;
         box-shadow: inset 0 0 0 2px #0a66c2;
     
     
}
}
.Check{
    margin:auto;
}
`
const Actions=styled.div`
display: flex;
flex-direction: column;
font-size: 13px;
color:rgba(0,0,0,0.7);

`
const NotificatinBar=styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
div{
    display: flex;
    

}
`
const NotMain=styled.div`
border-bottom: 1px solid rgba(0,0,0,.2);
`
const Ad=styled.div`
display: flex;
align-items: center;
justify-content: flex-end;
img{
    width: 20px;
    height: 20px;
    padding-left:5px;
}
span{
    font-size:12px;
}
`
const Header=styled.div`
text-align:center;
span{
    font-size: 11px;
    color:rgba(0,0,0,0.7)
}
`
const Info=styled.div`
display: flex;
justify-content: center;
margin:10px auto;
`
const PP=styled.div`
width:70px;
height:70px;
padding:0px 10px;
img{
    width:100%;
    height:100%;
    object-fit: cover;
    border-radius: 50%;
}

`
const PP2=styled.div`
width:70px;
height:70px;
padding:0px 10px;
img{
    width:100%;
    height:100%;
    object-fit: contain;

}
`
const RightMain=styled.div`
padding:10px;
p{
    text-align: center;
    color:rgba(0,0,0,0.5);
}
`
export default Notifications
