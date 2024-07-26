import React, { Fragment } from "react";
import styled from "styled-components";
import Heading from "../Heading/Heading";
import Button from "../Button/Button";
const Contact = ()=>{
    return(
        <Fragment>
        <ContactWrapper>
      <div className="contact-container">
      <Heading
      headName = "Contact Me"
      className = "edu-border"
      />


      <div className="blob-con-1">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"  id="blobSvg">
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style={{stopColor: "rgb(0, 45, 98)"}}></stop>
          <stop offset="100%" style={{stopColor: "rgb(196, 224, 229)"}}></stop>
        </linearGradient>
      </defs>
      <path id="blob" d="
      M410,325Q369,400,289.5,413.5Q210,427,154.5,375Q99,323,94,248Q89,173,147,
      113Q205,53,302,58Q399,63,425,156.5Q451,250,410,325Z
      "
       fill="url(#gradient)"></path>
      </svg>
      </div>
      
      
<form className="contact-form">

<div className="input-contact">
<div className="cont-inp grid">
<input type="text" placeholder="Your Name"/>
<input type="email" placeholder="Your Email"/>
</div>


<div className="blob-con-2">
<svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"  id="blobSvg">
<defs>
  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" style={{stopColor: "rgb(0, 45, 98)"}}></stop>
    <stop offset="100%" style={{stopColor: "rgb(196, 224, 229)"}}></stop>
  </linearGradient>
</defs>
<path id="blob" d="
M410,325Q369,400,289.5,413.5Q210,427,154.5,375Q99,323,94,248Q89,173,147,
113Q205,53,302,58Q399,63,425,156.5Q451,250,410,325Z
"
 fill="url(#gradient)"></path>
</svg>
</div>

<textarea className="textarea" placeholder="Your Message"/>
</div>

<Button
name = "Submit"
/>

</form>


      </div>

      </ContactWrapper>
        </Fragment>
    )

};

const ContactWrapper = styled.div`
.blob-con-1{
position:relative;
max-width:20rem;
left:42rem;
top:-3rem;
z-index:-1;
}



.contact-form{
margin-left:50rem;
margin-top:-18rem;
max-width:50rem;
height:auto;
}
.contact-container{
min-height:48rem;

}
.cont-inp{

gap:2rem;
}
.edu-border{
margin-left:65rem;
}

.map{
width:180rem;
height:20rem;
}



.contact-form input{
 background: rgba(255, 255, 255, 0.3); 
    backdrop-filter: blur(10px);
border:1px solid ${({theme})=>theme.colors.buttonBackColor};
color:${({theme})=>theme.colors.buttonBackColor};
font-size:1.6rem;
outline:none;
height:4rem;
margin-bottom:2rem;
padding:0 0 0 1rem;
}
.input-contact{
display:flex;
flex-direction:column;
margin-bottom:2rem;
}

.textarea{
 background: rgba(255, 255, 255, 0.3); 
    backdrop-filter: blur(10px);
border:1px solid ${({theme})=>theme.colors.buttonBackColor};
color:${({theme})=>theme.colors.buttonBackColor};
font-size:1.6rem;
min-height:18rem;
padding:1rem 0 0 1rem;
outline:none;
margin-top:-20rem;
}

.blob-con-2{
position:relative;
width:20rem;
z-index:-1;
top:2rem;
left:25rem;
}


@media(width<=1220px){

.blob-con-1{
position:relative;
max-width:50vw;
left:-6vw;
top:-18vw;
z-index:-1;
}

.contact-container{
height:400vh;
width:300vw;
margin-top:80vw;
margin-bottom:30vw;
margin-left:40vw;
}

.contact-form{
margin-left:25vw;
margin-top:-50vw;
max-width:500vw;
height:100vh;
}

.cont-inp{
gap:2rem;
}
.edu-border{
margin-left:110vw;
}



.contact-form input{
font-size:5vw;
height:25vh;
margin-bottom:2rem;
padding:0 0 0 5vw;
}
.input-contact{
width:250vw;
display:flex;
flex-direction:column;
margin-bottom:2rem;
}

.textarea{
font-size:5vw;
height:100vh;
padding:2vw 0 0 5vw;
margin-top:-50vw;
}

.blob-con-2{
position:relative;
width:50vw;
z-index:-1;
top:1vw;
left:120vw;
}
}
 @media(width<=800px){
 
.blob-con-1{
position:relative;
max-width:50vw;
left:-6vw;
top:-18vw;
z-index:-1;
}

.contact-container{
height:400vh;
width:300vw;
margin-top:80vw;
margin-bottom:30vw;
margin-left:40vw;
}

.contact-form{
margin-left:25vw;
margin-top:-50vw;
max-width:500vw;
height:100vh;
}

.cont-inp{
gap:2rem;
}
.edu-border{
margin-left:110vw;
}



.contact-form input{
font-size:7vw !important;
height:25vh;
margin-bottom:2rem;
padding:0 0 0 5vw;
}
.input-contact{
width:250vw;
display:flex;
flex-direction:column;
margin-bottom:2rem;
}

.textarea{
font-size:7vw !important;
height:100vh;
padding:2vw 0 0 5vw;
margin-top:-50vw;
}

.blob-con-2{
position:relative;
width:50vw;
z-index:-1;
top:1vw;
left:120vw;
}
 
 }
 @media(width<=998px){
 
.blob-con-1{
position:relative;
max-width:50vw;
left:10vw;
top:-18vw;
z-index:-1;
}

.contact-container{

width:300vw;
height:400vh;
width:300vw;
margin-top:80vw;
margin-bottom:30vw;
margin-left:40vw;
}

.contact-form{

margin-left:35vw;
margin-top:-50vw;
max-width:500vw;
height:100vh;
}

.cont-inp{
gap:2rem;
}
.edu-border{
margin-left:110vw;
}



.contact-form input{

font-size:6vw;
height:25vh;
margin-bottom:2rem;
padding:0 0 0 5vw;
}
.input-contact{

width:250vw;
display:flex;
flex-direction:column;
margin-bottom:2rem;
}

.textarea{
font-size:6vw;
height:100vh;
padding:2vw 0 0 5vw;
margin-top:-50vw;
}

.blob-con-2{
position:relative;
width:50vw;
z-index:-1;
top:1vw;
left:120vw;
}
 
 }
 @media(width<=768px){
 
.blob-con-1{
position:relative;
max-width:60vw;
left:10vw;
top:-18vw;
z-index:-1;
}

.contact-container{
height:400vh;
width:300vw;
margin-top:80vw;
margin-bottom:30vw;
margin-left:40vw;
}

.contact-form{
margin-left:38vw;
margin-top:-50vw;
max-width:500vw;
height:100vh;
}

.cont-inp{
gap:2rem;
}
.edu-border{
margin-left:110vw;
}



.contact-form input{
font-size:8vw !important;
height:25vh;
margin-bottom:2rem;
padding:0 0 0 5vw;
}
.input-contact{
width:250vw;
display:flex;
flex-direction:column;
margin-bottom:2rem;
}

.textarea{
font-size:8vw !important;
height:100vh;
padding:2vw 0 0 5vw;
margin-top:-50vw;
}

.blob-con-2{
position:relative;
width:50vw;
z-index:-1;
top:1vw;
left:120vw;
}
 }
 @media(width<=600px){
 
.contact-form input{
font-size:9vw !important;
}


.contact-container{
  height:400vh;
  width:300vw;
  margin-top:150vw !important;
  margin-bottom:30vw;
  margin-left:40vw;
  }

.textarea{
font-size:9vw !important;
}
 }
    @media(width<=500px){
 
.contact-form input{
font-size:10vw !important;
}


.contact-container{
  height:400vh;
  width:300vw;
  margin-top:150vw !important;
  margin-bottom:-20vw !important;
  margin-left:40vw;
  }

.textarea{
font-size:10vw !important;
}
    }


     @media(width<=400px){
  
.contact-form input{
font-size:10vw !important;
}


.contact-container{
  height:300vh;
  width:300vw;
  margin-top:150vw !important;
  margin-bottom:-50vw !important;
  margin-left:40vw;
  }

.textarea{
font-size:10vw !important;
height:60vh;
}
     }
     @media(width<=370px){
  
.contact-form input{
font-size:12vw !important;
width:122vw;
}


.contact-container{
  height:300vh;
  width:300vw;
  margin-top:150vw !important;
  margin-bottom:-50vw !important;
  margin-left:40vw;
  }

.textarea{
font-size:12vw !important;
height:60vh;
}
     }

@media(width<=320px){
  
.contact-form input{
font-size:14vw !important;
width:122vw;
}
.edu-border{
margin-left:90vw;
max-width:70vw;
}


.contact-container{
  height:200vh;
  width:300vw;
  margin-top:60vw !important;
  margin-bottom:-50vw !important;
  margin-left:40vw;
  }

.textarea{
font-size:14vw !important;
height:60vh;
}

}



`;

export default Contact;

