import React,{useState} from 'react'
import styled from 'styled-components'
import connections from '../Images/connections.svg'
import contacts from '../Images/contacts.svg'
import people_i_follow from '../Images/people_I_Follow.svg'
import groups from '../Images/groups.svg'
import events from '../Images/events.svg'
import pages from '../Images/pages.svg'
import newsletters from '../Images/newsLetters.svg'
import hashtags from '../Images/hashtags.svg'
import up from '../Images/up.svg'
import down from '../Images/down.svg'


import mutual from '../Images/mutual.svg'
import cover1 from '../Images/Cover/coverbanner1.jpg'
import cover2 from '../Images/Cover/coverbanner2.jpg'
import cover3 from '../Images/Cover/coverbanner3.jpg'
import cover4 from '../Images/Cover/coverbanner4.jpg'
import cover5 from '../Images/Cover/coverbanner5.jpg'
import cover6 from '../Images/Cover/coverbanner6.jpg'
import cover7 from '../Images/Cover/coverbanner7.jpg'
import cover8 from '../Images/Cover/coverbanner8.jpg'
import cover9 from '../Images/Cover/coverbanner9.jpg'
import cover10 from '../Images/Cover/coverbanner10.jpg'
import cover11 from '../Images/Cover/coverbanner11.jpg'
import cover12 from '../Images/Cover/coverbanner12.jpg'
import cover13 from '../Images/Cover/coverbanner13.jpg'
import cover14 from '../Images/Cover/coverbanner14.jpg'
import pp1 from '../Images/profile/pp1.jpg'
import pp2 from '../Images/profile/pp2.jpg'
import pp3 from '../Images/profile/pp3.jpg'
import pp4 from '../Images/profile/pp4.jpg'
import pp5 from '../Images/profile/pp5.jpg'
import pp6 from '../Images/profile/pp6.jpg'
import pp7 from '../Images/profile/pp7.jpg'
import pp8 from '../Images/profile/pp8.jpg'
import ppp1 from '../Images/pp/pp1.jpg'
import ppp2 from '../Images/pp/pp2.jpg'
import ppp3 from '../Images/pp/pp3.jpg'
import ppp4 from '../Images/pp/pp4.png'
import ppp5 from '../Images/pp/pp5.jpg'
import ppp6 from '../Images/pp/pp6.png'
import pp9 from '../Images/profile/pp10.jpg'

import pp11 from '../Images/profile/pp11.jpg'
import pp12 from '../Images/profile/pp12.jpg'
import pp13 from '../Images/profile/pp13.jpg'

import pp15 from '../Images/profile/pp15.jpg'




import pp20 from '../Images/profile/pp20.jpg'
function MyNetwork() {
    const Icons=[connections,contacts,people_i_follow,groups, events,pages,newsletters,hashtags]
    const Lists=['Connections','Contacts','People I Follow','Groups','Events','Pages','Newsletters','Hashtags']
    const FigureData=['509','219','76','18','7','135','3','6']
    const [numberOfList,setNumberOfList]=useState(Icons.length)
    const [showMore,setShowMore]=useState(true)
    const [showMoreOfConnection,setshowMoreOfConnection]=useState(false)
    const [numberOfConnectionToShow,setnumberOfConnectionToShow]=useState(1)
    const data=[
          {
              img:cover1,
              img2:ppp1,
              title:'React Advance Conference 2021',
              date:'Fri, Oct 22 - Tue, Oct 26',
              attendees:'435 attendees'
          },{
            img:cover2,
            img2:ppp2,
              title:'Team Building & Diversity',
              date:'Fri, Aug 27, 7:00 PM',
              attendees:'2,418 attendees'
          },
          {
            img:cover3,
            img2:ppp3,
              title:'A Deeper Look Into the Treatment',
              date:'Thu, Sep 2, 7:00 PM',
              attendees:'16545 attendees'

          },
          {
            img:cover4,
            img2:ppp4,
              title:'Advanced Microsoft Teams Webiner',
              date:'Sat, Aug 14, 5:00 PM',
              attendees:'165 attendees'
          },
          {
            img:cover5,
            img2:ppp5,
              title:'Making LinkedIn Your Main',
              date:'Wed, Aug 11, 6:00 PM',
              attendees:'7,849 attendees'  
          },{
            img:cover6,
            img2:ppp6,
              title:'Azure Summit 2021',
              date:'Mon, Sep 13 - Fri, Sep 24',
              attendees:'849 attendees' 
          }

    ]

const UserData=[
    {
        cover_Image:cover7,
        profile_Image:pp1,
        name:'Jovan Dinka',
        title:'Software developer',
        mutual:20
    },
    {
        cover_Image:cover8,
        profile_Image:pp2,
        name:'Amhed simon',
        title:'Web Designer',
        mutual:69
    },
    {
        cover_Image:cover9,
        profile_Image:pp3,
        name:'kedir mohamed',
        title:'React Native',
        mutual:23
    },
    {
        cover_Image:cover10,
        profile_Image:pp4,
        name:'Taru Kaseem',
        title:'Founder at EGHS',
        mutual:90
    },
    {
        cover_Image:cover11,
        profile_Image:pp5,
        name:'Ritika Sharma',
        title:'CEO at AirSDN',
        mutual:67
    },
    {
        cover_Image:cover12,
        profile_Image:pp6,
        name:'Samrood Ali',
        title:'Medical Assistant',
        mutual:63
    },
    {
        cover_Image:cover13,
        profile_Image:pp7,
        name:'Ayeni Jovan',
        title:'Software Test',
        mutual:230
    },
    {
        cover_Image:cover14,
        profile_Image:pp8,
        name:'Moses Felipe',
        title:'Dog Trainer',
        mutual:12
    }

]
const connectionRequests=[
    {
        profileImage:pp9,
        NameOfUser:'Hana Dase',
        jobTitle:'SoftWare Developer at CNB',
        mutual:23
    },
    {
        profileImage:pp20,
        NameOfUser:'Mikiyas Amhed',
        jobTitle:'React Native Freelancer',
        mutual:106
    },
    {
        profileImage:pp11,
        NameOfUser:'Nganulo Angel',
        jobTitle:'Full-Stacck dev :Ruby on Rails ',
        mutual:205
    },
    {
        profileImage:pp12,
        NameOfUser:'Gopal Joshual',
        jobTitle:'Founder/Senioir Pastor',
        mutual:86
    }
    ,{
        profileImage:pp13,
        NameOfUser:'Mohamed Assefa',
        jobTitle:'Full-Stack Web Developer',
        mutual:34
    },
    {
        profileImage:pp20,
        NameOfUser:'Emmanuel Tammay',
        jobTitle:'SoftWare Engineer at AZSD',
        mutual:23
    },
    {
        profileImage:pp15,
        NameOfUser:'Marshal Rahal',
        jobTitle:'Electrical Engineer at UEEL',
        mutual:345
    }
]

    
    const reset=(resetBol,numberofList)=>{
        setShowMore(resetBol);
        setNumberOfList(numberofList);
    }
    const connectionReset=(resetBol,numberofList)=>
    {
        setshowMoreOfConnection(resetBol) 
        setnumberOfConnectionToShow(numberofList)  
    }
    return (
        <Container>
            <Main>
                <LeftSide>
                    <h4>Manage my network</h4>
                    <CardDisplay>

                    
                    {
                        Icons.slice(0,numberOfList).map((icon,index)=>
                        
                        (
                            <NavList>
                            <div>

                            <Icon>
                                <img src={icon} alt="icon"/>
                            </Icon>
                            <p>
                                {Lists[index]}
                            </p>
                            </div>
                            <span>
                           {FigureData[index]}
                            </span>
                        </NavList>
                        
                        ))
                    
}
<ShowMoreorLess>
    {
        showMore?<button onClick={()=>reset(false,1)}><span>Show Less</span> <img src={up} alt="showless"/></button>
         :<button onClick={()=>reset(true,Icon.length)}><span>Show More </span><img src={down} alt="down"/></button>
    }

    
</ShowMoreorLess>
</CardDisplay>            </LeftSide>
                <MiddleAndRigthSide>
                 <ConnectionInfo>
                     <HeaderInfo>
                         <div>
                         <span>Invitations</span>
                         <span>Manage</span>
                         </div>
                     </HeaderInfo>
                   {
                    connectionRequests.slice(0,numberOfConnectionToShow).map((data,index)=>(
                        <Invitations>
                        <div>
                            <UserPhoto>
                                <img src={data.profileImage} alt="profile"/>
                            </UserPhoto>
                       
 
                            <UserInfo>
                               <h4>{data.NameOfUser}</h4>
                               <span>{data.jobTitle}</span>
                               <p>
                                   <img src={mutual} alt="mutual"/>
                                    <span>Biruk Assefa and {data.mutual} 0thers</span>
                               </p>
                            </UserInfo>
                            </div>
                            <ResponseButton>
                                <span>Ignore</span>
                                <Button>
                                <span>Accept</span>
                                </Button>
                           
                            </ResponseButton>
                        
                        </Invitations>
                    ))
                   }
                    <ShowMoreorLess>
                        {
                            showMoreOfConnection?<button onClick={()=>connectionReset(false,1)}><span>Show Less</span> <img src={up} alt="show more"/></button>
                            :<button onClick={()=>connectionReset(true,connectionRequests.length)}><span>Show More </span><img src={down} alt="down"/></button>
                        }

    
                    </ShowMoreorLess>
                 </ConnectionInfo>
                 <WholeConnectionInfo>
                 <ConnectionHeader>
                     <span>Online events for you</span>
                     <span>See all</span>
                 </ConnectionHeader>
                
                 <ConnectionPeople>
                {
                    data.map((data)=>(
                        <Card>
                        <Image>
                            <img src={data.img} alt="hello"/>
                        </Image>
                        <Profile>
                            <img src={data.img2} alt="this me"/>
                        </Profile>
                        <div>

                        <Header>
                            <h4>{data.title}</h4>
                        </Header>
                        <Date>
                            <span>{data.date}</span>
                        </Date>
                        <Partcipant>
                            <span>{data.attendees}</span>
                        </Partcipant>
                        <Button>
                                View
                        </Button>
                        </div>

                    </Card>
                    ))
                }     
                 
                 </ConnectionPeople>
                 
                 <Peoples>
                  <PeoplesHeader>
                      <span>People you may know from Addis Ababa University</span>
                      <span>See all</span>
                  </PeoplesHeader>
                  <PeoplesCard>
                      {
                        UserData.map((data,index)=>(

                            <PeoplesYouMayKnow>
                            <CoverImage>
                            <img src={data.cover_Image} alt="cover"/>
                            </CoverImage>  
                            <ProfileImage>
                                <img src={data.profile_Image} alt="profile"/>
                            </ProfileImage>
                            <div>

                            <Name>
                                <h4>{data.name}</h4>
                            </Name>
                            <Title>
                                <span>
                                {data.title}
                                </span>
                            </Title>
                            <MutualFriends>
                                <img src={mutual} alt=""mutual/>
                                <span>{data.mutual} mutual connections</span>
                            </MutualFriends>
                            <Button>
                                Connect
                            </Button>
                            </div>
                          </PeoplesYouMayKnow> 
                        ))  
                      }
                     
                  </PeoplesCard>
                 </Peoples>
                 </WholeConnectionInfo>
                </MiddleAndRigthSide>
            </Main>
        </Container>
    )
}
const Container=styled.div`
margin:120px 100px;
 @media(max-width:768px)
    {   display:flex;
        flex-direction: column;
        padding:0 5px;
        margin:120px 0px;
        overflow-x:hidden;
    }

 
`

const Main=styled.div`
display:grid;
grid-template-columns: 1.3fr 3.5fr;
gap:40px;
@media(max-width:768px)
{    display:flex;
    flex-direction: column;
    padding:0 5px;
    padding: 0px;
}

`
const LeftSide=styled.div`
 background-color:#fff ;
 height: auto;

 border:none;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
border-radius: 8px;
h4{
    padding:20px;
    color:rgba(0,0,0,0.7)
}
@media(max-width:768px)
{  
    margin:30px auto;
    flex-direction: column;
    padding:0 30px;
}

`
const MiddleAndRigthSide=styled.div`
@media(max-width:768px)
{  
    margin:30px auto;
    flex-direction: column;
    padding:0px;
}

`
 const NavList=styled.li`
 padding:8px 0px;
 display: flex;
 align-items: center;
 justify-content: space-between;
 color: rgba(0,0,0,0.6);
 font-weight:400;
 div{
     display: flex;
     align-items: center;
     img{
         width:100%;
         height:100%;
         object-fit: contain;
         fill:rgba(0,0,0,0.6)
     }
     p{
         flex:1;
         padding-left:18px;
        
     }
    
 }
 span{
    padding:0px 20px;

 }
 &:hover{
     background-color: rgba(0,0,0,0.1);
 }
 `
 const Icon=styled.div`
 width:22px;
 height: 22px;
 padding:0px 10px;
 
 `
 const CardDisplay=styled.div`
 margin-top:5px;

 `
 const ShowMoreorLess=styled.div`
  margin-left:10px;
 button{
     display: flex;
     align-items:center;
     span{
         padding-right:6px ;
     }
     margin: 10px 0px;
     border: none;
     background:rgba(0,0,0,0.2);
     padding:10px 15px;
     border-radius: 5px;;
 }
 `
 const ConnectionInfo=styled.div`
 display: flex;
 justify-content: space-between;
 flex-direction: column;
 align-items: center;
 padding: 0px 20px;
 background-color:#fff ;
 border-radius:10px;
 width:100%;
 @media(max-width:768px)
{
    width:300px;
    margin:20px 10px;
    padding:10px;
    

}
 margin-bottom: 20px;
 border:none;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
 `
 const ConnectionPeople=styled.div`
 display: grid;
 grid-template-columns: 1fr 1fr 1fr;
 gap:30px;
 width:100%; 
 @media(max-width:768px)
{
    display:grid;
    grid-template-columns:0.6fr;
    place-items: center;
    margin:auto;
    
}
 `

 const Card =styled.div`
 border:none;
 border-radius: 8px;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
div{
     padding: 0px 10px 10px 10px;

}
&:hover{
    box-shadow:0px  0px 0px 1px rgba(0,0,0,0.08),0px 4px 4px rgba(0,0,0,0.3)
}
 `
 const Image=styled.div`
 height:80px;
 width:100%;
 img{
     width:100%;
     height:100%;
     object-fit: cover;
     margin-left: -10px;
     border-top-left-radius:8px;
     border-top-right-radius: 8px;
 }
 `
 const Profile=styled.div`
 width:80px;
 height:80px;
 margin-top: -50px;
 img{
     width:100%;
     height:100%;
     object-fit:cover;
    
 }
 `
 const WholeConnectionInfo=styled.div`
 width:100%;
 padding: 0px 20px;
 background-color:#fff ;
 border-radius:10px;
 box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
 @media(max-width:768px)
{
   
    margin:0px;
    padding: 0px;;
}
 `
 const ConnectionHeader=styled.div`
 display:flex;
 justify-content: space-between;
 padding:25px 0px;
 @media(max-width:768px)
{
    width:60%;
    display:flex;
    justify-content: space-between;
    
}
 `
 
 const Header=styled.div`
 height: 30px;
 margin-bottom: 10px;
 color:rgba(0,0,0,0.6)
 `
 const Date=styled.div`
 color:rgba(0,0,0,0.5);
 font-size:13px;
 `
 const Partcipant=styled.div`
 color:rgba(0,0,0,0.6);
 font-size:14px;
 margin-top: -5px;
 `
 const Button=styled.button`
 border: none;
 background: transparent;
 width:100%;
 font-size: 15px;
 font-weight: 550;
 box-shadow: inset 0 0 0 1px #0a66c2;
 border-radius: 24px;
 display:flex;
 align-self: center;
 padding: 10px 0px;
 justify-content: center;
 background-color: #00000000;
 color:#0a66c2;
 text-align:center;
 &:hover{
     background-color:rgba(112,181,249,0.2) ;
     color:#0a66c2;
     box-shadow: inset 0 0 0 2px #0a66c2;
     
 }
 `
const Peoples=styled.div``
const PeoplesHeader=styled(ConnectionHeader)``
const PeoplesCard=styled.div`
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
gap:20px;
@media(max-width:768px)
{ 

    display:grid;
    grid-template-columns: auto;
    gap:40px;
}

`
const CoverImage=styled(Image)`
width:100%;
height:65px;

img{
    
    width:100%;
    height:100%;
    object-fit:cover;
    margin-left:-10px;

}
`
const ProfileImage=styled.div`
width:90px;
height:90px;
margin:auto;

img{
    width:100%;
    height:100%;
    object-fit: cover;
    border-radius:50%;
    margin-top:-50px;



}
`
const Name=styled.div`
h4{
    text-align:center;
    color:rgba(0,0,0,0.7)

}
margin-top:-40px;
`
const Title=styled.div`
margin:auto;
span{
    text-align:center;
    color:rgba(0,0,0,0.7);
    font-size:14px;
    font-weight:550;
}
`
const MutualFriends=styled.div`
display: flex;
font-size:13px;
margin:10px -10px ;
color:rgba(0,0,0,0.5);
font-weight:500;

`
const PeoplesYouMayKnow=styled.div`
padding-bottom:10px ;
border:none;
 border-radius: 8px;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
div{
     padding: 0px 10px 10px 10px;

}
&:hover{
    box-shadow:0px  0px 0px 1px rgba(0,0,0,0.08),0px 4px 4px rgba(0,0,0,0.3)
}
`
const Invitations=styled.div`
margin:15px 0px;
display:flex;
width:100%;
justify-content: space-between;
align-items: center;
color:rgba(0,0,0,0.7);
background-color:rgba(112,181,249,0.2);
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
border-radius: 10px;
padding: 10px;
div{
    display:flex;
    justify-content: space-between;
}
@media(max-width:768px)
{  width:70%;
    display:flex;
    flex-direction: column;
    div{
        display: grid;
        grid-template-columns: 1;
        place-items: center;
    }

}
`
const UserPhoto=styled.div`
height:60px;
width:60px;

img{
    width:100%;
    height: 100%;
    object-fit:cover;
    border-radius: 50%;
}

`
const UserInfo=styled.div`
display: flex;
flex-direction: column;
margin-left:20px;
span{
    font-size:14.5px;
}
p{
    display:flex;
    flex-direction: row;
    span{
        font-size:12px;
        margin-left:5px ;
    }
}
@media(max-width:768px){
margin-top: 20px;
}
`
const ResponseButton=styled.div`
display:flex;
span{
    margin:0px 10px;
    padding: 0px 10px;
}
@media(max-width:768px){
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin:20px;
    
}
`
const HeaderInfo=styled.div`
width:100%;
margin:20px 0px 10px 0px;
padding-bottom: 20px;
border-bottom: 1px solid rgba(0,0,0,0.1);
div{
    display:flex;
    justify-content: space-between;
    span{
        font-size:17px;
        color:rgba(0,0,0,0.6);
        font-weight: 600;
    }
}
`
export default MyNetwork
