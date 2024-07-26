import React, { Fragment } from "react";
import styled from "styled-components";
import Github from "../Images/github.png";
import LeetCode from "../Images/leetcode.png";
import LinkedIn from "../Images/linkedin.png";
import Twitter from "../Images/twitter.png";




const socialImage = [
    {
        image : {Github}
    },
    {
        image : {LeetCode}
    },
    {
        image : {LinkedIn}
    },
    {
        image : {Twitter}
    },
    
]
const SocialMedia = ()=>{
    return(
        <Fragment>
        <SocialWrap>
        <div className="social">
       <button>
       <img className="socialImage" src= {Github}/>
        
       </button>
      
        
       <button>
        <img className="socialImage" src= {LeetCode}/>
        </button>

        <button>
        <img className="socialImage" src= {Twitter}/>
        </button>
        
        <button>
        <img className="socialImage" src= {LinkedIn}/>
        </button>
      
        </div>
        </SocialWrap>
        </Fragment>
    )
};

const SocialWrap = styled.div`

.social{
display:flex;
margin-left:-1rem;
margin-bottom:2rem;
}

.socialImage{

border-radius:50%;
max-width:6rem;
width:2rem;
height:2rem;
margin:1rem;
}
.social button{
cursor:pointer;
margin-left:1rem;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:4rem;
height:4rem;
display:flex;
justify-content:center;
align-items:center;
}



@media(width<=320px){

.social{
    display:flex;
    margin-left:-1rem;
    margin-bottom:2rem;
    }
    
    .socialImage{
    
    border-radius:50%;
    max-width:6rem;
    width:2rem;
    height:2rem;
    margin:1rem;
    }
    .social button{
    cursor:pointer;
    margin-left:1rem;
    border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
    border-radius:50%;
    width:4vw !important;
    height:15vh!important;
    display:flex;
    justify-content:center;
    align-items:center;
    }
    

}
@media(width<=800px){
.social{

height:20vh !important;
margin-left:-5vw;
margin-bottom:6vw;
}

.socialImage{
width:60% !important;
height:10vh;
}
.social button{
margin-left:5vw;
max-width:60% !important;
height:16vh !important;
}

}

@media(width<=240px){

.social button{
    cursor:pointer;
    margin-left:5vw;
    border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
    border-radius:50%;
    width:10%;
    height:12vh !important;
    display:flex;
    justify-content:center;
    align-items:center;
    }

    
.socialImage{
border-radius:50%;
width:40% !important;
height:6vh !important;
}
}
@media(width<=1200px){
.social button{
margin-left:5vw;
max-width:7%;
height:20vh;
}
}
@media(width<=998px){
.social{
margin-left:-5vw;
margin-bottom:6vw;
}

.socialImage{
width:50%;
height:10vh;
}
.social button{
margin-left:5vw;
max-width:7%;
height:20vh;
}
}
@media(width<=600px){

.social{
margin-left:-5vw;
margin-bottom:6vw;
}

.socialImage{
border-radius:50%;
width:50% !important;
height:9vh !important;
}
.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:8% !important;
height:15vh !important;
display:flex;
justify-content:center;
align-items:center;
}
}
@media(width<=500px){
.social{
margin-left:-5vw;
margin-bottom:6vw;
}

.socialImage{
border-radius:50%;
width:30%;
height:6vh !important;
}
.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:10%;
height:15vh !important;
display:flex;
justify-content:center;
align-items:center;
}
}

@media(width<=370px){
.social{
margin-left:-5vw;
margin-bottom:6vw;
}

.socialImage{
border-radius:50%;
width:30%;
height:8vh !important;
}
.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:13% !important;
height:17vh !important;
display:flex;
justify-content:center;
align-items:center;
}
}

@media(width<=1220px){
.social{
height:14vh;
margin-left:-5vw;
margin-bottom:6vw;
}

.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:10vw;
height:20vh;
display:flex;
justify-content:center;
align-items:center;
}
.socialImage{
border-radius:50%;
width:50%;
height:10vh;
}


}



`;

export default SocialMedia;









// @media(max-width:980px){
//     .social{
//     }
//     .social button{
    
//     margin:2rem;
//     width:8vw;
//     height:5vh;
//     display:flex;
//     }
//     .socialImage{
    
//     width:3vw;
//     height:2vh;
//     margin:1rem;
//     }
    
//     }
