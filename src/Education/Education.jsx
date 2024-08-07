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
        <h1>Diploma In Information Technology</h1>
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


@media(width<=1220px){
.edu-container{
width:300vw;
  margin-top:-30vw !important;
  margin-left:40vw;
 height:200vh;
  }
  .edu-head{
font-size:20vw;
  text-align:center;
  }
  .edu-border{
  margin-top:1rem;
  margin-left:102vw;
  margin-bottom:10vw;
  max-width:50vw;
  height:2vh;
  }
  
  .main-edu-card{
  width:300vw;
  margin-left:20vw;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  height:15rem;
  position:relative;
  }
    .diploma{

  max-width:200vw;
  height:150vh;
  margin-left:-10vw;
  border-radius:1rem;
  }

  .btech{
  background-color:${({theme})=>theme.colors.eduboxColor};
  border-radius:1rem;
  max-width:200vw;
  height:150vh;
  }


  .blob-edu{
  position:absolute;
  top:-20vw;
  left:-30vw;
  z-index:-1;
  width:70vw;
  }
      
  .blob-edu-1{
  position:absolute;
  top:-9vw;
  left:230vw;
  z-index:-1;
  width:80vw;
  
  
  }

  
  .main-edu-card h1{
  font-size: 10vw;
  width:150vw;
  }
  
  .content{
  padding-left:8vw;
  padding-top:4vw;
  }
  
  .main-edu-card p{
  font-size : 5vw;
  }
  
  .edu-name{
  margin-top:1rem;
  }
  .cg{
  margin-top:1rem;
  }
  
}
 @media(width<=800px){
 .edu-container{
width:300vw;
  margin-top:-30vw !important;
  margin-left:40vw;
 height:200vh;
  }
  .edu-head{
font-size:20vw;
  text-align:center;
  }
  .edu-border{
  margin-top:1rem;
  margin-left:102vw;
  margin-bottom:10vw;
  max-width:50vw;
  height:2vh;
  }
  
  .main-edu-card{
  width:300vw;
  margin-left:20vw;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  height:15rem;
  position:relative;
  }
    .diploma{

  max-width:200vw;
  height:150vh;
  margin-left:-10vw;
  border-radius:1rem;
  }

  .btech{
  background-color:${({theme})=>theme.colors.eduboxColor};
  border-radius:1rem;
  max-width:200vw;
  height:150vh;
  }


  .blob-edu{
  position:absolute;
  top:-20vw;
  left:-30vw;
  z-index:-1;
  width:70vw;
  }
      
  .blob-edu-1{
  position:absolute;
  top:-9vw;
  left:230vw;
  z-index:-1;
  width:80vw;
  
  
  }

  
  .main-edu-card h1{
  font-size: 10vw;
  width:150vw;
  }
  
  .content{
  padding-left:8vw;
  padding-top:4vw;
  }
  
  .main-edu-card p{
   margin-top:4vw;
  font-size : 6vw;
  }
  
  .edu-name{
  margin-top:1rem;
  }
  .cg{
  margin-top:1rem;
  }
 }
 @media(width<=998px){
.edu-container{
width:300vw;
  margin-top:-30vw !important;
  margin-left:40vw;
 height:200vh;
  }
  .edu-head{
font-size:20vw;
  text-align:center;
  }
  .edu-border{
  margin-top:1rem;
  margin-left:102vw;
  margin-bottom:10vw;
  max-width:50vw;
  height:2vh;
  }
  
  .main-edu-card{
  width:300vw;
  margin-left:20vw;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  height:15rem;
  position:relative;
  }
    .diploma{

  max-width:200vw;
  height:150vh;
  margin-left:-10vw;
  border-radius:1rem;
  }

  .btech{
  background-color:${({theme})=>theme.colors.eduboxColor};
  border-radius:1rem;
  max-width:200vw;
  height:150vh;
  }


  .blob-edu{
  position:absolute;
  top:-20vw;
  left:-30vw;
  z-index:-1;
  width:70vw;
  }
      
  .blob-edu-1{
  position:absolute;
  top:-9vw;
  left:230vw;
  z-index:-1;
  width:80vw;
  
  
  }

  
  .main-edu-card h1{
  font-size: 10vw;
  width:150vw;
  }
  
  .content{
  padding-left:8vw;
  padding-top:4vw;
  }
  
   .main-edu-card p{
   margin-top:4vw;
  font-size : 6vw;
  }
  .edu-name{
  margin-top:1rem;
  }
  .cg{
  margin-top:1rem;
  }
 }
 
@media(width<=768px){
 .edu-container{
width:300vw;
  margin-top:-30vw !important;
  margin-left:40vw;
 height:200vh;
  }
  .edu-head{
font-size:20vw;
  text-align:center;
  }
  .edu-border{
  margin-top:1rem;
  margin-left:102vw;
  margin-bottom:10vw;
  max-width:50vw;
  height:2vh;
  }
  
  .main-edu-card{
  width:300vw;
  margin-left:20vw;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  height:15rem;
  position:relative;
  }
    .diploma{

  max-width:200vw;
  height:150vh;
  margin-left:-10vw;
  border-radius:1rem;
  }

  .btech{
  background-color:${({theme})=>theme.colors.eduboxColor};
  border-radius:1rem;
  max-width:200vw;
  height:150vh;
  }


  .blob-edu{
  position:absolute;
  top:-20vw;
  left:-30vw;
  z-index:-1;
  width:70vw;
  }
      
  .blob-edu-1{
  position:absolute;
  top:-9vw;
  left:230vw;
  z-index:-1;
  width:80vw;
  
  
  }

  
  .main-edu-card h1{
  font-size: 10vw;
  width:150vw;
  }
  
  .content{
  padding-left:8vw;
  padding-top:10vw;
  }
  
  .main-edu-card p{
   margin-top:4vw;
  font-size : 7vw;
  }
  
  .edu-name{
  margin-top:1rem;
  }
  .cg{
  margin-top:1rem;
  }
}


@media(width<=600px){
.edu-container{
width:300vw;
  margin-top:-30vw !important;
  margin-left:40vw;
 height:200vh;
  }
  .edu-head{
font-size:20vw;
  text-align:center;
  }
  .edu-border{
  margin-top:1rem;
  margin-left:102vw;
  margin-bottom:10vw;
  max-width:50vw;
  height:2vh;
  }
  
  .main-edu-card{
  width:300vw;
  margin-left:20vw;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  height:15rem;
  position:relative;
  }
    .diploma{

  max-width:200vw;
  height:150vh;
  margin-left:-10vw;
  border-radius:1rem;
  }

  .btech{
  background-color:${({theme})=>theme.colors.eduboxColor};
  border-radius:1rem;
  max-width:200vw;
  height:150vh;
  }


  .blob-edu{
  position:absolute;
  top:-20vw;
  left:-30vw;
  z-index:-1;
  width:70vw;
  }
      
  .blob-edu-1{
  position:absolute;
  top:-9vw;
  left:230vw;
  z-index:-1;
  width:80vw;
  
  
  }

  
  .main-edu-card h1{
  font-size: 12vw;
  width:150vw;
  }
  
  .content{
  padding-left:8vw;
  padding-top:10vw;
  }
  
  .main-edu-card p{
   margin-top:4vw;
  font-size : 8vw;
  }
  
  .edu-name{
  margin-top:1rem;
  }
  .cg{
  margin-top:1rem;
  }
}

   @media(width<=500px){
  .edu-container{
width:300vw;
  margin-top:-30vw !important;
  margin-left:40vw;
 height:200vh;
  }
  .edu-head{
font-size:20vw;
  text-align:center;
  }
  .edu-border{
  margin-top:1rem;
  margin-left:102vw;
  margin-bottom:10vw;
  max-width:50vw;
  height:2vh;
  }
  
  .main-edu-card{
  width:300vw;
  margin-left:20vw;
  display:grid;
  grid-template-columns:repeat(2,1fr);
  height:15rem;
  position:relative;
  }
    .diploma{

  max-width:200vw;
  height:120vh;
  margin-left:-20vw;
  border-radius:1rem;
  }

  .btech{
  background-color:${({theme})=>theme.colors.eduboxColor};
  border-radius:1rem;
  max-width:200vw;
  height:120vh;
  }


  .blob-edu{
  position:absolute;
  top:-20vw;
  left:-30vw;
  z-index:-1;
  width:70vw;
  }
      
  .blob-edu-1{
  position:absolute;
  top:-9vw;
  left:230vw;
  z-index:-1;
  width:80vw;
  
  
  }

  
  .main-edu-card h1{
  font-size: 12vw;
  width:150vw;
  }
  
  .content{
  padding-left:8vw;
  padding-top:10vw;
  }
  
  .main-edu-card p{
   margin-top:4vw;
  font-size : 9vw;
  }
  
  .edu-name{
  margin-top:1rem;
  }
  .cg{
  margin-top:1rem;
  }
   }
   @media(width<=400px){

  .edu-container{
width:300vw !important;
  margin-top:-60vw !important;
  margin-left:40vw;
 height:300vh;
  }
  .edu-head{
       font-size:18vw;
  }
  .edu-border{
  margin-top:1rem;
  margin-left:110vw;
  margin-bottom:10vw;
  max-width:50vw;
  height:2vh;
  }
  
  .main-edu-card{
  width:300vw;
  margin-left:3vw;
      margin-top:30vw;
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows:repeat(2,1fr);
  gap:10vw;

  position:relative;
  }
    .diploma{
    order:1;
  max-width:500vw;
  height:130vh;
  margin-left:-1vw;
  border-radius:7rem;
  }

  .btech{
  order:2;
    border-radius:7rem;
 margin-left:-1vw;
  background-color:${({theme})=>theme.colors.eduboxColor};
  max-width:500vw;
  height:130vh;
  }


  .blob-edu{
  display:none;
  }
      
  .blob-edu-1{
  display:none;
  }

  
  .main-edu-card h1{
  width:290vw;
  font-size: 17vw;
  }
  
  .content{
  padding-left:20vw;
  padding-top:30vw;
  }
  
  .main-edu-card p{
  width:200vw;
  margin-top:5vw;
  font-size : 14vw;
  }
  
  .edu-name{
  margin-top:1rem;
  }
  .cg{
  margin-top:1rem;
  }
   }

   @media(width<=370px){

  .edu-container{
  margin-top:-50vw !important;
width:300vw !important;
  margin-left:40vw;
 height:300vh;
  }
  .edu-head{
       font-size:18vw;
  }
  .edu-border{
  margin-top:1rem;
  margin-left:110vw;
  margin-bottom:10vw;
  max-width:50vw;
  height:2vh;
  }
  
  .main-edu-card{
     margin-top:30vw;
  width:300vw;
  margin-left:3vw;
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows:repeat(2,1fr);
  gap:10vw;

  position:relative;
  }
    .diploma{
    order:1;
  max-width:500vw;
  height:130vh;
  margin-left:-1vw;
  border-radius:7rem;
  }

  .btech{
  order:2;
    border-radius:7rem;
 margin-left:-1vw;
  background-color:${({theme})=>theme.colors.eduboxColor};
  max-width:500vw;
  height:130vh;
  }


  .blob-edu{
  display:none;
  }
      
  .blob-edu-1{
  display:none;
  }

  
  .main-edu-card h1{
  width:290vw;
  font-size: 17vw;
  }
  
  .content{
  padding-left:20vw;
  padding-top:30vw;
  }
  
  .main-edu-card p{
  width:200vw;
  margin-top:5vw;
  font-size : 14vw;
  }
  
  .edu-name{
  margin-top:1rem;
  }
  .cg{
  margin-top:1rem;
  }
  
  }
   @media(width<=320px){
   
  .edu-container{
  
  margin-top:-50vw !important;
width:300vw !important;
  margin-left:40vw;
 height:300vh;
  }
  .edu-head{
       font-size:18vw;
  }
  .edu-border{
  margin-top:1rem;
  margin-left:110vw;
  margin-bottom:10vw;
  max-width:50vw;
  height:2vh;
  }
  
  .main-edu-card{
     margin-top:30vw;
  width:300vw;
  margin-left:-2vw;
  display:grid;
  grid-template-columns:1fr;
  grid-template-rows:repeat(2,1fr);
  gap:10vw;

  position:relative;
  }
    .diploma{
    order:1;
  max-width:500vw;
  height:120vh;
  margin-left:-1vw;
  border-radius:7rem;
  }

  .btech{
  order:2;
    border-radius:7rem;
 margin-left:-1vw;
  background-color:${({theme})=>theme.colors.eduboxColor};
  max-width:500vw;
  height:120vh;
  }


  .blob-edu{
  display:none;
  }
      
  .blob-edu-1{
  display:none;
  }

  
  .main-edu-card h1{
  width:290vw;
  font-size: 20vw;
  }
  
  .content{
  padding-left:20vw;
  padding-top:30vw;
  }
  
  .main-edu-card p{
  width:300vw;
  margin-top:10vw;
  font-size : 14vw;
  }
  
  .edu-name{
  margin-top:1rem;
  }
  .cg{
  margin-top:1rem;
  }
  
  }




`;

export default Education;



