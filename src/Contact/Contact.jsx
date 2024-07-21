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
left:40rem;
top:-5rem;
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
border:1px solid ${({theme})=>theme.colors.buttonBackColor};
color:${({theme})=>theme.colors.buttonBackColor};
font-size:1.6rem;
min-height:18rem;
padding:1rem 0 0 1rem;
outline:none;
}
`;

export default Contact;