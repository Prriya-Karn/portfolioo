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


@media(width<=1220px){
.footerContainer{
width:370vw;
display:grid;
gap:5rem;
  grid-template-columns : repeat(2,1fr);
margin-top:5rem;
background-color:${({theme})=>theme.colors.eduboxColor};
height:20vh;
} 

.footerContainer p{
padding:2vw 0 0 15vw;
font-size:3vw;
font-weight:bold;
color:${({theme})=>theme.colors.buttonBackColor};
}

.footerContainer img{
width:90vw;
margin-top:2rem;
margin-left:50rem;
}

.footImg1 img{
background-color:${({theme})=>theme.colors.buttonBackColor};
height:12vh;
max-width:7vw;
padding:0.5rem;
border-radius:50%;

cursor:pointer;

display:flex;
place-items:center;
margin-top:1.5vw;
margin-left:120vw;
margin-bottom:2vw;
  position: fixed;
  bottom: 0;
  animation: gototop 1.2s linear infinite alternate-reverse;
}
}
 @media(width<=800px){}
 @media(width<=998px){

 .footerContainer{
width:400vw;
display:grid;
gap:5rem;
  grid-template-columns : repeat(2,1fr);
margin-top:5rem;
background-color:${({theme})=>theme.colors.eduboxColor};
height:20vh;
} 

.footerContainer p{
padding:3vw 0 0 15vw;
font-size:4vw;
font-weight:bold;
color:${({theme})=>theme.colors.buttonBackColor};
}

.footerContainer img{
width:90vw;
margin-top:2rem;
margin-left:50rem;
}

.footImg1 img{
background-color:${({theme})=>theme.colors.buttonBackColor};
height:12vh;
max-width:8vw;
padding:0.5rem;
border-radius:50%;

cursor:pointer;

display:flex;
place-items:center;
margin-top:1.5vw;
margin-left:120vw;
margin-bottom:2vw;
  position: fixed;
  bottom: 0;
  animation: gototop 1.2s linear infinite alternate-reverse;
}
 }
 @media(width<=768px){
 .footerContainer p{
padding:3.5vw 0 0 15vw;
font-size:5vw;
font-weight:bold;
color:${({theme})=>theme.colors.buttonBackColor};
}

.footerContainer img{
  width:90vw;
  margin-top:2rem;
  margin-left:50rem;
  }
  
  .footImg1 img{
  background-color:${({theme})=>theme.colors.buttonBackColor};
  height:12vh;
  max-width:10vw;
  padding:0.5rem;
  border-radius:50%;
  
  cursor:pointer;
  
  display:flex;
  place-items:center;
  margin-top:-2vw;
  margin-left:120vw;
  margin-bottom:2vw;
    position: fixed;
    bottom: 0;
    animation: gototop 1.2s linear infinite alternate-reverse;
  }
 }
 @media(width<=600px){
 .footerContainer p{
padding:3.5vw 0 0 15vw;
font-size:6vw;
font-weight:bold;
color:${({theme})=>theme.colors.buttonBackColor};
}

.footerContainer img{
  width:90vw;
  margin-top:2rem;
  margin-left:50rem;
  }
  
  .footImg1 img{
  background-color:${({theme})=>theme.colors.buttonBackColor};
  height:12vh;
  max-width:12vw;
  padding:1rem;
  border-radius:50%;
  
  cursor:pointer;
  
  display:flex;
  place-items:center;
  margin-top:-2vw;
  margin-left:120vw;
  margin-bottom:2vw;
    position: fixed;
    bottom: 0;
    animation: gototop 1.2s linear infinite alternate-reverse;
  }

 }
  @media(width<=500px){
   .footerContainer p{
padding:6vw 0 0 15vw;
font-size:6.2vw;
font-weight:bold;
color:${({theme})=>theme.colors.buttonBackColor};
}

.footerContainer img{
  width:90vw;
  margin-top:2rem;
  margin-left:50rem;
  }
  
  .footImg1 img{
  background-color:${({theme})=>theme.colors.buttonBackColor};
  height:10vh;
  max-width:12vw;
  padding:1rem;
  border-radius:50%;
  
  cursor:pointer;
  
  display:flex;
  place-items:center;
  margin-top:-10vw !important;
  margin-left:120vw;
  margin-bottom:6vw;
    position: fixed;
    bottom: 0;
    animation: gototop 1.2s linear infinite alternate-reverse;
  }
  }
     @media(width<=400px){
     .footerContainer p{
         width:250vw;
padding:8vw 0 0 15vw;
font-size:8vw;
font-weight:bold;
color:${({theme})=>theme.colors.buttonBackColor};
}

.footerContainer img{
  width:90vw;
  margin-top:2rem;
  margin-left:-20vw;
  }
  
  .footImg1 img{
  background-color:${({theme})=>theme.colors.buttonBackColor};
  height:10vh;
  max-width:15vw;
  padding:1rem;
  border-radius:50%;
  
  cursor:pointer;
  
  display:flex;
  place-items:center;
  margin-top:-10vw !important;
  margin-left:90vw;
  margin-bottom:7vw;
    position: fixed;
    bottom: 0;
    animation: gototop 1.2s linear infinite alternate-reverse;
  }
     }
       @media(width<=320px){
        .footerContainer{
width:400vw;
display:grid;

}
       .footerContainer p{
       width:250vw;
padding:10vw 0 0 15vw;
font-size:8vw;
font-weight:bold;
color:${({theme})=>theme.colors.buttonBackColor};
}

.footerContainer img{
  width:90vw;
  margin-top:2rem;
  margin-left:20vw;
  }
  
  .footImg1 img{
  background-color:${({theme})=>theme.colors.buttonBackColor};
  height:15vh;
  max-width:30vw;
  padding:1rem;
  border-radius:50%;
  
  cursor:pointer;
  
  display:flex;
  place-items:center;
  margin-top:-10vw !important;
  margin-left:90vw;
  margin-bottom:10vw;
    position: fixed;
    bottom: 0;
    animation: gototop 1.2s linear infinite alternate-reverse;
  }
       }


`;

export default Footer;

