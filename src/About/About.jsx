import React, { Fragment } from "react";
import styled from "styled-components";
import Skills from "./Skills";
import Button from "../Button/Button";
import Pro1 from "../Images/portfoliopro1.png";
import { useLocation, useParams } from "react-router-dom";
import Footer from "../Footer/Footer";
const About = () => {

    return (
        <Fragment>
        <AboutWrap>
            <section  className="about-section" id="aboutus">
                <div className="hero-container grid">

                <div className="about-image">
                <div className="about-image-left">
                <img src={Pro1}/>
                </div>
                <div className="about-image-right">
                <p><span>Name:</span> Priya Karn</p>
                <p className="role"><span>Job Role:</span>Frontend Development</p>
                 
                <p className="role"><span>Internship:</span>@ ConnectOP</p>
                 
                <p><span>Address:</span> Delhi,India</p>
                
                </div>

                <Skills/>


                </div>
                

                    <div className="hero-data about-data">
                   <div className="mob-about">
                   <h1>About Me</h1>
                   </div>
                    
                    <div className="about-border">.</div>
                    <p>
                    Hi,🙋‍♀️ I'm Priya Karn, a front-end developer 
                    with a passion for creating stunning, user-friendly
                     web experiences. I specialize in HTML, CSS, JavaScript,
                     and ReactJS, turning complex ideas into clean, responsive designs.
                    Let's create something amazing together 😀!
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
overflow:hidden;
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
width:400vw;
height:400vh;
margin-top:40vw;
margin-left:10vw;
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
  height: 70vh;
  width:50vw;
  margin-top:-3vw;
   }


.about-image-right{
margin-left:-45vw;
width:100vw;
margin-top:1vw;
height:90vh;
}

.about-image-right p{
font-size:8vw;
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
.pro-right .pro-para-right{
width:200vw;
margin-left:10vw;
}
.pro-left .pro-para-left{
width:70vw;
font-size:10vw;
}

.about-data{
padding-left:10rem;
max-width:300vw;
margin-left:-12vw;
}


.about-data h1{
font-size:18vw;
max-width:80%; 
}
 .about-border{
   height:2vh;
 max-width:30vw;
   margin-bottom:5vw;  
 }
.about-data p{
max-width:900vw;
font-size:10vw;
margin-bottom:2vw;
}
 }

 @media(width<=800px){
 
 section{

padding:9rem 0;
margin-bottom : 70vw;
width:400vw;
height:400vh;
margin-top:40vw;
margin-left:10vw;
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
  height: 70vh;
  width:50vw;
  margin-top:-3vw;
   }


.about-image-right{
margin-left:-90vw !important;
width:100vw;
margin-top:1vw;
height:90vh;
}

.about-image-right p{
font-size:8vw;
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
.pro-right .pro-para-right{
width:200vw;
margin-left:10vw;
}
.pro-left .pro-para-left{
width:70vw;
font-size:10vw;
}

.about-data{
padding-left:10rem;
max-width:300vw;
margin-left:-12vw;
}


.about-data h1{
font-size:18vw;
max-width:80%; 
}
 .about-border{
   height:2vh;
 max-width:30vw;
   margin-bottom:5vw;  
 }
.about-data p{
max-width:900vw;
font-size:10vw;
margin-bottom:2vw;
}
 }


@media(width<=998px){

section{

padding:9rem 0;
margin-bottom : 70vw;
width:400vw;
height:400vh;
margin-top:40vw;
margin-left:10vw;
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
  height: 70vh;
  width:50vw;
  margin-top:-3vw;
   }


.about-image-right{
margin-left:-45vw;
width:100vw;
margin-top:1vw;
height:90vh;
}

.about-image-right p{
font-size:8vw;
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
.pro-right .pro-para-right{
width:200vw;
margin-left:10vw;
}
.pro-left .pro-para-left{
width:70vw;
font-size:10vw;
}

.about-data{
padding-left:10rem;
max-width:300vw;
margin-left:-12vw;
}


.about-data h1{
font-size:18vw;
max-width:80%; 
}
 .about-border{
   height:2vh;
 max-width:30vw;
   margin-bottom:5vw;  
 }
.about-data p{
max-width:900vw;
font-size:10vw;
margin-bottom:2vw;
}
  
}

@media(width<=768px){

section{

padding:9rem 0;
margin-bottom : 70vw;
width:400vw;
height:400vh;
margin-top:40vw;
margin-left:10vw;
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
  height: 70vh;
  width:50vw;
  margin-top:-3vw;
   }


.about-image-right{
margin-left:-90vw !important;
width:100vw;
margin-top:1vw;
height:90vh;
}

.about-image-right p{
font-size:8vw;
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
.pro-right .pro-para-right{
width:200vw;
margin-left:10vw;
}
.pro-left .pro-para-left{
width:70vw;
font-size:10vw;
}

.about-data{
padding-left:10rem;
max-width:300vw;
margin-left:-12vw;
}


.about-data h1{
font-size:18vw;
max-width:80%; 
}
 .about-border{
   height:2vh;
 max-width:30vw;
   margin-bottom:5vw;  
 }
.about-data p{
max-width:900vw;
font-size:10vw;
margin-bottom:2vw;
}

}



@media(width<=600px){
.hero-container{
grid-template-columns:1fr;
    margin-left:-20vw !important;
}
section{

  padding:9rem 0;
  width:300vw !important;
  height:750vh;
  margin-top:40vw;
  margin-left:50vw !important;
  }
  
  
  
  .about-image{
    max-width:300vw;
    margin-left:20vw;
  margin-top:60vw;
  height:auto;
  display:grid;
    grid-template-columns : repeat(2,1fr);
  order:2;
  }
  
    .about-image-left{
  max-width:90vw;
    height:90vh;
   margin-left:8vw;
    }
     .about-image-left img{
    height: 90vh !important;
    width:90vw !important;
    margin-top:-3vw;
     }
  
  
  .about-image-right{
  
  margin-left:-100vw !important;
  width:190vw !important;
  margin-top:1vw;
  height:100vh;
  }
  
  .about-image-right p{

  font-size:12vw !important;
  line-height:18vh;
  }
  
  .profile{
  order:1;
  margin-bottom:10vw;
  margin-top:10vw;
  max-width:80vw;
  height:auto;
  display:grid;
  
    grid-template-columns : repeat(2,1fr);
  }
  .pro-right .pro-para-right{
  width:400vw !important;
  margin-left:30vw;
  }
  .pro-left .pro-para-left{
  width:80vw;
  font-size:12vw !important;
  }
  
  .about-data{
  padding-left:10rem;
  max-width:300vw;
  margin-left:8vw;
  }
  
  
  .about-data h1{
  font-size:18vw;
  max-width:80%; 
  }
   .about-border{
     height:2vh;
   max-width:30vw;
     margin-bottom:5vw;  
   }
  .about-data p{
  max-width:910vw !important;
  font-size:12vw !important;
  margin-bottom:2vw;
  }


}
   @media(width<=500px){
.hero-container{
grid-template-columns:1fr;
    margin-left:-20vw !important;
}
section{

  padding:9rem 0;
  width:320vw !important;
  height:670vh;
  margin-top:40vw;
  margin-left:50vw !important;
  }
  
  
  
  .about-image{
    max-width:300vw;
     margin-left:20vw;
  margin-top:60vw;
  height:auto;
  display:grid;
    grid-template-columns : repeat(2,1fr);
  order:2;
  }
  
    .about-image-left{
  max-width:100vw;
    height:90vh;
   margin-left:8vw;
    }
     .about-image-left img{
    height: 90vh !important;
    width:100vw !important;
    margin-top:-3vw;
     }
  
  
  .about-image-right{
  margin-left:-150vw !important;
  width:190vw !important;
  margin-top:1vw;
  height:100vh;
  }
  
  .about-image-right p{

  font-size:12vw !important;
  line-height:18vh;
  }
  
  .profile{
  order:1;
  margin-bottom:10vw;
  margin-top:10vw;
  max-width:80vw;
  height:auto;
  display:grid;
  
    grid-template-columns : repeat(2,1fr);
  }
  .pro-right .pro-para-right{
  width:400vw !important;
  margin-left:30vw;
  }
  .pro-left .pro-para-left{
  width:80vw;
  font-size:12vw !important;
  }
  
  .about-data{
  padding-left:10rem;
  max-width:300vw;
  margin-left:8vw;
  }
  
  
  .about-data h1{
  font-size:18vw;
  max-width:80%; 
  }
   .about-border{
     height:2vh;
   max-width:30vw;
     margin-bottom:5vw;  
   }
  .about-data p{
  max-width:910vw !important;
  font-size:12vw !important;
  margin-bottom:2vw;
  }

  }


@media(width<=400px){
.hero-container{
grid-template-columns:1fr;

}

section{
  padding:9rem 0;
  margin-bottom : 70vw;
  width:380vw !important;
  height:auto;
  margin-top:10vw;
    margin-left:20vw !important;
  }
  

  
  
  .about-image{
    max-width:300vw;
    margin-left:20vw;
  margin-top:60vw;
  height:auto;
  display:grid;
    grid-template-columns : repeat(2,1fr);
  order:2;
  }
  
    .about-image-left{
  max-width:120vw;
    height:90vh;
   margin-left:8vw;
    }
     .about-image-left img{
    height: 80vh !important;
    width:120vw !important;
    margin-top:-3vw;
     }
  
  
  .about-image-right{
  margin-left:-120vw !important;
  width:200vw !important;
  margin-top:1vw;
  height:100vh;
  }
  
  .about-image-right p{

  font-size:13vw !important;
  line-height:15vh;
  }
  
  .profile{
  order:1;
  margin-bottom:10vw;
  margin-top:10vw;
  max-width:80vw;
  height:auto;
  display:grid;
  
    grid-template-columns : repeat(2,1fr);
  }
  .pro-right .pro-para-right{
  width:400vw !important;
  margin-left:30vw;
  }
  .pro-left .pro-para-left{
  width:90vw;
  font-size:15vw !important;
  }
  
  .about-data{
  padding-left:10rem;
  max-width:300vw;
  margin-left:8vw;
  }
  
  
  .about-data h1{
  font-size:28vw;
  max-width:80%; 
  }
   .about-border{
     height:2vh;
   max-width:30vw;
     margin-bottom:5vw;  
   }
  .about-data p{
  max-width:910vw !important;
  font-size:15vw !important;
  margin-bottom:2vw;
  }

}

@media(width<=370px){
.hero-container{
grid-template-columns:1fr;
}

section{

  padding:9rem 0;
  margin-bottom : 70vw;
  width:380vw !important;
  height:600vh;
  margin-top:30vw;
    margin-left:20vw !important;
  }
  

  
  
  .about-image{
    max-width:300vw;
    margin-left:20vw;
  margin-top:60vw;
  height:400vh;
  display:grid;
    grid-template-columns : repeat(2,1fr);
  order:2;
  }
  
    .about-image-left{
  max-width:120vw;
    height:86vh;
   margin-left:8vw;
    }
     .about-image-left img{
    height: 70vh !important;
    width:120vw !important;
    margin-top:-3vw;
     }
  
  
  .about-image-right{
  margin-left:-130vw !important;
  width:230vw !important;
  margin-top:1vw;
  height:100vh;
  }
  
  .about-image-right p{

  font-size:15vw !important;
  line-height:15vh;
  }
  
  .profile{
  order:1;
  margin-bottom:10vw;
  margin-top:10vw;
  max-width:80vw;
  height:auto;
  display:grid;
  
    grid-template-columns : repeat(2,1fr);
  }
  .pro-right .pro-para-right{
  width:400vw !important;
  margin-left:-180vw !important;
  }
  .pro-left .pro-para-left{
  width:90vw;
  font-size:17vw !important;
  }
  
  .about-data{
  padding-left:10rem;
  max-width:300vw;
  margin-left:8vw;
  }
  
  
  .about-data h1{
  font-size:30vw;
  max-width:80%; 
  }
   .about-border{
     height:2vh;
   max-width:30vw;
     margin-bottom:5vw;  
   }

  .about-data p{
  width:320vw !important;
  font-size:17vw !important;
  margin-bottom:2vw;
  }
}


@media(width<=320px){
.hero-container{
grid-template-columns:1fr;
}

section{
  padding:9rem 0;
  margin-bottom : 70vw;
  width:380vw !important;
  height:580vh;
  margin-top:-20vw;
    margin-left:20vw !important;
  }
  

  
  
  .about-image{
    max-width:300vw;
    margin-left:20vw;
  margin-top:60vw;
  height:auto;
  display:grid;
    grid-template-columns : repeat(2,1fr);
  order:2;
  }
  
    .about-image-left{
  max-width:120vw;
    height:90vh;
   margin-left:8vw;
    }
     .about-image-left img{
    height: 60vh !important;
    width:120vw !important;
    margin-top:-3vw;
     }
  
  
  .about-image-right{
  margin-left:-120vw !important;
  width:200vw !important;
  margin-top:1vw;
  height:100vh;
  }
  
  .about-image-right p{

  font-size:13vw !important;
  line-height:15vh;
  }
  
  .profile{
  order:1;
  margin-bottom:10vw;
  margin-top:10vw;
  max-width:80vw;
  height:auto;
  display:grid;
  
    grid-template-columns : repeat(2,1fr);
  }
  .pro-right .pro-para-right{
  width:400vw !important;
  margin-left:30vw;
  }
  .pro-left .pro-para-left{
  width:90vw;
  font-size:15vw !important;
  }
  
  .about-data{
  padding-left:10rem;
  max-width:300vw;
  margin-left:8vw;
  }
  
  
  .about-data h1{
  font-size:20vw;
  max-width:80%; 
  }
   .about-border{
     height:2vh;
   max-width:30vw;
     margin-bottom:5vw;  
   }
  .about-data p{
  max-width:910vw !important;
  font-size:15vw !important;
  margin-bottom:2vw;
  }


}


@media(width<=240px){}












`;
export default About;
