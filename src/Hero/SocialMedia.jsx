import React, { Fragment } from "react";
import styled from "styled-components";
import Github from "../Images/github.png";
import LeetCode from "../Images/leetcode.png";
import LinkedIn from "../Images/linkedin.png";
import Twitter from "../Images/twitter.png";
import { NavLink } from "react-router-dom";




const socialImage = [
    {
        image : "../Images/github.png",
        link : "https://github.com/Prriya-Karn"
    },
    {
        image : "../Images/leetcode.png",
        link : "https://leetcode.com/u/user1596V/"
    },
    {
        image : "../Images/linkedin.png",
        link : "https://www.linkedin.com/in/priya-k-1374211b1/"
    },
    {
        image : "../Images/twitter.png",
        link : "https://x.com/prjah12?t=x9T7qZykeWgf7ygtt8hRag&s=08" 
    },
    
]
const SocialMedia = ()=>{
    return(
        <Fragment>
        <SocialWrap>
        <div className="social">
        {
            socialImage.map((e)=>{
                return(
                    <Fragment>
                    
                    <button>
                    <NavLink exact to = {e.link} target="_Priya">
                    <img className="socialImage" src= {e.image}/>
                    </NavLink>
                    </button>
                    
                    </Fragment>
                )
            })
        }
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
.social{
margin-top:5vw;
height:14vh;
margin-left:-5vw;
margin-bottom:16vw;
}

.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:30vw !important;
height:20vh !important;
display:flex;
justify-content:center;
align-items:center;
}
.socialImage{
border-radius:50%;
width:400vw !important;
height:10vh;
}

}

@media(width<=320px){
.social{
margin-top:5vw;
height:14vh;
margin-left:-5vw;
margin-bottom:16vw;
}

.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:15vw;
height:25vh;
display:flex;
justify-content:center;
align-items:center;
}
.socialImage{
border-radius:50%;
width:400vw !important;
height:10vh;
}

}
@media(width<=800px){
.social{
margin-top:5vw;
height:14vh;
margin-left:-5vw;
margin-bottom:16vw;
}

.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:15vw;
height:25vh;
display:flex;
justify-content:center;
align-items:center;
}
.socialImage{
border-radius:50%;
width:400vw !important;
height:10vh;
}

}

@media(width<=240px){

.social{
margin-top:5vw;
height:14vh;
margin-left:-5vw;
margin-bottom:16vw;
}

.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:15vw;
height:25vh;
display:flex;
justify-content:center;
align-items:center;
}
.socialImage{
border-radius:50%;
width:400vw !important;
height:10vh;
}
}
@media(width<=1200px){
.social{
margin-top:5vw;
height:14vh;
margin-left:-5vw;
margin-bottom:16vw;
}

.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:15vw;
height:25vh;
display:flex;
justify-content:center;
align-items:center;
}
.socialImage{
border-radius:50%;
width:400vw !important;
height:10vh;
}

}
@media(width<=998px){
.social{
margin-top:5vw;
height:14vh;
margin-left:-5vw;
margin-bottom:16vw;
}

.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:15vw;
height:25vh;
display:flex;
justify-content:center;
align-items:center;
}
.socialImage{
border-radius:50%;
width:400vw !important;
height:10vh;
}

}
@media(width<=600px){

.social{
margin-top:5vw;
height:14vh;
margin-left:-5vw;
margin-bottom:16vw;
}

.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:15vw;
height:25vh;
display:flex;
justify-content:center;
align-items:center;
}
.socialImage{
border-radius:50%;
width:400vw !important;
height:10vh;
}

}
@media(width<=500px){
.social{
margin-top:5vw;
height:14vh;
margin-left:-5vw;
margin-bottom:16vw;
}

.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:15vw;
height:25vh;
display:flex;
justify-content:center;
align-items:center;
}
.socialImage{
border-radius:50%;
width:400vw !important;
height:10vh;
}

}

@media(width<=370px){
.social{
margin-top:5vw;
height:14vh;
margin-left:-5vw;
margin-bottom:16vw;
}

.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:15vw;
height:25vh;
display:flex;
justify-content:center;
align-items:center;
}
.socialImage{
border-radius:50%;
width:400vw !important;
height:10vh;
}

}

@media(width<=1220px){
.social{
margin-top:5vw;
height:14vh;
margin-left:-5vw;
margin-bottom:20vw;
}

.social button{
cursor:pointer;
margin-left:5vw;
border : 2px solid ${({theme})=>theme.colors.buttonBackColor};
border-radius:50%;
width:20vw;
height:30vh;
display:flex;
justify-content:center;
align-items:center;
}
.socialImage{
border-radius:50%;
width:200vw !important;
height:12vh;
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
