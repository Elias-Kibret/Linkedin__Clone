import React from 'react'
import styled from 'styled-components'
import feedIcon from '../Images/feed-icon.svg'
import rightIcon from '../Images/right-icon.svg'
function Rightside() {
    return (
    <Container>
 <FollowCard>
    <Title>
        <h2>Add to your feed</h2>
         <img src={feedIcon} alt="feedIcon"/>
    </Title>
    <FeedList>
        <li>
            <a href="#"> 
                <Avatar></Avatar>
            </a>
            <div>
                <span>
                    #LinkedIn
                </span>
                <button>Follow</button>
            </div>
        </li>
        <li>
            <a href="#">
                <Avatar></Avatar>
            </a>
            <div>
                <span>
                 #Video
                </span>
                <button>Follow</button>
            </div>
        </li>
        
    </FeedList>
<Recommendation>
    View all recommendation
    <img src={rightIcon} alt="rightIcon"/>
</Recommendation>
 </FollowCard>
 <BannerCard>
     <img src="https://static-expl.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg" alt="link"/>
 </BannerCard>
    </Container>
    )
}

export default Rightside
const Container=styled.div`
grid-area: rightside;
`
const FollowCard=styled.div`
padding:15px;
text-align:center;
overflow:hidden;
margin-bottom:8px;
background-color: white;
height: 200px;
position: relative;
border:none;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
border-radius: 8px;
`
const Title=styled.div`
display:inline-flex;
align-items:center;
justify-content: space-between;
font-size:10px;
width:100%;
color:rgba(0,0,0,0.7);

`

const FeedList=styled.ul`
li{
    display: flex;
    align-items:center;
    margin:11px 0px;
    position: relative;
    font-size:13px;
    &>div{
        display:flex;
        flex-direction: column;
    }
    button{
        color:rgba(0,0,0,0.6);
        box-shadow: inset 0 0 0 1px rgba(0,0,0,0.6);
        background-color: transparent;
        outline:none;
        display: flex;
         border-radius: 17px;
         box-sizing: border-box;
         justify-content: center;
         align-items: center;
         max-width: 500px;
         max-height: 35px;
         padding: 14px;
         text-align: center;
         font-weight:600;
        margin-bottom:12px;
    }
}
`
const Avatar=styled.div`
background-image: url("https://static-exp1.licdn.com//sc/h/1b4vl1r54ijmrmcyxzoidwmxs");
background-size: contain;
background-position:center;
background-repeat: no-repeat;
width:40px;
height:40px;
margin-right:10px;
`
const Recommendation=styled.a`
color:#0a66c2;
display:flex;
align-items:center;
font-size:14px;
`
const BannerCard=styled(FollowCard)``