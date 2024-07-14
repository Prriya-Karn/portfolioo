import React, { Fragment } from "react";
import styled from "styled-components";
const Footer = ()=>{
    return(
        <Fragment>
        <FooterWrapper>
       <div className="footerContainer">
       <p>Copyright @ 2024 by @priyakarncode | All Rights Reserved.</p>
       <div className="footImg">
       <img src="/Images/top.png"/> 
       </div>
      
       </div>
       </FooterWrapper>
        </Fragment>
    )

};

const FooterWrapper = styled.div`
.footerContainer{
display:grid;
gap:2rem;
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

.footImg{
}



`;

export default Footer;

