import React from 'react'
import styled from 'styled-components'
import x from '../Images/x.svg'
import ad from '../Images/profile/New folder/ad.svg'
import salary from '../Images/profile/New folder/salary.svg'
import find from '../Images/profile/New folder/find.svg'
import  group from '../Images/profile/New folder/Group.svg'
import In from '../Images/profile/New folder/In.svg'
import learn from '../Images/profile/New folder/Learn.svg'
import post from '../Images/profile/New folder/post.svg'
import pro from '../Images/profile/New folder/pro.svg'

function Work(props) {
  const data=[
{
    Image_Set:learn,
    title:'Learning'

},
{
    Image_Set:In,
    title:'Insights'
},
{
    Image_Set:post,
    title:'Post a job'
},
{
    Image_Set:ad,
    title:'Advertise'
},
{
    Image_Set:find,
    title:'Find Leads'
},
{
    Image_Set:group,
    title:'Groups'
},
{
    Image_Set:pro,
    title:'ProFinder'
},
{
    Image_Set:salary,
    title:'Salary'
},
  ]
const footerData=[
    {
        headTitle:'Sales Solutions',
        subTitle:'Unlock sales opportunities'
    },

    {
        headTitle:'Talent Solutins',
        subTitle:'Find, attract and recruit talent'
    },{
        headTitle:'Post a job for free',
        subTitle:'Get your job in front of quality candidates'
    },
    {
        headTitle:'Marketing Solutions ',
        subTitle:'Acquire customers and grow your business'
    },
    {
        headTitle:'Learing Solutions',
        subTitle:'Developm talent acrosss your organization'
    },

]
    return (
        <Container>
        <Head>
            <Icon >
                <img onClick={props.display} src={x} alt="display"/>
            </Icon>
                
        </Head>
           <Main>
            
            <Info>
                <SubInfo1>
                    <p>Vist More LinkedIn Products</p>
                    <List>
                        {
                            data.map((data,index)=>(
                                <NavList>
                                <DIV>
                                <IMG>
                                <img src={data.Image_Set} alt="image dat"/>
                                </IMG>
                                <span>{data.title}</span>
                                </DIV>
                            </NavList>

                            ))
                        }
                        

    


                    </List>
                </SubInfo1>
                <SubInfo2>
                  <p>LinkedIn Business Services</p>
                  {
                    footerData.map((data,index)=>(
                        <Ls>
                        <p>{data.headTitle}</p>
                        <span>{data.subTitle}</span>
                    </Ls>
                    ))
                  }
                  
                </SubInfo2>
            </Info>
           </Main>
        </Container>
    )
}
const Container =styled.div`
position: fixed;
margin-top:55px;
top:0;
left:0;
right:0;
bottom:0;
z-index:9999;
background-color: rgba(0,0,0,0.6);
display:flex;
justify-content: flex-end;

`
const Main=styled.div`
background-color: white;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
border-radius: 8px;
border-top-right-radius:0px;
border-bottom-right-radius: 0px;
width:25%;
position:relative;
overflow:scroll;
z-index:1;
padding-top:55px;

`
const Head=styled.div`
padding:20px;
height: 35px;
position:fixed;
top:50px;
z-index:10;
`
const Icon=styled.div`
display: flex;
margin-left: 270px;;
width:30px;
height:30px;

img{
    width:100%;
    height:100%
}
`
const Info=styled.div`
display: flex;
flex-direction: column;

`

const SubInfo1=styled.div`
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
border-radius: 8px;
width:90%;
margin:10px auto;

p{
    text-align:center;
    padding: 15px 0px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
    font-size: 16px;
    font-weight:500
    
}
`
const List=styled.div`
padding: 20px 0px;
display:grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
place-items: center;
row-gap:10px;
`
const NavList=styled.div`

`
const DIV=styled.div`
cursor: pointer;
display: flex;
flex-direction:column;
justify-content: center;
span{
    font-size:11px;
}
`
const IMG=styled.div`
width:40px;
height:40px;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
border-radius: 8px;
margin-bottom: 10px;
&:hover{
     transform: scale(1.2);
 }
img{
    width: 100%;
    height:100%;
    object-fit:contain;
}
`
const SubInfo2=styled(SubInfo1)`


`
const Ls=styled.div`
display: flex;
flex-direction: column;
margin-left:10px;
padding:5px 0px;
p{
    color:rgba(0,0,0,0.8);
    font-weight:600;
    text-align:start;
    font-size:14px;
    border:none;
    padding:3px 0px;;
}
span{
    font-size:11px;
}
`

export default Work
