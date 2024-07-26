import React, { Fragment } from "react";
import styled from "styled-components";
const Skills = ()=>{
    return(
        <Fragment>
        <SkillWrapper>
        
        <div className="skills-section">
                <h1>Skills</h1>
                <br></br>
                <div className="skill-border">.</div>

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
.skill-border{
 background-color:${({theme})=>theme.colors.buttonBackColor};
 border-radius : 1rem;
 max-width:12rem;
 height:0.5rem;

   margin-bottom:2rem;  
 
}
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



 @media(width<=1220px){

 .skills-section{
width:70vw;
margin-top:10vw;
margin-left:10vw;
}

.skills-section h1{
font-size : 8vw;
line-height:20vh;
}



.skill-bar{
margin-top:1rem;
max-width:70vw;
line-height:12vh;
}
.skill p{
font-size :3vw !important;
}


.container-bar{
border-radius:1rem;
background-color:${({theme})=>theme.colors.lightGrey};
max-width:100%;
height:3vh;

}

.html-bar{
border-radius:1rem;
max-width:50vw;
height:3vh;
color:white;
background-color: ${({theme})=>theme.colors.buttonBackColor};
}

.css-bar{
border-radius:1rem;
height:3vh;
max-width:30vw;
color:white;
background-color: ${({theme})=>theme.colors.buttonBackColor};
}

.js-bar{
border-radius:1rem;
max-width:55vw;
height:3vh;
color:white;
background: ${({theme})=>theme.colors.buttonBackColor};
}

.dsa-bar{
border-radius:1rem;
max-width:20vw;
height:3vh;
color:white;
background-color: ${({theme})=>theme.colors.buttonBackColor};
}

.react-bar{
border-radius:1rem;
height:3vh;
max-width:45vw;
color:white;
background-color: ${({theme})=>theme.colors.buttonBackColor};
}

.python-bar{
border-radius:1rem;
height:3vh;
max-width:30vw;
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
 
 }

 @media(width<=800px){

 .skills-section{
    width:90vw;
    margin-top:10vw;
    margin-left:10vw;

   
    }
    
    .skills-section h1{
    font-size : 8vw;
    line-height:20vh;
    }
    
    
    
    .skill-bar{
    
    margin-top:1rem;
   max-width:80vw;
    line-height:12vh;
    }
    .skill p{
    font-size :3vw !important;
    }
    
    
    .container-bar{
    max-width:100%;
    height:3vh;
    
    }
    
    .html-bar{
  
    max-width:50vw;
    height:3vh;
     }
    
    .css-bar{
  
    height:3vh;
    max-width:30vw;
    color:white;
    background-color: ${({theme})=>theme.colors.buttonBackColor};
    }
    
    .js-bar{
  
    max-width:55vw;
    height:3vh;
    color:white;
    background: ${({theme})=>theme.colors.buttonBackColor};
    }
    
    .dsa-bar{
  
    max-width:20vw;
    height:3vh;
    color:white;
    background-color: ${({theme})=>theme.colors.buttonBackColor};
    }
    
    .react-bar{
    border-radius:1rem;
    height:3vh;
    max-width:45vw;
    color:white;
    background-color: ${({theme})=>theme.colors.buttonBackColor};
    }
    
    .python-bar{
    border-radius:1rem;
    height:3vh;
    max-width:30vw;
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
     
 }
@media(width<=768px){
  .skill p{
    font-size :4vw !important;
    }
    
 .python-bar{
    height:3vh;
    max-width:40vw;
    color:white;
    }
       .css-bar{
    border-radius:1rem;
    height:3vh;
    max-width:40vw;
    color:white;
    background-color: ${({theme})=>theme.colors.buttonBackColor};
    }
     .html-bar{
    border-radius:1rem;
    max-width:60vw;
    height:3vh;
    color:white;
    background-color: ${({theme})=>theme.colors.buttonBackColor};
    }
}

@media(width<=600px){

.skills-section{

    width:100vw;
    margin-top:1vw;
    margin-left:10vw;
   
    }
    
    .skills-section h1{
    font-size : 8vw;
    line-height:6vh;
    }
    
    
    
    .skill-bar{
    
    margin-top:5vw;
   max-width:100vw;
    line-height:8vh;
    }
    .skill p{
    font-size :3vw !important;
    }
    
    
    .container-bar{
    max-width:100%;
    height:3vh;
    
    }
    
    .html-bar{
    max-width:50vw;
    height:3vh;
     }
    
    .css-bar{
    border-radius:1rem;
    height:3vh;
    max-width:30vw;
     }
    
    .js-bar{
    border-radius:1rem;
    max-width:55vw;
    height:3vh;
    color:white;
    background: ${({theme})=>theme.colors.buttonBackColor};
    }
    
    .dsa-bar{
    border-radius:1rem;
    max-width:20vw;
    height:3vh;
     }
    
    .react-bar{
    border-radius:1rem;
    height:3vh;
    max-width:45vw;
     }
    
    .python-bar{
    height:3vh;
    max-width:30vw;
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
}


@media(width<=400px){
.skill-border{
 background-color:${({theme})=>theme.colors.buttonBackColor};
 border-radius : 1rem;
 max-width:12rem;
 height:0.5rem;
line-height:2vh;
   margin-bottom:5vw;  
 
}
.skills-section{
    width:200vw;
    margin-top:30vw;
    margin-left:10vw;

    }
    
    .skills-section h1{
    font-size : 16vw;
    line-height:6vh;
    margin-bottom:5vw;
    }
    
    
    
    .skill-bar{
    margin-top:8vw;
   max-width:300vw !important;
    line-height:16vh;
    }
    .skill p{
    font-size:10vw !important;
    }
    
    
    .container-bar{
    max-width:100%;
    height:3vh;
    
    }
    
    .html-bar{
    max-width:70vw;
    height:3vh;
     }
    
    .css-bar{
    height:3vh;
    max-width:50vw;
     }
    
    .js-bar{
    max-width:80vw;
    height:3vh;
    color:white;
    background: ${({theme})=>theme.colors.buttonBackColor};
    }
    
    .dsa-bar{
    border-radius:1rem;
    max-width:30vw;
    height:3vh;
     }
    
    .react-bar{
    border-radius:1rem;
    height:3vh;
    max-width:60vw;
     }
    
    .python-bar{
    height:3vh;
    max-width:50vw;
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
}

@media(width<=320px){
.skills-section{
    width:200vw;
    margin-top:40vw;
    margin-left:10vw;

    }

      .html-bar{
    max-width:150vw;
    height:3vh;
     }
    
    .css-bar{
    height:3vh;
    max-width:120vw;
     }
    
    .js-bar{
    max-width:170vw;
    height:3vh;
    color:white;
    background: ${({theme})=>theme.colors.buttonBackColor};
    }
    
    .dsa-bar{
    border-radius:1rem;
   max-width:90vw;
    height:3vh;
     }
    
    .react-bar{
    height:3vh;
     max-width:150vw;
     }
    
    .python-bar{
    height:3vh;
    max-width:120vw;
    }
}

`;

export default Skills;