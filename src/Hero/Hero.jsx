import React, { Fragment } from "react";
import styled from "styled-components";
import Button from "../Button/Button";
import SocialMedia from "./SocialMedia";
import Blob from "../Blob/Blob";
import Pro from "../Images/portfoliopro.png";

const Hero = () => {
    return (
        <Fragment>
            <HeroWrap>
                <section>
                    <div className="hero-container grid">
                        <div className="hero-data">
                            <h5>Hello, It's Me </h5>
                            <h1>Priya Karn</h1>
                            <h5 className="front">And I'm a Frontend Developer</h5>
                           
                            <SocialMedia/>
                            <Button
                                name="Download CV"
                            />
                        </div>


                        <div className="hero-image">
                     <Blob/>
                            <img src={Pro} alt="image" />
                           
                       
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
max-width:100%;
position:relative;
min-height:10rem;
padding-left:10rem;
}

.hero-image img{
position:relative;
top:-2rem;
margin-left:5rem;
max-width:100%;
z-index:1;
}
.front{
margin-bottom:3rem;
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
 


.hero-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
   
}

@media(width<=240px){
.hero-image{

            order: 1;
            width: 100vw !important;
            margin-top: -50vw;
            margin-left:1vw !important;
            margin-bottom: 20vw;
            position: relative;
    }
    
    .hero-image img{
    postition:absolute;
        width:100vw !important;
        }
}



@media(width<=320px){

.hero-container{
display:grid;
    grid-template-columns: 2fr;
    padding-top:20vw;
    margin-left:60vw;
    width:600%;
    }
    
    
    .hero-data{
    margin-left:20vw;
    order:2;
    width:300vw !important;
    min-height:70vh;
    padding:3vw;
    }
    
    .hero-image{
            order: 1;
            width: 200vw !important;
            margin-top: -50vw;
            margin-left:1vw !important;
            margin-bottom: 120vw;
            position: relative;
    }
    
    .hero-image img{
    postition:absolute;
        width:300vw !important;
        }
    
    .hero-data h5{
        font-size:30vw !important;
        }
        
        
        .hero-data h1{
        font-size:30vw !important;
        }
    

}


@media(width<=400px){

.hero-container{
    padding-top:20rem;
    margin-left:50vw !important;
    height:150vh;
    width:100%;
    }
    
    
    .hero-data{
    margin-right:-30vw;
    width:80vw;
    min-height:70vh;
    padding:3vw;
    
    }
    
    .hero-image{

    min-height:30vh;
    width:200vw !important;
    margin-left:-30vw;
    padding-left: revert-layer;
    position:relative;
    }
    
    .hero-image img{
    postition:absolute;
        margin-left:5rem;
        width:150vw !important;
        }
    
    .hero-data h5{
    
        color:${({ theme }) => theme.colors.grey};
        font-size:10vw !important;
        }
        
        
        .hero-data h1{
        font-size:18vw !important;
        }
    
      

}

@media(width<=500px){

.hero-container{
    padding-top:20rem;
    margin-left:50vw !important;
    width:300%;
    }
    
    
    .hero-data{
    width:200vw;
    min-height:70vh;
    padding:3vw;
    
    }
    
    .hero-image{
    min-height:30vh;
    max-width:500vw;
    margin-left:-30vw;
    padding-left: revert-layer;
    position:relative;
    }
    
    .hero-image img{
    postition:absolute;
        margin-left:5rem;
        width:500vw !important;
        }
    
    .hero-data h5{
        color:${({ theme }) => theme.colors.grey};
        font-size:10vw !important;
        }
        
        
        .hero-data h1{
        font-size:20vw !important;
        }
      
    

}

@media(width<=600px){

.hero-container{
    padding-top:20rem;
    margin-left:50vw !important;
    width:300%;
    }
    
    
    .hero-data{
    width:200vw;
    min-height:70vh;
    padding:3vw;
    
    }
    
    .hero-image{
    
    min-height:30vh;
    max-width:200vw;
    margin-left:-30vw;
    padding-left: revert-layer;
    position:relative;
    }
    
    .hero-image img{
    postition:absolute;
        margin-left:5rem;
        width:100vw !important;
        }
    
    .hero-data h5{
        color:${({ theme }) => theme.colors.grey};
        font-size:10vw !important;
        }
        
        
        .hero-data h1{
        font-size:18vw !important;
        }
      
    
    

}


@media(width<=768px){

.hero-container{
padding-top:20rem;
margin-left:70vw;

width:300%;
}


.hero-data{
width:200vw;
min-height:70vh;
padding:3vw;

}

.hero-image{

min-height:30vh;
width:100vw;
margin-left:-30vw;
position:relative;
}

.hero-image img{
postition:absolute;
    margin-left:5rem;
    width:90vw;
    }

.hero-data h5{
    color:${({ theme }) => theme.colors.grey};
    font-size:7vw;
    }
    
    
    .hero-data h1{
    font-size:12vw;
    }
  


}

@media(width<=998px){
.hero-container{
padding-top:20rem;
margin-left:70vw;

width:300%;
}


.hero-data{
width:200vw;
min-height:70vh;
padding:3vw;

}

.hero-image{

min-height:30vh;
width:100vw;
position:relative;
}

.hero-image img{
postition:absolute;
    margin-left:5rem;
    width:90vw;
    }

.hero-data h5{
    color:${({ theme }) => theme.colors.grey};
    font-size:7vw;
    }
    
    
    .hero-data h1{
    font-size:12vw;
    }
  }

  @media(width<=1220px){
  
.hero-container{
padding-top:20rem;
margin-left:70vw;
width:300%;
}


.hero-data{
width:200vw;
min-height:70vh;
padding:3vw;

}

.hero-image{

min-height:30vh;
width:100vw;
position:relative;
}

.hero-image img{
postition:absolute;
    margin-left:5rem;
    width:90vw;
    }

.hero-data h5{
    color:${({ theme }) => theme.colors.grey};
    font-size:7vw;
    }
    
    
    .hero-data h1{
    font-size:12vw;
    }
  
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