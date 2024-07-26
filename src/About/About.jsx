import React, { Fragment } from "react";
import styled from "styled-components";
import Skills from "./Skills";
import Button from "../Button/Button";
import Pro1 from "../Images/portfoliopro1.png";
const About = () => {
    return (
        <Fragment>
        <AboutWrap>
            <section className="about-section">
                <div className="hero-container grid">

                <div className="about-image">
                <div className="about-image-left">
                <img src={Pro1}/>
                </div>
                <div className="about-image-right">
                <p><span>Name:</span> Priya Karn</p>
                <p className="role"><span>Job Role:</span> Frontend Development</p>
                 
                <p><span>Experience:</span> 3 Months Internship at ConnectOp</p>
                <p><span>Address:</span> Delhi,India</p>
                
                </div>

                <Skills/>


                </div>
                

                    <div className="hero-data about-data">
                   <div className="mob-about">
                   <h1>About Me</h1>
                   </div>
                    
                    <div className="about-border">.</div>
                    <p>I'm Priya Karn. A Front End Developer,youtuber,and freelancer.
                    A Front End Developer,youtuber,and freelancer.
                    </p>
                  
                    <div className="profile">
                    <div className="pro-left">
                    <p className="pro-para-left">Profile:</p>
                    <p className="pro-para-left">Degree:</p>
                    <p className="pro-para-left">Education:</p>
                    <p className="pro-para-left">Language:</p>
                    <p className="pro-para-left">Tools:</p>
                    <p className="pro-para-left">Other Skills:</p>
                    <p className="pro-para-left">Interest:</p>
                    </div>

                    <div className="pro-right">
                    <p className="pro-para-right">Frontend Developer</p>
                    <p className="pro-para-right">BTECH</p>
                    <p className="pro-para-right">GTBIT</p>
                    <p className="pro-para-right">English,Hindi</p>
                    <p className="pro-para-right">Figma,VsCode</p>
                    <p className="pro-para-right">AWS,Cloud Computing</p>
                    <p className="pro-para-right">Travelling,</p>
                    </div>
                    </div>
<Button
name = "Github"
/>
                    </div>
                  
                </div>
            </section>
            </AboutWrap>
        </Fragment>
    )
}


const AboutWrap = styled.section`
section{
padding:9rem 0;
margin-bottom : 40rem;
}



.about-image{

  
height:auto;
display:grid;

  grid-template-columns : repeat(2,1fr);
}
  .about-image-left{
  max-width:15rem;
  height:20rem;
 margin-left:17.5rem;
  }
   .about-image-left img{
  height: 15rem;
  border-radius: 50%;
  border:1px solid ${({theme})=>theme.colors.buttonBackColor};
  background-color:${({theme})=>theme.colors.lightGrey};
  margin-top:-1rem;
   }


.about-image-right{
margin-left:-33rem;
width:40rem;
margin-top:1rem;
height:10rem;
}

.about-image-right p{
font-size:${({theme})=>theme.fontSize.aboutImageParaSize};
line-height:3rem;
}

.about-image-right span{
color:${({theme})=>theme.colors.buttonBackColor};
font-weight:bold;

}

.javascript{
margin-top:-1.5rem;
}

.profile{
margin-bottom:2rem;
margin-top:3rem;
max-width:40rem;
height:auto;
display:grid;

  gap:0rem;
  grid-template-columns : repeat(2,1fr);
}
.pro-left .pro-para-left{
font-size:${({theme})=>theme.fontSize.profileSize};
color: ${({theme})=>theme.colors.buttonBackColor};
font-weight:bold;
}
.pro-para-right{
color: ${({theme})=>theme.colors.buttonBackColor};

}

.frontend{
margin-top:-0.5rem;
margin-bottom:2rem;
font-size:2.5rem;

}
.hero-image{
padding-left:30rem;
}

.hero-image img{
height:20rem;

}

.hero-data{
padding-left:10rem;
max-width:120rem;
}

.hero-data h5{
color:${({theme})=>theme.colors.grey};
font-size:1.5rem;
}


.hero-data h1{
color : ${({theme})=>theme.colors.buttonBackColor};
font-size:4rem;
font-weight:800;
display:flex;
flex-direction:columns;
    max-width:20rem; 
}
 .about-border{
 background-color:${({theme})=>theme.colors.buttonBackColor};
 border-radius : 1rem;
 max-width:12rem;
 height:0.5rem;

   margin-bottom:2rem;  
 
 
 }
.hero-data p{
max-width:40rem;
margin-top:0.5rem;
color : ${({theme})=>theme.colors.grey};
font-size:1.5rem;
margin-bottom:1.5rem;
}




 @media(width<=1220px){

 section{
padding:9rem 0;
margin-bottom : 70vw;
width:300vw;
height:200vh;
margin-left:60vw;
}



.about-image{

height:auto;
display:grid;
  grid-template-columns : repeat(2,1fr);

}

  .about-image-left{
width:200vw;
  height:90vh;
 margin-left:8vw;
  }
   .about-image-left img{
  height: 98vh;
  width:50vw;
  margin-top:-3vw;
   }


.about-image-right{
margin-left:-10vw;
width:80vw;
margin-top:1vw;
height:60vh;
}

.about-image-right p{
font-size:5vw;
line-height:15vh;
}

.profile{
margin-bottom:10vw;
margin-top:10vw;
max-width:80vw;
height:auto;
display:grid;

  grid-template-columns : repeat(2,1fr);
}

.pro-left .pro-para-left{
width:20vw;
font-size:4vw;
}

.about-data{
padding-left:10rem;
width:200vw;
margin-left:25vw;
}


.about-data h1{
font-size:10vw;
max-width:80%; 
}
 .about-border{
 max-width:30vw;
   margin-bottom:5vw;  
 }
.about-data p{
max-width:90vw;
font-size:4vw;
margin-bottom:2vw;
}
 }

 @media(width<=800px){
 
.about-image-right{
margin-left:-30vw;
width:80vw;
margin-top:1vw;
height:60vh;
}
 }
@media(width<=998px){}

@media(width<=768px){
 section{
padding:9rem 0;
margin-bottom : 70vw;
width:300vw;
height:200vh;
margin-left:60vw;
}



.about-image{

height:auto;
display:grid;
  grid-template-columns : repeat(2,1fr);

}

  .about-image-left{
width:100vw;
  height:20vh;
 margin-left:8vw;
  }
   .about-image-left img{
  height: 60vh;
  width:45vw;
  margin-top:1vw;
   }


.about-image-right{
margin-left:-40vw;
width:80vw;
margin-top:1vw;
height:60vh;
}

.about-image-right p{
font-size:5vw;
line-height:15vh;
}

}
@media(width<=600px){

.about-image-right p{
font-size:5vw;
line-height:10vh;
}
  .about-image-left img{
  height: 50vh;
  width:45vw;
  margin-top:1vw;
   }
}
   @media(width<=500px){
.about-image-right p{
font-size:5vw;
line-height:8vh;
}
  .about-image-left img{
  height: 40vh;
  width:45vw;
  margin-top:1vw;
   }
  
.profile{
margin-bottom:10vw;
margin-top:10vw;
max-width:80vw;
height:auto;
display:grid;
line-height:10vh;
  grid-template-columns : repeat(2,1fr);
}

.pro-left .pro-para-left{
width:20vw;

font-size:5vw;
}

.about-data{
padding-left:10rem;
width:200vw;
margin-left:25vw;
}


.about-data h1{
font-size:10vw;
max-width:80%; 
}
 .about-border{
 max-width:30vw;
   margin-bottom:5vw;  
 }
.about-data p{
max-width:90vw;
font-size:4vw;
margin-bottom:2vw;
}
  }


@media(width<=400px){
.hero-container{
grid-template-columns:1fr;
    margin-left:-20vw !important;
    height:600vh;
}
.about-image{
margin-top:50vw;
margin-bottom:40vw;
  order:2;
height:90vh;
display:grid;

  grid-template-columns : repeat(2,1fr);
}
.about-image-right{
  margin-left:-110vw;
  width:200vw;
  margin-top:1vw;
  height:60vh;
  }
  
.about-image-right p{
  font-size:12vw;
  line-height:12vh;
  }

   .about-image-left{
 
max-width:500vw !important;
   }
    .about-image-left img{
    height: 60vh !important;
   width:80vw !important;
    margin-top:1vw;
     }
    
  .profile{
  margin-bottom:8vw;
  margin-top:15vw;
  max-width:600vw;
  height:120vh;
  display:grid;
  line-height:12vh;
    grid-template-columns : repeat(2,1fr);
  }
  .pro-right .pro-para-right{
  width:150vw;
  height:15vh; 
  } 
  .pro-left .pro-para-left{
  width:80vw;
  height:15vh;
  font-size:12vw;
  }
  
  .about-data{
  order:1;
  padding-left:10rem;
  width:800vw;
  height:200vh;
  margin-left:-10vw;
  margin-bottom:-500vw;
  }
  
  
  .about-data h1{
  font-size:16vw;
  max-width:80%; 
  }
   .about-border{
   max-width:30vw;
     margin-bottom:12vw;  
   }
  .about-data p{
  max-width:600vw;
  font-size:12vw;
  margin-bottom:2vw;
  }
}

@media(width<=320px){
 
.hero-container{
grid-template-columns:1fr;

}
.about-image{
margin-top:30vw;
margin-bottom:40vw;
  order:2;
height:90vh;
display:grid;

  grid-template-columns : repeat(2,1fr);
}
.about-image-right{
  margin-left:-90vw;
  width:200vw;
  margin-top:2vw;
  height:60vh;
  }
  
.about-image-right p{
  font-size:10vw;
  line-height:10vh;
  }
     .about-image-left{
     width:300vw;
     }
    .about-image-left img{
    min-height: 50vh !important;
  width:100vw;
    margin-top:1vw;
     }
    
  .profile{
  margin-bottom:1vw;
  margin-top:10vw;
  max-width:300vw;
  height:120vh;
  display:grid;
  line-height:15vh;
    grid-template-columns : repeat(2,1fr);
  }
  
  .pro-left .pro-para-left{
  width:90vw;
    font-size:14vw;
  }
  
  .about-data{
  order:1;
  padding-left:10rem;
  width:500vw;
  margin-left:-10vw;
  margin-bottom:10vw;
  }
  
  
  .about-data h1{
  font-size:16vw;
  max-width:80%; 
  }
   .about-border{
   max-width:30vw;
     margin-bottom:5vw;  
   }
  .about-data p{
  max-width:250vw;
  font-size:14vw;
  margin-bottom:2vw;
  }
}

@media(width<=240px){}












`;
export default About;
