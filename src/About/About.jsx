import React, { Fragment } from "react";
import styled from "styled-components";
import Skills from "./Skills";
import Button from "../Button/Button";
const About = () => {
    return (
        <Fragment>
        <AboutWrap>
            <section>
                <div className="hero-container grid">

                <div className="about-image">
                <div className="about-image-left">
                <img src="/Images/samosa.jpg"/>
                </div>
                <div className="about-image-right">
                <p><span>Name:</span> Priya Karn</p>
                <p className="role"><span>Job Role:</span> Frontend Development</p>
                 
                <p><span>Experience:</span> 3 Months Internship at ConnectOp</p>
                <p><span>Address:</span> Delhi,India</p>
                
                </div>

                <Skills/>


                </div>
                

                    <div className="hero-data">
                   
                    <h1>About Me</h1>
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
  max-width:20rem;
  height:20rem;
 margin-left:17.5rem;
  }
   .about-image-left img{

   max-width: 20rem;
  height: 15rem;
  border-radius: 50%;
   }


.about-image-right{
margin-left:-30rem;
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
`;
export default About;



// .hero-data{
//     background-color:pink;
//     max-width:auto;
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     }