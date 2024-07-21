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
        <div className="blob-edu">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"  id="blobSvg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" style={{stopColor: "rgb(0, 45, 98)"}}></stop>
            <stop offset="100%" style={{stopColor: "rgb(196, 224, 229)"}}></stop>
          </linearGradient>
        </defs>
        <path id="blob" d="M413,323.5Q335,397,250.5,396Q166,395,117.5,322.5Q69,250,110,164.5Q151,79,262.5,57Q374,35,432.5,142.5Q491,250,413,323.5Z"
         fill="url(#gradient)"></path>
      </svg>
      </div>

      <div className="blob-edu-1">
      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" id="blobSvg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style={{stopColor: "rgb(0, 45, 98)"}}></stop>
      <stop offset="100%" style={{stopColor: "rgb(196, 224, 229)"}}></stop>
    </linearGradient>
  </defs>
  <path id="blob" d="M284.5,351Q133,452,161,298Q189,144,312.5,197Q436,250,284.5,351Z" fill="url(#gradient)"></path>
</svg>
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
position:relative;
}

.blob-edu{
position:absolute;
top:-13rem;
left:5rem;
z-index:-1;
width:50rem;
}
    
.blob-edu-1{
position:absolute;
top:-10rem;
left:100rem;
z-index:-1;
width:50rem;


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



