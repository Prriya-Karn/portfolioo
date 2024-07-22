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
`;






export default SocialMedia;

