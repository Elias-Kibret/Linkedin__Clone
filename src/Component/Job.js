import React from 'react'
import styled from 'styled-components'
import myjobs from '../Images/myjobs.svg'
import resume from '../Images/resume.svg'
import jobalerts from '../Images/jobalerts.svg'
import salary from '../Images/salary.svg'
import skill from '../Images/skill.svg'
import interview from '../Images/interview.svg'
import app from '../Images/app.svg'
import penPost from '../Images/penPost.svg'
import pp1 from '../Images/profile/pp1.jpg'
import pp9 from '../Images/profile/pp9.jpg'
import pp3 from '../Images/profile/pp2.jpg'
import lamp from '../Images/lamp.jpg'
import pp10 from '../Images/profile/pp10.jpg'
import pp11 from '../Images/profile/pp11.jpg'
import pp12 from '../Images/profile/pp12.jpg'
import pp13 from '../Images/profile/pp13.jpg'
import pp14 from '../Images/profile/pp14.jpg'
import pp15 from '../Images/profile/pp15.jpg'
import pp16 from '../Images/profile/pp16.jpg'
import more from '../Images/more.svg'
import linked from '../Images/linkedin.png'
import bookmark from '../Images/bookmark.svg'

import ll1 from '../Images/Logo/ll1.jpg'
import ll2 from '../Images/Logo/ll2.jpg'
import ll3 from '../Images/Logo/ll3.jpg'
import ll4 from '../Images/Logo/ll4.jpg'
import ll5 from '../Images/Logo/ll5.jpg'
import ll6 from '../Images/Logo/ll6.jpg'
import ll7 from '../Images/Logo/ll7.jpg'
function Job() {
    const data=[
        {
            icon:myjobs,
            title:'My Jobs'
        },
        {
            icon:jobalerts,
            title:'Job Alerts'
        },
        {
            icon:salary,
            title:'Salary'
        },
        {
            icon:skill,
            title:'Skill Assessments'
        },
        {
            icon:interview,
            title:'Interview Prep'
        },
        {
            icon:resume,
            title:'Resume Builder'
        },
        {
            icon:app,
            title:'Application Settings'
        }
    ]
    const jobs=[
        {
            title:'React native Developer',
            location:'Canada ',
            numberApply:3
        },
        {
            title:'Frontend developer',
            location:'Addis Ababa Ethiopia',
            numberApply:6
        },
        {
            title:'Full Stack Engineer',
            location:'Addis Ababa Ethiopia Entry Level',
            numberApply:1
        }
    ]
const jobData=[
    {
    company_image:ll1,
    mutualImage:pp10,
    job_title:'Frontend Developer',
    nameOfCompany:"Mama's Tech PLC",
    location:'Addis Ababa ,Ethiopia',
    numberOfConnection:1,
    duration:'1 day ago',
    hardness:'Esay Apply'
},
{
    company_image:ll2,
    mutualImage:pp11,
    job_title:'React Native Developer',
    nameOfCompany:"Soft App Development",
    location:'Canada',
    numberOfConnection:3,
    duration:'3 days ago',
    hardness:'Need Resume'
},
{
    company_image:ll3,
    mutualImage:pp12,
    job_title:'Electrical Enginer',
    nameOfCompany:"Ethio Cement",
    location:'Sululta,Ethiopia',
    numberOfConnection:3,
    duration:'3 hours ago',
    hardness:'BSC in Electrical'
},
{
    company_image:ll4,
    mutualImage:pp13,
    job_title:'Computer Enginer',
    nameOfCompany:"Deventus Hardware",
    location:' Bole Addis Ababa ,Ethiopia',
    numberOfConnection:6,
    duration:'1 day ago',
    hardness:'Esay Apply' 
},
{
    company_image:ll5,
    mutualImage:pp14,
    job_title:'Web Developer',
    nameOfCompany:"EPSD PLC",
    location:'Adama,Ethiopia',
    numberOfConnection:5,
    duration:'1 week ago',
    hardness:'Esay Apply'
},{
    company_image:ll6,
    mutualImage:pp15,
    job_title:'Hardware maintanace ',
    nameOfCompany:"Mama's Tech PLC",
    location:'Bahirdar ,Ethiopia',
    numberOfConnection:1,
    duration:'1 month ago',
    hardness:'Esay Apply'
},{
    company_image:ll7,
    mutualImage:pp16,
    job_title:'Android App Developer',
    nameOfCompany:"HAHU App development PLC",
    location:'Addis Ababa ,Ethiopia',
    numberOfConnection:4,
    duration:'20 hours Ago',
    hardness:'Esay Apply'
}
]
    return (
        <Container>
            <Main>
                <Left>
                <TopIInfo>
                    {
                    data.map((data,index)=>(
                        <NavList>
                        <img src={data.icon} alt="icon"/>
                        <span>{data.title}</span>
                    </NavList>
                    ))    
                    }
                  
                </TopIInfo>
                <Footer>
                  <img src={penPost} alt="pen"/>
                  <span>Post a free job</span>
                </Footer>
                </Left>
                <Middle>
                  <ListOfJobs>
                      <Header>
                        <h3>Recent job searches</h3>
                        <span>Clear</span>
                      </Header>
                      {
                          jobs.map((data,index)=>(
                            <JobsDescription>
                            <h5>{data.title}<span>({data.numberApply} new)</span></h5>
                            <span>{data.location}</span>
                        </JobsDescription>
                          ))
                      }
                     
                  </ListOfJobs>
                  <Pro>
                      <div>

                      <Image>
                          <img src={pp1} alt="pp1"/>

                      </Image>
                      <Description>
                          <p>Try Premimum to see jobs where you would be a top applicant</p>
                          <Photo>
                              <div>

                              <Photo1>    
                              <img src={pp1} alt="pp2"/>
                              </Photo1>
                              <Photo2>

                              <img src={pp3} alt="pp3"/>
                              </Photo2>
                              <Photo3>

                              <img src={pp9} alt="pp9"/>
                              </Photo3>
                              </div>
                              <span>Yibrah and Millions of memebers use premium</span>
                             
                          </Photo>
                          <button>
                              Try free for 1 Month
                          </button>
                      </Description>
                      
                      </div>
                      <Icon>
                          <img src={more} alt="more"/>
                      </Icon>
                  </Pro>
                  <Recommended>
                      <Reco_Head>
                          <h3>Recommended for you</h3>
                          <span>Based on your profile and search history</span>
                      </Reco_Head>
                      {
                        jobData.map((data,index)=>(

                            <Job_Description>
                            <div>

                            <Img>
                            <img src={data.company_image} alt="company"/>

                            </Img>
                            <List>
                                <Title>                                  
                                <h4>{data.job_title}</h4>
                                <p>{data.nameOfCompany}</p>
                                <p>{data.location}</p>
                                </Title>
                                <People>
                                  <div>
                                      <img src={data.mutualImage} alt="mutual"/>

                                  </div>
                                  <span>{data.numberOfConnection} connection works here</span>
                                </People>
                                <LastFooter>
                                    <p>{data.duration}</p>
                                    <div>
                                    <img src={linked} alt="lined"/> 
                                    </div>
                                
                                    <p>{data.hardness}</p>
                                
                                
                                
                                </LastFooter>
                            </List>
                            </div>

                            <Icon>
                                <img src={bookmark} alt="bookmark"/>
                            </Icon>

                        </Job_Description>
                        ))
                      }
                     
                  </Recommended>
                </Middle>
                <Right>
                    <h3>Ways to prepare</h3>
                    <CardHeader>
                    <h5>Best practices</h5>
                    </CardHeader>
                    <Card>
                        
                        
                        <div>
                            <div>
                                <img src={lamp} alt="lamp"/>

                            </div>
                            <span>Get the most of your <p></p> job search and stand out to <p></p> rectuiters</span>
                        </div>
                    </Card>
                </Right>
            </Main>
        </Container>
    )
}
const Container=styled.div`
width:85%;
margin:auto;
`
const Main=styled.div`
margin-top:80px;
display:grid;
grid-template-columns: 1fr 2.5fr 1.5fr;
gap:40px;
position:relative;
@media(max-width:768px)
{
    display: flex;
    flex-direction: column;
    padding: 0px 10px;
    text-align: left;
    margin:70px 0px;

}
`
const Left=styled.div`
display:block;


`
const Middle=styled.div`
height:100vh;
overflow: scroll;
-ms-overflow-style:none;
`
const Right=styled.div`
background-color: white;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
border-radius: 8px;
height:250px;
h3{
 margin:20px; 
 font-weight:600; 
 color:rgba(0,0,0,0.9)  
}
`
const TopIInfo=styled.div`
background-color: white;
color: rgba(0,0,0,0.55);
font-weight: 600;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
border-radius: 8px;
padding-top: 20px;;
margin-bottom:20px;
`

const NavList=styled.li`
display:flex;
padding:14px;
cursor: pointer;
span{
    margin-left:8px;
    font-size:14px;
}
`
const Footer=styled(NavList)`
background-color: white;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
border-radius: 8px;
display: flex;
align-items:center;
span{
    color:#0a66c2;
    font-weight: 650;
    font-size:15px;
}
`
const ListOfJobs=styled.div`
background-color: white;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
border-radius: 8px;
padding:20px;
`
const Header=styled.div`
display:flex;
justify-content: space-between;
margin-bottom: 20px;
h3{
    color:rgba(0,0,0,0.64)
}
span{
    font-size:14px;
    font-weight:500;
    color:rgba(0,0,0,0.7)
}
`
const JobsDescription=styled.div`
cursor: pointer;
margin-top:15px;
padding-bottom:5px;
border-bottom: 1px solid rgba(0,0,0,0.1);
h5{
    color:rgba(0,0,0,0.7);
    span{
        color:#057642;
    }
}
span{
    font-size:12px;
    color:rgba(0,0,0,0.7);
}
`
const Pro=styled.div`
margin-top:20px;
display:flex;

align-items:flex-start;
background-color: white;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
border-radius: 8px;
padding:20px;
div{
    display: flex;
}
`
const Image=styled.div`
width:80px;
height:70px;
margin-right: 10px;
img{
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius: 50%;
}
`
const Description=styled.div`
display:flex;
flex-direction: column;
justify-content: flex-start;
p{
    color:rgba(0,0,0,0.7);
    font-weight: 450;
    margin-bottom: 5px;
}
button{
    border: none;
     background: transparent;
     margin: 10px 0px 0px -100px ;
     width:50%;
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
}
`
const Photo=styled.div`
display:flex;
align-items: center;
div{
    display: flex;
align-items: center;
}
span{
    font-size:12px;
    color:rgba(0,0,0,0.6);
}

`
const Icon=styled.div`
width:25px;
height: 25px;
padding: 5px;
cursor: pointer;
border-radius: 50%;
img{
  width:100%;
  height:100%;
  object-fit: cover;
 
    
}
&:hover{
    background-color: rgba(0,0,0,0.1);
}
`
const Photo1=styled.div`

width: 25px;
height:25px;
img{
width:100%;
height:100%;
object-fit: cover;
border-radius:50%;
}`
const Photo2=styled.div`
margin-left:-10px;
width: 25px;
height:25px;
img{
width:100%;
height:100%;
object-fit: contain;
border-radius:50%;
}`
const Photo3=styled.div`
margin-left:-10px;
width: 25px;
height:25px;
img{
width:100%;
height:100%;
object-fit: cover;
border-radius:50%;
}`
const Recommended=styled.div`
margin-top:20px;
padding: 20px;
background-color:#fff ;
 border-radius:10px;
 box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
 display: flex;
 flex-direction: column;
`
const Reco_Head=styled.div`
margin-bottom: 30px;
h3{
color:rgba(0,0,0,0.7);
font-weight:650;
}
span{
    color:rgba(0,0,0,0.6);
    font-size:14px;
}
`
const Job_Description=styled.div`

border-bottom: 1px solid rgba(0,0,0,0.18);
padding:25px 0px;
display:flex;
justify-content: space-between;
align-items: flex-start;
div{
    display:flex;
    
}
`
const List=styled.div`
display:flex;
flex-direction:column;
margin-left:10px;
div{
    display:flex;
    
}
`
const Img=styled.div`
margin:10px 10px 0px 0px;
width:60px;
height: 60px;
img{
    width:100%;
    height:100%;
    object-fit:cover
}
`
const People=styled.div`
display:flex;
flex-direction: row;
align-items: center;
margin:5px 0px;
div{
    width:20px;
    height:20px;
    img{
        width:100%;
        height:100%;
        object-fit:cover;
        border-radius: 50%;
    }
}
span{
    font-size:14px;
    margin-left:5px;
    color:rgba(0,0,0,0.6);
    
}
`
const LastFooter=styled.div`
display: flex;
align-items: center;
margin-top: 5px;
div{
    width:15px;
    height:15px;

    
}
p{
    font-size:12px;
    margin:0px 5px ;
    color:rgba(0,0,0,0.6)
}
`
const Title=styled.div`
display:flex;
flex-direction: column;

h4{
    color:#0a66c2;
    font-weight: 600;
}
p{
    font-size:14px;
    color:rgba(0,0,0,0.7);
}
`
const Card=styled.div`
width:85%;
padding: 10px;
margin:auto;
display:flex;
background-color:#fff ;
 border-radius:10px;
 box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
div{
    
    display: flex;
    align-items:center;
    div{
        width: 80px;;
        height: 80px;
        img{
            width: 100%;
            height:100%;
            object-fit: cover;
        }
    }
    span{
        font-size:14px;
        color:rgba(0,0,0,0.7);
        font-weight:500;
    }
}
`
const CardHeader=styled.div`
display:block;
margin: 30px 0px;
text-align:center;
color:#0a66c2;
`
export default Job
