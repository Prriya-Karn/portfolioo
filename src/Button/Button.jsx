import React, { Fragment } from "react";
import styled from "styled-components";

const Button = (props)=>{
    return(
        <Fragment>
        <ButtonWrap>
        <button className="aboutme">{props.name}</button>
        </ButtonWrap>
        </Fragment>
    )
}


const ButtonWrap = styled.button`
.aboutme{
background-color: ${({theme})=>theme.colors.buttonBackColor};
font-size : ${({theme})=>theme.fontSize.buttonfontSize};
padding:1rem 5rem 1rem 5rem;
line-height:2.5rem;
max-width:50rem;
color : ${({theme})=>theme.colors.white};
border:none;
text-decoration:none;
cursor:pointer;
transition : all 0.3s ease;
border-radius : 1rem;
}
button:active{
transform : scale(0.9);
}
`;

export default Button;