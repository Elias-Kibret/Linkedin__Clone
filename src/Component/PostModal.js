import React,{useState}from 'react'
import { connect } from 'react-redux'
import firebase from "firebase"
import {postArticleAPI} from '../Action'
import styled from 'styled-components'
import close from '../Images/close.svg'
import privacy from '../Images/privacy.svg'
import downIcon from '../Images/down-icon.svg'
import user from '../Images/user.svg'
import addPhoto  from '../Images/addPhoto2.svg'
import addVideo from '../Images/addVideo2.svg'
import document from '../Images/document.svg'
import hiring from '../Images/hiring.svg'
import celebration from '../Images/celebration.svg'
import poll from '../Images/poll.svg'
import more from '../Images/more.svg'
import comment from '../Images/comment.svg'
import pen from '../Images/pen.svg'
function PostModal(props) {
    const [editorText,setEditorText]=useState("")
    const [shareImage,setShareImage]=useState('')
    const [videoLink,setVideoLink]=useState('')
    console.log(videoLink);
    
    const handleVideo=(e)=>
    {
        const video=e.target.files[0]
        if(video===''||video===undefined)
        {
            return;
        }
        setVideoLink(video)
    }
    const handleChange=(e)=>
    {
        const image=e.target.files[0];
        if(image===''|| image===undefined)
        {
            alert(`not an image.the file is a ${typeof image}`);
            return;
        }
        console.log(image)
        setShareImage(image)
    }
    const postArticle=(e)=>
    {
        e.preventDefault();
        if(e.target !==e.currentTarget){
            return
        }
        const payload={
            image:shareImage,
            video:videoLink,
            user:props.user,
            description:editorText,
            timestamp:firebase.firestore.Timestamp.now()
        };
        props.postArticle(payload)
        reset(e)
    }
    const reset=(e)=>
    {
        setEditorText("");
        setShareImage("")
     setVideoLink("")
        props.handleModel(e);
    }
    return (
        <>
        {props.showModal==='open'&&
        <Container>
          <Content>
           <Header>
               <h3>{(!shareImage&&!videoLink)? `Create a post`:`Edit Image`}</h3>
                <img onClick={(event=>{
                    reset(event)
                })} src={close} alt="hello"/>
           </Header>
           {
             shareImage&&(<>
             <AddAlt>
                <button>
                    <img src={pen} alt="pen"/>
                    <span>Add alt text</span>
                </button>
             </AddAlt>
             <ImagePost>

                 <img src={URL.createObjectURL(shareImage)} alt="shareImage"/>
             </ImagePost>
             
             </>)
             
         }
        { videoLink&&( <VideoShare>
                 
                 <video width="100%" controls>
                 <source src={URL.createObjectURL(videoLink)}/>
             </video>       
                 </VideoShare> 
                     )    }
        {
         (shareImage||videoLink)&&(
         <AcctionButton>
             <span>
                 <button className="back" onClick={(event=>{
                        reset(event)
                    })}>
                     Back
                 </button>
                 <button className="done" onClick={(event)=>{postArticle(event)}}>
                     Done
                 </button>
             </span>
         </AcctionButton>
         )}
         
         {(!shareImage&&!videoLink)&&
         <div>
           <UserInfo>
               <UserPhoto>
                   {props.user.photoURL?<img src={props.user.photoURL} alt="eliass"/>:
                    <img  src={user} alt="create"/>   
                }
                   
               </UserPhoto>
               <UserNameAndPrivacy>
                   <h4>{props.user.displayName}</h4>
                   <Privacy>
                    <span>
                        <img src={privacy} alt="privacy"/>
                        <span>Anyone</span>
                        <img src={downIcon} alt="downICon"/>
                    </span>
                   </Privacy>

               </UserNameAndPrivacy>
           </UserInfo>
           
         
           <TextArea>
               <textarea  value={editorText} onChange={e=>{
                   setEditorText(e.target.value)
               }} placeholder="What do you want to talk about?">

               </textarea>
           </TextArea>
           <HashTag>
               <button>
               <span>Add Hashtag</span>
               </button>
            
           </HashTag>
        <ShareCreation>
          <ul>
              <li>
                 <label for="file-upload">
                     <img src={addPhoto} alt="add"/></label> 
                     <input id ="file-upload" type="file"accept='image/gif, image/jpeg, image/png' name="image" onChange={handleChange}/>
                     
              </li>
              <li>
                 <label for="file">
                     <img src={addVideo} alt="add"/></label> 
                     <input id ="file" type="file" accept="video/mp4,video/x-m4v,video/*" name="video" onChange={handleVideo}/>
              </li>
              <li>
                  <button>
                      <img src={document} alt="document"/>
                  </button>
              </li>
              <li>
                  <button>
                      <img src={hiring} alt="hiring"/>
                  </button>
              </li>
              <li>
                  <button>
                      <img src={celebration} alt="celebrarion"/>
                  </button>
              </li>
              <li>
                  <button>
                      <img src={poll}alt="poll"/>
                  </button>
              </li>
              <li>
                  <button>
                      <img src={more} alt="more"/>
                  </button>
              </li>
              <li>
                  
                  <button>
                      <span>
                        
                          <img src={comment} alt="comment"/>
                         
                        Anyone
                      </span>
                  </button>

              </li>
             
          </ul>
          <PostButton disabled={!editorText?true:false} onClick={(event)=>{postArticle(event)}}>
        Post
        </PostButton>
    </ShareCreation>
    </div> 
}   
          </Content>
        </Container>
        }
        </>
    )
}



const Container =styled.div`
position: fixed;
top:0;
left:0;
right:0;
bottom:0;
z-index:999;
background-color: rgba(0,0,0,0.8);
padding:20px;
animation: fadeIn 0.3s;
height:calc(100vh-228px);

`
const Content=styled.div`
width: 100%;
padding-bottom: 20px;
max-width:552px;
background-color: white;
max-height:450px;
overflow: inherit;
border-radius: 5px;
position: relative;
display:flex;
top:10px;
z-index:100000;
flex-direction: column;
margin: 0 auto;

`
const Header =styled.div`
display:flex;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,0.2);
padding:12px 20px;
h3{
    color:rgba(0,0,0,0.8);
    font-weight: 500;
}img{
    padding: 8px;
    &:hover{
        background-color: rgba(0,0,0,0.1);
        cursor: pointer;
        border-radius:50%;
    }
}
`
const UserInfo=styled.div`
display:flex;
justify-content: flex-start;
align-items: center;
padding:20px 25px;
`
const UserPhoto=styled.div`
width:50Px;
height: 50px;
img{
    width:100%;
    height: 100%;
    object-fit: contain;
    border-radius:50%;
}

padding:0px 10px;
`
const UserNameAndPrivacy=styled.div`
display:flex;
flex-direction:column;
`
const Privacy=styled.button`
background: transparent;
padding:4px 16px;
border-radius: 24px;
border:none;
border:1px solid rgba(0,0,0,0.6);
box-shadow:0 0 0 1px rgba(0 0 0 /15%),0 0 0 rgba(0 0 0 /20%);
margin-top:7px;
span{
    display: flex;
     
    img {
    
        padding: 0px 5px;
    }
}
`
const TextArea=styled.div`
width:85%;
margin:0 auto;
textarea{
    width:100%;
    resize: none;
    min-height: 150px;
    font-size: 18px;
    border:none;
    &:focus-visible{
        outline: none;
    }
}
`
const HashTag=styled.div`
display:block;
button{
    margin:5px 20px;
    border:none;
    background-color: transparent;
    padding:10px;
    span{
        font-weight: 600;
        font-size:16px;
        font-family:inherit;
        color:#0a66c2;
        cursor:pointer;
    };
    &:hover{
        background-color: rgba(112,181,249,0.2);
        color: #0a66c2;
    }
}

`
const ShareCreation=styled.div`
display: flex;
justify-content: space-between;
ul{
    display: flex;
    list-style: none;
   
    li{
        padding: 8px;
        button{
            background: transparent;
            border:none;
            span{
                display: flex;
                 
                    img{
                        padding-right:5px;
                        width:15px;
                        height: 15px;
                    

                }
            }
        }
        
        input{
            display: none;
        }
    }
}

`
const PostButton=styled.button`
margin-right:10px;
min-width: 60px;
border: none;
border-radius: 20px;
background:transparent;
color:${props=>props.disabled?"rgba(0,0,0,0.8)":"white"};
background-color:${props=>props.disabled?'rgba(0,0,0,0.8)':'#0a66c2'};
&:hover{
    background-color:${props=>props.disabled?"rgba(0,0,0,0.08)":"#004182"} ;
}

`
const ImagePost=styled.div`
display: block;
width: 100%;
overflow-y: scroll;
img{
    width:100%;
    height:100%;
    object-fit: contain;
}
`
const AcctionButton=styled.div`
position: relative;
padding:20px 20px 30px 20px;
align-items: center;
span{
    display:flex;
    width: 100px;
    justify-content: flex-end;
    position: absolute;
    right: 20px;
    

    button{
        padding: 8px 15px;  
        margin:0px 5px;
        border-radius: 24px;
        background-color: transparent;
        cursor: pointer;
        box-sizing:border-box;
        border:none;
        box-shadow: inset 0 0 0 1px #0a66c2;
        font-size: 15px;
        font-weight: 600;
    }
    .back{
        color:#0a66c2;
        background-color: #00000000;
        &:hover
        {
            box-shadow:inset 0 0 0 2px #0a66c2;
            background-color:rgba(112,181,249,0.2) ;
            color: #0a66c2;
        }
    }
    .done{
        background-color: #0a66c2;
        color:#adadad;
        &:hover{
            color:#fff;
            background-color: #004182;
        


        }
    }
}
`
const AddAlt=styled.div`
position: absolute;
top:80px;
right: 40px;
button{
    display: flex;
    align-items:center;
    font-size:15px;
    font-weight: 600;
    letter-spacing:0.6px;
    padding:8px 20px;
    border-radius: 20px;
    background-color: #0a66c2;
    border:none;
    span{
        padding-left: 5px;
        color:#fff;
    }
}
`
const VideoShare=styled.div`
position: relative;
display: block;
width: 100%;
overflow-y: scroll;
video{
    width:100%;
    height:100%;
    object-fit: contain;
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
    postArticle:(payload)=>dispatch(postArticleAPI(payload))
})
export default connect(mapStateToProps,mapDispatchToProps)(PostModal)