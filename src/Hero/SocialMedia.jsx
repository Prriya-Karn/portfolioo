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
@media(width<=400px){

.social button{
    cursor:pointer;
    margin-left:5vw;
    border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
    border-radius:50%;
    width:10%;
    height:10vh !important;
    display:flex;
    justify-content:center;
    align-items:center;
    }

    
.socialImage{
border-radius:50%;
width:35% !important;
height:5vh !important;
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

@media(width<=998px){
.social{
margin-left:-5vw;
margin-bottom:6vw;
}

.socialImage{
border-radius:50%;
width:50%;
height:10vh;
}
.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:10%;
height:20vh;
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
width:50%;
height:8vh;
}
.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:10%;
height:16vh;
display:flex;
justify-content:center;
align-items:center;
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
