import React,{useState}from 'react'
import SearchResult from './Search'
import styled from 'styled-components'
import {Link} from'react-router-dom'
import logo from '../Images/home-logo.svg'
import searchSvg from '../Images/search-icon.svg'
import homeSvg from '../Images/nav-home.svg'
import netwokingSvg from '../Images/nav-network.svg'
import jobSvg from '../Images/nav-jobs.svg'
import messaging from'../Images/nav-messaging.svg'
import notification from '../Images/nav-notifications.svg'
import user from '../Images/user.svg'
import downIcon from '../Images/down-icon.svg'
import work from '../Images/nav-work.svg'


import { connect } from 'react-redux'
import {signOutAPI} from '../Action/index'
import Work from './Work'

function Header(props) {
    console.log(props.user)
const [current ,setCurrent]=useState(false)
const [displaySearch,setDisplaySearch]=useState(false)
const [displayWork,setDisplayWork]=useState(false)
const [Home,setHome]=useState(true)
const [Network,setNetwork]=useState(false)
const [Job,setJob]=useState(false)
const [Messaging,setMessaging]=useState(false)
const [Notf,setNotf]=useState(false)
const show=(home,network,jobs,messeging,notf)=>{
  setHome(home);
 setNetwork(network);
setJob(jobs);
setMessaging(messeging);
setNotf(notf);

}

const Display=()=>{
    setDisplayWork(false);
    console.log(displayWork)
}
    return (
    
        <Container>
            <Content>
                <Logo>
                  <Link to="/home"> 
                  <img src={logo} alt="logo"/>
                  </Link>
                </Logo>
                <Search style={displayWork ? {pointerEvents:'none'}:{}}>
                    
                    <SearchIcon>
                    <img src={searchSvg} alt="search"/>
                    </SearchIcon>
                    <div>
                    <input type ="text" placeholder="Search for jobs, companies..." onFocus={()=>{
                        setDisplaySearch(true) 
                    }} onBlur={()=>{
                        setDisplaySearch(false)
                    }}/>         
                    </div>
                </Search>
                <Nav>
                <NavListWrap>
                    
                    <Link to="/home"style={displayWork ? {textDecoration:'none',pointerEvents:'none'}:{textDecoration:'none'}} onClick={()=>show(true,false,false,false,false)} >
                    <NavList >
                        
                         <img src={homeSvg} alt="home"/>
                         <span>Home</span>
                         <span className={Home?"active":" "}></span>
                        
                        
                    </NavList>
                    </Link>
                    <Link  to="/my-network" style={displayWork ? {textDecoration:'none',pointerEvents:'none'}:{textDecoration:'none'}} onClick={()=>show(false,true,false,false,false)}>
                    <NavList >
                        
                            <img src={netwokingSvg} alt="network"/>
                            <span>My Network</span>
                            <span className={Network?"active":" "}></span>
                        
                    </NavList >
                    </Link>
                    <Link to="job" style={displayWork ? {textDecoration:'none',pointerEvents:'none'}:{textDecoration:'none'}} onClick={()=>show(false,false,true,false,false)}>
                    <NavList  >
                        
                            <img src={jobSvg} alt="job"/>
                            <span>Jobs</span>
                            <span className={Job?"active":" "}></span>
                        
                    </NavList>
                    </Link>
                    <Link to="/message"style={displayWork ? {textDecoration:'none',pointerEvents:'none'}:{textDecoration:'none'}} onClick={()=>show(false,false,false,true,false)}>
                    <NavList>
                        
                            <img src={messaging} alt="messaging"/>
                            <span>Messaging</span>
                            <span className={Messaging?"active":" "}></span>
                        
                    </NavList>
                    </Link>
                    <Link to="/notifactions" style={displayWork ? {textDecoration:'none',pointerEvents:'none'}:{textDecoration:'none'}} onClick={()=>show(false,false,false,false,true)}>
                    <NavList >
                        
                            <img src={notification} alt="notifcation"/>
                            <span>Notifications</span>
                            <span className={ Notf?"active":" "}></span>
                        
                    </NavList>
                    </Link>

                    
                </NavListWrap>
                <User style={displayWork ? {textDecoration:'none',pointerEvents:'none'}:{textDecoration:'none'}} >
                        
                        {
                            props.user && props.user.photoURL?(
                
                                   <img className="Profile_Image" src={props.user.photoURL} alt="profile"/>
                              
                                
            
                                ):(
                                

                                        < img className="Profile_Image" src={user} alt="prifile image"/>
                                
                                    

            
                            )
    
                        }
                        <span onMouseEnter={()=>setCurrent(true)} onMouseLeave={()=>setCurrent(false)}>Me <img src={downIcon}/></span>
                    </User>

                    { current &&(

<SignOut  onMouseEnter={()=>setCurrent(true)} onMouseLeave={()=>setCurrent(false)}>
<Wrapper>
    <Wrapper2>

 <Top>
     <Image>
     {
            props.user && props.user.photoURL?( <img src={props.user.photoURL} alt="user profile"/>):(

                < img src={user} alt="user"/>
            )
    
        }

     </Image>
     <Info>
         <h4>{props.user.displayName}</h4>
         <p>Founder at mama's Technology</p>
     </Info>
 </Top>
 <Button>
            View Profile
        </Button>
    </Wrapper2>
<Wrapper3>
<span>Account</span>
<p>Setting {"&"} Privacy </p>
<p>Help</p>
<p>Language</p>
</Wrapper3>
<Wrapper4>
<span>Manage</span>
<p>Post {"&"} Activity </p>
<p>Job Posting Account</p>   
</Wrapper4>
<Wrapper5 onClick={()=>props.signOut()}>


<p>Sign out</p>
</Wrapper5>
</Wrapper>
</SignOut>
)
}
                


                <WorkIcon onClick={()=>{setDisplayWork(true)}}  >

                        <img src={work} alt="work"/>
                        <span>work <img src={downIcon} alt="downIcon"/></span>

                </WorkIcon>
                </Nav>
            </Content>
            {displaySearch&&(
            <div>
            <SearchResult />
            </div>
            )
                
            }
            {
              displayWork&&(<div>  <Work display={Display} /></div>)
            }
        
            
            
        </Container>
    
        
    )
}


const Container=styled.div`

background-color: white;
border-bottom: 1px solid rgba(0 ,0 ,0, 0.27);
position: fixed;
top:0px;
height: 55px;
width: 100vw;
left:0px;
right: 0px;
z-index:100;


`
const Wrapper=styled.div`
background-color:#fff ;
 border-radius:10px;
 box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
 border-top-right-radius:0px;
`


const Content =styled.div`
display: flex;
margin:auto;
padding: 0px 110px;
@media (max-width:768px) {
    padding: 0px 20px;
    
}

`
const Logo =styled.div`
  width:35px;
  height:35px;
  display: flex;
  align-content: center;
  flex-grow: 0;
  flex-shrink: 0;
  img{
      width:100%;
      height: 100%;
      
     margin-top: 7px;
     
  }
`
const Search=styled.div`
display: flex;
align-items:center ;
flex-grow: 0.6;
position: relative;
padding: 0px 20px; 

&>div{
    max-width:280px;
    input{
        border:none;
        background-color: #eef3f8;
        padding: 0px 9px 0px 40px;
        width:300px;
        height: 34px;
        line-height: 1.75;
        border-color: #dce6f1;
        &:focus-visible{
          outline  :none ;
        }
    }
}

`
const SearchIcon=styled.div`
position: absolute; 
width:40px;
left:20px;
z-index:1;
display:flex;
cursor: pointer;
justify-content: center;
align-items: center;
pointer-events:none;
`
const Nav= styled.div`
margin-right:auto; 
display: flex;
@media(max-width:768px)
{
    position: fixed;
    left:0;
    bottom:0;
    background-color: white;
    width:100%;
    padding: 10px;

}
`
const NavListWrap=styled.ul`
display: flex;
align-items: center;
flex-wrap: nowrap;
list-style: none;
.active{
    content: "";
     transform:scaleX(1);
     border-bottom: 2px solid var(--white,#fff);
     bottom :0;
     position: absolute;
     transition: transform 0.2s ease-in-out;
     width:80px;
     border-color: rgba(0,0,0,0.9);
    
}
`
const NavList=styled.li`
padding: 0px 15px;
display: flex;
flex-direction: column;
justify-content: center;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
    font-size: 12px;
    font-weight: 400;
    background-color: transparent;

    img{
        width: 25px;
        height: 25px;
        
    }
    
   span{
       color:rgba(0,0,0,0.6)
   }
   @media (max-width:768px)
   {
  min-width: 70px;
   }

}
&:hover, & :active
{
    a{
        
        span{
            color:black;
        }
    }

`
const SignOut =styled.div`
position:absolute ;
top:50px;
right:5px;
width:300px;
height: 400px;
padding:8px 3px;
font-size:16px;
border-radius: 0 0 5px 5px;
transition-duration: 167ms;
text-align: center;
z-index:20;
`;


const User =styled(NavList)`
display:flex;
flex-direction: column;
align-items:center;

.Profile_Image{
    width:30px;
    height:30px;
    border-radius: 50%;
}
    span{
        display: flex;
        align-items: start;
        font-size:11px;
        width:18px;
        height:15px;
        img{
            width:100%;
            height:100%;
            object-fit: contain;
            

        }
    }

&:hover{
    ${SignOut} {
        
        align-items: center;
        
        justify-content: center;
        }
}
`
const WorkIcon=styled(User)`
a{
    img{
        border-radius: 0;
    }
}
border-left:1px solid rgba(0,0,0,0.08);
`
const Top=styled.div`
display:flex;
justify-content: flex-start;
`
const Image=styled.div`
width:50px;
height:50px;
img{
    width:100%;
    height:100%;
    object-fit:cover;
    border-radius:50%
}
`
const Info=styled.div`
flex:1;
text-align:start;
margin-left:20px;
p{
    font-size:15px;
    color:rgba(0,0,0,0.7)
}
`
const Wrapper2=styled.div`
padding:10px 10px 10px 20px;
border-bottom: 1px solid rgba(0,0,0,0.1);
`
const Button=styled.div`
margin-top:20px;
border: none;
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
`
const Wrapper3=styled(Wrapper2)`
text-align:start;
span{
    font-size:17px;
    font-weight:550;

}
p{
    font-size:14px;
    color:rgba(0,0,0,0.6);
}

`
const Wrapper4=styled(Wrapper2)`
text-align:start;
text-align:start;
span{
    font-size:17px;
    font-weight:550;

}
p{
    font-size:15px;
    color:rgba(0,0,0,0.6);
}
`
const Wrapper5=styled(Wrapper2)`
text-align:start;
cursor: pointer;
p{
    font-size:15px;
    color:rgba(0,0,0,0.6);
}

`
const mapStateToProps =(state)=>{
    return{
user:state.userState.user
    }
}
const mapDispatchToProps = (dispatch)=>(
    {
        signOut: ()=>dispatch(signOutAPI())
    }
)
export default connect(mapStateToProps,mapDispatchToProps)(Header)