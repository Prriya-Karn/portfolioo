import React, { Fragment } from "react";
import styled from "styled-components";
const Skills = ()=>{
    return(
        <Fragment>
        <SkillWrapper>
        
        <div className="skills-section">
                <h1>Skills:-</h1>
                <div className="skill-bar">
                <div className="skill html">
                <p>HTML 80%</p>
                <div className="container-bar">
                <div className="html-bar"><p className="dot">.</p></div>
                </div>

                </div>

                <div className="skill css">
                <p>CSS 70%</p>
                <div className="container-bar">
                <div className="css-bar"><p className="dot">.</p></div>
                </div>
                </div>
                
                <div className="skill js">
                <p>JavaScript 90%</p>
                <div className="container-bar">
                <div className="js-bar"><p className="dot">.</p></div>
                </div>
                </div>

                <div className="skill react">
                <p>React 80%</p>
                <div className="container-bar">
                <div className="react-bar">
                <p className="dot">.</p>
                </div>
                </div>
                </div>

                <div className="skill css">
                <p>DSA 50%</p>
                <div className="container-bar">
                <div className="dsa-bar">
                <p className="dot">.</p>
                </div>
                </div>
                </div>

                <div className="skill css">
                <p>Python 70%</p>
                <div className="container-bar">
                <div className="python-bar"><p className="dot">.</p></div>
                </div>
                </div>
                </div>



                </div>

            

                </SkillWrapper>
        </Fragment>
    )
}

const SkillWrapper = styled.div`
.skills-section{
width:50rem;
margin-top:-2rem;
margin-left:20rem;
}

.skills-section h1{
font-size : ${({theme})=>theme.fontSize.skillsFont};
color: ${({theme})=>theme.colors.buttonBackColor};
transition : all 0.6s;
}



.skill-bar{
margin-top:1rem;
max-width:50rem;
}
.skill p{
font-size : ${({theme})=>theme.fontSize.skillsFont};
}


.container-bar{
border-radius:1rem;
background-color:${({theme})=>theme.colors.lightGrey};
max-width:50rem;
}

.html-bar{
border-radius:1rem;
max-width:30rem;
color:white;
background-color: ${({theme})=>theme.colors.buttonBackColor};
}

.css-bar{
border-radius:1rem;
max-width:20rem;
color:white;
background-color: ${({theme})=>theme.colors.buttonBackColor};
}

.js-bar{
border-radius:1rem;
max-width:40rem;
color:white;
background: ${({theme})=>theme.colors.buttonBackColor};
}

.dsa-bar{
border-radius:1rem;
max-width:10rem;
color:white;
background-color: ${({theme})=>theme.colors.buttonBackColor};
}

.react-bar{
border-radius:1rem;
max-width:30rem;
color:white;
background-color: ${({theme})=>theme.colors.buttonBackColor};
}

.python-bar{
border-radius:1rem;
max-width:20rem;
color:white;
background-color: ${({theme})=>theme.colors.buttonBackColor};
}
.skill .dot{
color: ${({theme})=>theme.colors.buttonBackColor};
font-size:1rem;
}
.skill{
margin-top:1rem;
}
.skill p{
font-size : ${({theme})=>theme.fontSize.skillP};
margin-bottom:0.5rem;
}
`;

export default Skills;