import React, { Fragment } from "react";
import styled from "styled-components";

const Button = (props)=>{
    return(
        <Fragment>
        <ButtonWrap>
        <button>{props.name}</button>
        
        </ButtonWrap>
        </Fragment>
    )
}


const ButtonWrap = styled.button`
button{
border:none;
 background-color: ${({ theme }) => theme.colors.buttonBackColor};
    font-size: ${({ theme }) => theme.fontSize.buttonfontSize};
    padding: 1rem 5rem;
    line-height: 2.5rem;
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.white};

    cursor: pointer;
    transition: all 0.3s ease;
   
}
button:active{
transform : scale(0.9);
}
`;

export default Button;