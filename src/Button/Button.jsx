import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Button = ({name,click})=>{
    return(
        <Fragment>
        <ButtonWrap>
        
        {
            name==="Github"?
            <NavLink exact to="https://github.com/Prriya-Karn" target="_blank">
            <button className="heroButton">
            {name}
            </button>
            </NavLink>:
            name === "Download CV"?
            <a href="https://drive.google.com/file/d/1ZXvpuMg7IEV8e6RZPW67myLO1EYOWw4Z/view?usp=drive_link"
             target="_blank">
            <button className="heroButton">
            {name}
            </button>
            </a>
            :
            <button className="heroButton" onClick={click}>{name}</button>
        }
        
        </ButtonWrap> 
        </Fragment>
    )
}


const ButtonWrap = styled.div`
button{
outline:none;
background: linear-gradient(45deg,rgba(0, 45, 80, 0.8),rgba(0, 45, 80, 0.8) 40%, rgba(0, 45, 80, 0.5) 60%, rgba(0, 45, 80, 0.8) 80%,rgba(0, 45, 80, 0.8));
    font-size: ${({ theme }) => theme.fontSize.buttonfontSize};
    padding: 1rem 5rem;
    line-height: 2.5rem;
    max-width: 50rem;
    color: ${({ theme }) => theme.colors.white};

    cursor: pointer;
    transition: all 0.1s ease;
}
   
button:active{
transform : scale(0.9);
}


@media(width<=768px){


}
@media(width<=320px){
  button{
  background-color:orange;
 font-size:20vw !important; 
}
}

@media(width<=400px){
  .heroButton{
 font-size:15vw !important; 
}
}

@media(width<=370px){
.heroButton{
outline:none;
background: linear-gradient(45deg,rgba(0, 45, 80, 0.8),rgba(0, 45, 80, 0.8) 40%, rgba(0, 45, 80, 0.5) 60%, rgba(0, 45, 80, 0.8) 80%,rgba(0, 45, 80, 0.8));
    font-size: 10vw !important;
    padding: 1rem 5rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: all 0.1s ease;
    height:11vh;
    width:300% !important;
}
}

@media(width<=600px){
.heroButton{
outline:none;
background: linear-gradient(45deg,rgba(0, 45, 80, 0.8),rgba(0, 45, 80, 0.8) 40%, rgba(0, 45, 80, 0.5) 60%, rgba(0, 45, 80, 0.8) 80%,rgba(0, 45, 80, 0.8));
    font-size: 8vw !important;
    padding: 1rem 5rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: all 0.1s ease;
    height:11vh;
    width:300% !important;
}

}


@media(width<=998px){
.heroButton{
outline:none;
background: linear-gradient(45deg,rgba(0, 45, 80, 0.8),rgba(0, 45, 80, 0.8) 40%, rgba(0, 45, 80, 0.5) 60%, rgba(0, 45, 80, 0.8) 80%,rgba(0, 45, 80, 0.8));
    font-size: ${({ theme }) => theme.fontSize.buttonfontSize};
    padding: 1rem 5rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: all 0.1s ease;
    height:11vh;
    width:500%;
}

}


@media(width<=1220px){
button{
outline:none;
background: linear-gradient(45deg,rgba(0, 45, 80, 0.8),rgba(0, 45, 80, 0.8) 40%, rgba(0, 45, 80, 0.5) 60%, rgba(0, 45, 80, 0.8) 80%,rgba(0, 45, 80, 0.8));
    font-size: 4vw;
    padding: 1rem 5rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: all 0.1s ease;
    height:18vh;
    width:500vw !important;
}
}
@media(width<=1220px){

.heroButton{
outline:none;
background: linear-gradient(45deg,rgba(0, 45, 80, 0.8),rgba(0, 45, 80, 0.8) 40%, rgba(0, 45, 80, 0.5) 60%, rgba(0, 45, 80, 0.8) 80%,rgba(0, 45, 80, 0.8));
    font-size: 5vw;
    padding: 1rem 5rem;
    line-height: 2.5rem;
    color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    transition: all 0.1s ease;
    height:18vh;
    width:100vw !important;
}
}
`;

export default Button;