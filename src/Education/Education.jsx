import React, { Fragment } from "react";
import styled from "styled-components";
import Heading from "../Heading/Heading";
const Education=()=>{
    return(
        <Fragment>
        <EducationWrapper>
        <div className="edu-container">
        <Heading
        headName = "Education"
        className = "edu-border"
        />
        
        <div className="main-edu-card grid">
        <div className="diploma">
        <div className="content">
        <h1 className="edu-year">2019-2022</h1>
        <h1>Diploma In IT</h1>
        <p className="edu-name">Ambedkar Institute Of Technology</p>
        <p className="cg">CGPA: 8</p>
        </div>
        </div>


        <div className="btech">
        <div className="content">
        <h1 className="edu-year">2022-2025</h1>
        <h1>Bachelor Of Technology</h1>
        <p className="edu-name">Guru Tegh Bahadur Institute Of Technology</p>
        <p className="cg">CGPA: 8</p>
        </div>
        </div>
        </div>
        </div>
        </EducationWrapper>
        </Fragment>
    )

};


const EducationWrapper = styled.div`
.edu-container{
margin-top:-30rem;  
}
.edu-head{
font-size:${({theme})=>theme.fontSize.eduHead};
text-align:center;
}
.edu-border{
margin-top:1rem;
margin-left:67rem;
margin-bottom:2rem;
}

.main-edu-card{

display:grid;
gap:1rem;
height:15rem;
}

.diploma{
background-color:${({theme})=>theme.colors.eduboxColor};
max-width:50rem;
margin-left:25rem;
border-radius:1rem;
}
.btech{
background-color:${({theme})=>theme.colors.eduboxColor};
border-radius:1rem;
max-width:50rem;
}

.main-edu-card h1{
font-size: ${({theme})=>theme.fontSize.eduh1};
}

.content{
padding:3rem;
}

.edu-year{
color:${({theme})=>theme.colors.buttonBackColor};
}
.main-edu-card p{
text-transform : uppercase;
font-size : ${({theme})=>theme.fontSize.edup};
}

.edu-name{
margin-top:1rem;
}
.cg{
margin-top:1rem;
}

`;

export default Education;



