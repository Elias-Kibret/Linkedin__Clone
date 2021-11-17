import React from 'react'
import styled from 'styled-components'

import ermias from '../Images/ermias.jpg'
import obama from '../Images/obma.jpg'
import mark from '../Images/mark.jpg'
import  google from '../Images/google.jpg'
import founder from '../Images/founder.jpg'
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SearchIcon from '@material-ui/icons/Search';
const listOfSearch=['FrontEnd developer',"Mama's Technology","React developer"]
const listOfTipsSearch=['victory software solution','upwork talent freelancer','Gebeya talent']
const listOfImage=[ermias,obama,mark,google,founder]
const FirstName=['Ermias','Barack','Mark','Sundar','Reid']
const LastName=['Debebe','Obama','Zuckerberg','Pichai','Hoffman']


function Search() {
    return (
        <Container>
          <SearchResult>
               <InfoAndAction>
                   <span>Recent</span>
                   <span>Clear</span>
               </InfoAndAction>
               <SearchedUser>
                   {
                    listOfImage.map((value,index)=>(
                        <NavList>
                        <a href="#">
                            <img src={value}alt="value"/>

                            <span>{FirstName[index]}<p></p>{LastName[index]}</span>
                        </a>
                        </NavList>
                    ))
                   }
                   
                   
                   
               </SearchedUser>
               <RecentSeareched>
                   {
                    listOfSearch.map((value)=>(
                        <ListOfRecentSearch>
                                <AccessTimeIcon className="icon"/> 
                            <span>{value}</span>
                      </ListOfRecentSearch>
                    ))
                      
                   }
               </RecentSeareched>
               <FooterSearch>
                   <span className="tips">Try Searching for </span>
                   {
                    listOfTipsSearch.map((value)=>(
                        <SearchTips>
                        <SearchIcon className="icon"/>
                        <span>{value}</span>
                        </SearchTips>
                    )) 
                   }
           </FooterSearch >
          </SearchResult>
        </Container>
    )
}

export default Search
const Container=styled.div`
position:fixed;
margin-top: 56px;
top:0;
left:0;
right:0;
bottom:0;
z-index:999;
background-color: rgba(0,0,0,0.7);
`
const SearchResult=styled.div`
width: 500px;
height: 500px;
margin-left: 130px;
background-color: white;
padding: 8px 0px;
border-bottom-left-radius: 10px;
border-bottom-right-radius: 10px;
`
const InfoAndAction=styled.div`
padding: 4px 10px;
display:flex;
justify-content:space-between;
align-items: flex-start;
`
const SearchedUser =styled.div`
padding:20px 2px;
display:flex;
align-items: center;
`;
const NavList=styled.li`
padding: 5px ;
display: flex;
margin:auto;
align-items: center;
a{
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 100px;
    img{
        width:45px;
        height:45px;
        object-fit: cover;
        border-radius: 50%;
    }
    span{
        font-size: 12px;
        font-weight: 500;
        margin-top:8px
    }
}
`
const ListOfRecentSearch=styled.div`
display: flex;
align-items:flex-start;
padding:10px 30px;

span{
    padding-left: 10px;
    font-size: 12;

}
&:hover
{
    background-color: rgba(0,0,0,0.1);

}
.icon{
    width:18px;
    height: 18px;
}
`



const  RecentSeareched=styled.div`
padding-bottom:10px ;
border-bottom: 1px solid rgba(0,0,0,0.2);`
const FooterSearch=styled.div`
.tips{
    font-size:12px;
    margin:30px;
}
`
const SearchTips=styled(ListOfRecentSearch)`
display: flex;
`