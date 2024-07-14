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

<div>
<iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448193.9510303648!2d76.76356891374637!3d28.64428735347703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1720986009880!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>


<form className="contact-form">
<div className="input-contact">
<input type="text" placeholder="Your Name"/>
<input type="email" placeholder="Your Email"/>
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

.edu-border{
margin-left:65rem;
}

.map{
width:180rem;
height:20rem;
}

.contact-form{
margin-left:50rem;
margin-top:2rem;
max-width:50rem;
height:auto;
}

.contact-form input{
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
height:10rem;
padding:1rem 0 0 1rem;
outline:none;
}
`;

export default Contact;