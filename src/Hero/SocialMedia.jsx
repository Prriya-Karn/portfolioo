import React, { Fragment } from "react";
import styled from "styled-components";
const socialImage = [
    {
        image : "/Images/github1.png"
    },
    {
        image : "/Images/leetcode1.png"
    },
    {
        image : "/Images/linkedin1.png"
    },
    {
        image : "/Images/twitter1.png"
    },
    
]
const SocialMedia = ()=>{
    return(
        <Fragment>
        <SocialWrap>
        <div className="social">
       <button>
       <img className="socialImage" src= "/Images/github.png"/>
        
       </button>
      
        
       <button>
        <img className="socialImage" src= "/Images/leetcode.png"/>
        </button>

        <button>
        <img className="socialImage" src= "/Images/twitter.png"/>
        </button>
        
        <button>
        <img className="socialImage" src= "/Images/linkedin.png"/>
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

