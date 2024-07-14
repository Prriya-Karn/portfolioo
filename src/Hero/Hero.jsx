import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import SocialMedia from "./SocialMedia";
const Hero = () => {
    return (
        <Fragment>
            <HeroWrap>
                <section>
                    <div className="hero-container grid">
                        <div className="hero-data">
                            <h5>Hello, It's Me </h5>
                            <h1>Priya Karn</h1>
                            <h5>And I'm a Frontend Developer</h5>
                            <p>I'm Priya Karn. A Front End Developer,youtuber,and freelancer.
                                A Front End Developer,youtuber,and freelancer.
                            </p>
                            <SocialMedia/>
                            <Button
                                name="Download CV"
                            />
                        </div>


                        <div className="hero-image">
                            <img src="/Images/samosa.jpg" />
                        </div>

                    </div>
                </section>
            </HeroWrap>
        </Fragment>
    )
}


const HeroWrap = styled.section`
section{
padding:9rem 0;
margin-bottom:10rem;
}
.hero-image{
padding-left:10rem;
}

.hero-image img{
height:20rem;

}

.hero-data{
padding-left:30rem;
max-width:120rem;
}

.hero-data h5{
color:${({ theme }) => theme.colors.grey};
font-size:1.5rem;
}


.hero-data h1{
color : ${({ theme }) => theme.colors.buttonBackColor};
font-size:4rem;
font-weight:800;
display:flex;
flex-direction:columns;
}
 
.hero-data p{
max-width:40rem;
margin-top:0.5rem;
color : ${({ theme }) => theme.colors.grey};
font-size:1.5rem;
margin-bottom:1.5rem;
}

`;
export default Hero;



// .hero-data{
//     background-color:pink;
//     max-width:auto;
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     }