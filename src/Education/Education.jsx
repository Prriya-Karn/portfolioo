import React, { Fragment } from "react";
import styled from "styled-components";
const Education=()=>{
    return(
        <Fragment>
        <EducationWrapper>
        <div className="edu-container">
        <h1 className="edu-head">Education</h1>
        <div className="edu-border">.</div>
        <div className="main-edu-card">
        <div className="diploma">
        <h1>2019-2022</h1>
        <h1>Diploma</h1>
        <p>Ambedkar Institute Of Technology</p>
        <p>CGPA: 8</p>
        </div>


        <div className="btech">
        <h1>2022-2025</h1>
        <p>BTECH</p>
        <p>Guru Tegh Bahadur Institute Of Technology</p>
        <p>CGPA: 8</p>
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
.edu-container .edu-head{
font-size:${({theme})=>theme.fontSize.eduHead};
text-align:center;
}
.edu-border{
margin-top:1rem;
margin-left:35rem;
max-width:90rem;
background-color:${({theme})=>theme.colors.buttonBackColor};
height:0.5rem;
border-radius:1rem;
}

`;

export default Education;