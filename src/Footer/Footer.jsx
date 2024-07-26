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
height:35vh;
} 

.footerContainer p{
width:200vw;
margin-top:3vw;
padding:2vw 0 0vw 15vw;
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
height:20vh;
max-width:12vw;
padding:0.5rem;
border-radius:50%;

cursor:pointer;

display:flex;
place-items:center;
margin-top:1.5vw;
margin-left:120vw;
margin-bottom:5vw;
  position: fixed;
  bottom: 0;
  animation: gototop 1.2s linear infinite alternate-reverse;
}
}
 @media(width<=800px){
 
 .footerContainer{
width:400vw;
display:grid;
gap:5rem;
  grid-template-columns : repeat(2,1fr);
margin-top:5rem;
background-color:${({theme})=>theme.colors.eduboxColor};
height:30vh !important;
} 

.footerContainer p{
width:200vw;
padding:3vw 0 0 15vw;
font-size:6vw !important;
font-weight:bold;
color:${({theme})=>theme.colors.buttonBackColor};
}

.footerContainer img{
width:100vw;
margin-top:2rem;
margin-left:50rem;
}

.footImg1 img{
background-color:${({theme})=>theme.colors.buttonBackColor};
height:16vh !important;
max-width:13vw !important;
padding:0.5rem;
border-radius:50%;

cursor:pointer;

display:flex;
place-items:center;
margin-top:1.5vw;
margin-left:120vw;
margin-bottom:5vw !important;
  position: fixed;
  bottom: 0;
  animation: gototop 1.2s linear infinite alternate-reverse;
}
 
 }
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

 width:220vw;
padding:5vw 0 0 15vw;
font-size:7vw !important;
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

 width:280vw;
padding:5vw 0 0 15vw;
font-size:9vw !important;
font-weight:bold;
}

.footerContainer img{
  width:90vw;
  margin-top:2rem;
  margin-left:20rem;
  }
  
  .footImg1 img{
  background-color:${({theme})=>theme.colors.buttonBackColor};
  height:12vh;
  max-width:18vw !important;
  padding:1rem;
  border-radius:50%;
  
  cursor:pointer;
  
  display:flex;
  place-items:center;
  margin-top:-2vw;
  margin-left:20vw;
  margin-bottom:10vw !important;
    position: fixed;
    bottom: 0;
    animation: gototop 1.2s linear infinite alternate-reverse;
  }
  }
     @media(width<=400px){
   .footerContainer p{

 width:280vw;
padding:5vw 0 0 15vw;
font-size:9vw !important;
font-weight:bold;
}

.footerContainer img{
  width:90vw;
  margin-top:2rem;
  margin-left:20rem;
  }
  
  .footImg1 img{
  background-color:${({theme})=>theme.colors.buttonBackColor};
  height:12vh;
  max-width:25vw !important;
  padding:1rem;
  border-radius:50%;
  
  cursor:pointer;
  
  display:flex;
  place-items:center;
  margin-top:-2vw;
  margin-left:20vw;
  margin-bottom:10vw !important;
    position: fixed;
    bottom: 0;
    animation: gototop 1.2s linear infinite alternate-reverse;
  }
     }
       @media(width<=370px){
         .footerContainer p{

 width:300vw;
padding:12vw 0 0 15vw;
font-size:10vw !important;
font-weight:bold;
}

.footerContainer img{
  width:90vw;
  margin-top:2rem;
  margin-left:20rem;
  }
  
  .footImg1 img{
  background-color:${({theme})=>theme.colors.buttonBackColor};
  height:12vh;
  max-width:25vw !important;
  padding:1rem;
  border-radius:50%;
  
  cursor:pointer;
  
  display:flex;
  place-items:center;
  margin-top:-2vw;
  margin-left:20vw;
  margin-bottom:10vw !important;
    position: fixed;
    bottom: 0;
    animation: gototop 1.2s linear infinite alternate-reverse;
  }
       }
@media(width<=320px){
    .footerContainer p{

 width:300vw;
padding:12vw 0 0 15vw;
font-size:10vw !important;
font-weight:bold;
}

.footerContainer img{
  width:90vw;
  margin-top:2rem;
  margin-left:20rem;
  }
  
  .footImg1 img{
  background-color:${({theme})=>theme.colors.buttonBackColor};
  height:12vh !important;
  max-width:28vw !important;
  padding:1rem;
  border-radius:50%;
  
  cursor:pointer;
  
  display:flex;
  place-items:center;
  margin-top:-2vw;
  margin-left:20vw;
  margin-bottom:15vw !important;
    position: fixed;
    bottom: 0;
    animation: gototop 1.2s linear infinite alternate-reverse;
  }
}

`;

export default Footer;

