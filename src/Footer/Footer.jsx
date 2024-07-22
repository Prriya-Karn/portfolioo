import React, { Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import Up from "../Images/uparrow.png";


const Footer = ()=>{
  const [scroll,setScroll] = useState(false);
  const top  = ()=>{
    window.scrollTo({top:"0",left:"0",behavior:"smooth"});
  }

  const checkScroll = ()=>{
    
    if(document.body.scrollTop > 250 || document.documentElement.scrollTop>250){
      setScroll(true);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll", checkScroll);
    return()=>{
      window.removeEventListener("scroll",checkScroll);
    }
  },[]);



    return(
        <Fragment>
        <FooterWrapper>
       <div className="footerContainer">
       <p>Copyright @ 2024 by @priyakarncode | All Rights Reserved.</p>
{
  scroll === true? <div className="footImg1" onClick={top}>
  <img src={Up}/> 
  </div>:""
} 
       </div>
       </FooterWrapper>
        </Fragment>
    )

};

const FooterWrapper = styled.div`
.footerContainer{
display:grid;
gap:5rem;
  grid-template-columns : repeat(2,1fr);
margin-top:5rem;
background-color:${({theme})=>theme.colors.eduboxColor};
height:5rem;
} 

.footerContainer p{
padding:1.5rem 0 0 6rem;
font-size:1.5rem;
color:${({theme})=>theme.colors.buttonBackColor};
}

.footerContainer img{
margin-top:2rem;
margin-left:50rem;
}

.footImg1 img{
background-color:${({theme})=>theme.colors.buttonBackColor};
min-height:2rem;
max-width:5rem;
padding:0.5rem;
border-radius:50%;

cursor:pointer;

display:flex;
place-items:center;
margin-top:1rem;
margin-bottom:1.5rem;
  position: fixed;
  bottom: 0;
  animation: gototop 1.2s linear infinite alternate-reverse;
}

@keyframes gototop {
0%{
transform : translateY(-0.5rem);
}
100%{
transform : translateY(1rem);
}

}

`;

export default Footer;

