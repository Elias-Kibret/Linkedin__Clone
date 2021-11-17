import React ,{useState,useEffect}from 'react'
import { getArticlesAPI } from '../Action'
import { connect } from 'react-redux'
import styled from 'styled-components'

import addPhoto from '../Images/addPhoto.svg'
import addVideo from '../Images/addVideo.svg'
import event from '../Images/event.svg'
import writeArticle from'../Images/writeArticle.svg'

import more from '../Images/more.svg'
import privacy from '../Images/privacy.svg'
import likeIcon from '../Images/like.svg'
import commentIcon from '../Images/comment.svg'
import shareIcon from '../Images/share.svg'
import sendIcon from '../Images/send.svg'
import emoji from '../Images/emoji.svg'
import commentPhoto from '../Images/commentPhoto.svg'
import PostModal from './PostModal'
import user from '../Images/user.svg'
import spin from '../Images/spin.gif'
function Mainside(props) {
    const [showModal,setShowModal]=useState("close")

    useEffect(()=>{
        props.getArticles();
    },[])
      const handleModel =(e)=>
      {e.preventDefault();
        if(e.target!==e.currentTarget){
            return
        } 
        switch(showModal)
        {
            case "open":
                setShowModal("close")
                break;
            case "close":
                setShowModal("open")
                break;
            default:
                setShowModal("close")
        }       
      }
    return (
        <>
        {
            props.articles.length===0?(
            <p>There is no articles to show</p>) :(
        <Container>
          
           <ShareBox>
               <CreatePost>
                   
               <a href="#">
                {props.user&& props.user.photoURL?
                     <img src={props.user.photoURL} alt="photourl"/>:<img src={user} alt="photousrll"/>
                }
                    
                 </a>
                 <button onClick={handleModel} disabled={props.loading?true:false}>Start a post</button>
               </CreatePost>
             <Section>
                 <button>
                     <img src={addPhoto} alt="add"/>
                     <span>Photo</span>
                 </button>
                 <button>
                     <img src={addVideo} alt="video" />
                     <span>Video</span>
                 </button>
                 <button>
                     <img src={event} alt="event"/>
                     <span>Event</span>
                 </button>
                 <button>
                     <img src={writeArticle} alt="write"/>
                     <span>Write article</span>
                 </button>
             </Section>
           </ShareBox>
           <Content>
               <Loading>

            {
              props.loading? <img src={spin} alt="spin"/>:null
            }
               </Loading>
            {props.articles.length>0&&
            props.articles.map((article,key)=>
            (

            
          <Article key={key}>
              <Header>

           <Avater>
               <img src={article.actor.image} alt="article"/>
           </Avater>
           <Info>
              <User>
                <span>{article.actor.title}</span>
                <span> . 2nd+</span>
              </User>
              <Title>
                  <span>{article.actor.decription}</span>
              </Title>
              <Time>
                <span>{article.actor.date.toDate().toLocaleDateString()}</span>
                <span><img src={privacy} alt="privacy"/></span>
              </Time>
           </Info>
           <More>
               <img src={more} alt="more"/>
           </More>
              </Header>
              <Text>
              <p>{article.description}</p>
              </Text>
              <Photo>
                 {
                     article.sharedImg &&<img src={article.sharedImg} alt=""article/>
                 }

              </Photo>
              <ReactionResult>
                  <button>
               <span><img src="https://static-exp1.licdn.com/sc/h/d310t2g24pvdy4pt1jkedo4yb" alt="1"/></span>
               <span><img src="https://static-exp1.licdn.com/sc/h/5thsbmikm6a8uov24ygwd914f"alt="img"/></span>
               <span><img src="https://static-exp1.licdn.com/sc/h/7fx9nkd7mx8avdpqm5hqcbi97" alt="img1"/></span>
               <span>46</span>
                  </button>
                  <button>
              <span>12 comments</span>
                  </button>
              </ReactionResult>
              <ReactionButton>
               <button>
                   <img src={likeIcon} alt="likeICon"/>
                   <span>Like</span>
               </button>
               <button>
                       <img src={commentIcon} alt="comment"/>
                       <span>Comment</span>
               </button>
               <button>
                       <img src={shareIcon} alt="share"/>
                       <span>Share</span>
               </button>
               <button>
                       <img src={sendIcon} alt="sendICOn"/>
                       <span>Send</span>
               </button>
             </ReactionButton>
             <Comment>
                <Avater>
                    <a href="#">
                        {
                             <img src={article.actor.image} alt="cool"/>    
                        }
                        
                    </a>
                    
                    
                </Avater>
                <span>
                <input className="input" placeholder="Add a comment"/>
                    <button>
                    <img src={emoji} alt="emoji"/>
                    </button>
                    <button>
                    <img src={commentPhoto} alt="commentPhoto"/>
                    </button>  
                </span> 
                
             </Comment>
          </Article>
            ))
        }
          </Content>
          <PostModal showModal={showModal} handleModel={handleModel} />
        
        </Container>)
}
</>
    )
}

const Container=styled.div`
grid-area: main;
`
const CommonCard=styled.div`
text-align: center;
overflow: hidden;
margin-bottom:10px;
background-color: #fff;
border-radius: 6px;
border:none;
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
`
const ShareBox=styled(CommonCard)`
display: flex;
flex-direction:column;
color:#958b7b;
margin:0px 0px 8px;
background-color: white;
`
const  CreatePost =styled.div`
padding:10px 12px;
display: flex;

a{
    width:48px;
    height: 48px;
    
    img{
        width:100%;
        height:100%;
         object-fit: cover;
        border-radius: 50%;
    }
}
button{
    flex:1;
    margin:0px 10px;
    text-align: left;
    border-radius: 24px;
    padding-left: 20px;
    background-color:white;
    border:1px solid rgba(0,0,0,0.47);
    cursor: pointer;
    &:hover{
        background-color: #f5f5f5;
    }
    &:active
    {
        background-color: #f5f5f5;
    }
}
`
const Loading=styled.div`
display:flex;
margin:10px auto;
justify-content: center;
`
const Section =styled.div`
display: flex;
justify-content: space-evenly;
padding-bottom: 15px;
button{
    padding:12px 8px;
    display:flex;
    align-items: center;
    border:none;
    background-color: white;
    img{
        padding-right: 10px;;
    }
    span{
        font-size:14px;
        color:rgba(0,0,0,0.48);
        font-weight:600;
    }
    &:hover{
        background-color: rgba(0,0,0,0.08);
        border-radius:5px;
    }
}
`
const Article=styled(CommonCard)`
padding:20px;
display:block;
`
const Header=styled.div`
display:flex;
justify-content: space-between;
`
const Avater=styled.div`
width:45px;
height: 45px;

img{
   width:100%;
   height:100%;
   object-fit: cover;
   border-radius:50%;
}

`
const Info=styled.div`
flex:1;
display:flex;
flex-direction:column;
justify-content: flex-start;
text-align: left;
padding:0px 10px;
`
const User=styled.div`
span{

&:first-child{
    color:rgba(0,0,0,0.8);
    font-weight:600;
}
&:nth-child(2)
{
    color:rgba(0,0,0,0.58);
    font-size:13px;

}
}
`
const Title=styled.div`
color:rgba(0,0,0,0.58);
font-size:14px;
`
const Time=styled.div`
display:flex;
align-items:flex-end;

span
{
    align-self: center;
    font-size:11px;
    img{
        margin-top:4px;
        padding:0px 4px;
        align-self: flex-start;
    }
}
`
const More=styled.div`
color:rgba(0,0,0,0.67)`
const Photo=styled.div`
width: 100%;
height: auto;
margin-top:20px;

img{
    width: 100%;
    height: 100%;
    object-fit:cover;
    
    }
`
const ReactionResult=styled.div`
display: flex;
align-items: center;
padding:5px 0px;
button{
    display: flex;
    align-items: center;
    background-color: transparent;
    border:none;
    cursor: pointer;
}
border-bottom: 1px solid rgba(0,0,0,0.06);
`
const ReactionButton=styled.div`
display: flex;
justify-content: space-around;
padding: 20px 0px;
button{
    display: flex;
    align-items: center;
    background-color: transparent;
    border: none;
    color: rgba(0,0,0,0.56);
    font-weight: 700;
    span
    {
     margin-left:3px;
    }
}
`
const Text=styled.div`
text-align: left;
`
const Comment=styled.div`
display: flex;
width: 100%;
justify-content: center;

span{
display:flex;
width:100%;
input{
    flex:1;
    padding:0px 20px;
    margin-left: 5px;
    border-radius:24px;
    border:1px solid rgba(0,0,0,0.05);
    box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
}


    button{
        background-color: transparent;
        border: none;
        position: relative;
        right:90px;
        
        
    }
}
`
const Content=styled.div`

justify-content:center;
width: 100%;
margin: 0 auto;
&>img{
    width:60px;
    height: 60px;
    
}
`
const mapStateToProps=(state)=>
{
    return {
        loading:state.articleState.loading,
        user:state.userState.user,
        articles:state.articleState.articles

    }
}
const mapDispatchToProps=(dispatch)=>(
    {
        getArticles:()=>dispatch(getArticlesAPI())
    }
)

export default connect(mapStateToProps,mapDispatchToProps)(Mainside) 