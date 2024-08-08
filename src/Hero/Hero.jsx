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
                    <div className="hero-container grid" id="home">
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

.hero-container{
    display:grid;
    grid-template-columns:
    padding-top:20rem;
    width:500vw;
    }
    
    
    .hero-data{
    padding-top:15vw;
    margin-left:10vw;
    max-width:1000vw !important;
    min-height:70vh;
    }
    
    .hero-image{
    min-height:30vh;
    width:300vw !important;
    position:relative;
    }
    
    .hero-image img{
    postition:absolute;
        width:150vw !important;
        }
    
    .hero-data h5{
        color:${({ theme }) => theme.colors.grey};
        font-size:18vw;
        }
        
        
        .hero-data h1{
        font-size:25vw;
        }
      
}



@media(width<=320px){


.hero-container{
    display:grid;
    grid-template-columns:
    padding-top:20rem;
    width:500vw;
    }
    
    
    .hero-data{
    padding-top:15vw;
    margin-left:-20vw !important;
    max-width:1000vw !important;
    min-height:70vh;
    }
    
    .hero-image{
    min-height:30vh;
    width:500vw !important;
    position:relative;
    }
    
    .hero-image img{
    postition:absolute;
    height:150vh !important;
    width:150vw !important;
        }
    
    .hero-data h5{
        color:${({ theme }) => theme.colors.grey};
        font-size:18vw;
        }
        
        
        .hero-data h1{
        font-size:25vw;
        }
      

}


@media(width<=400px){

.hero-container{
    padding-top:20rem;
    width:100%;
    grid-template-rows:repeat(2,1fr);
        grid-template-columns:1fr;
        margin-top:-40vw;
    }
    
    
    .hero-data{

    order:2;
  margin-top:30vw;
    margin-left:10vw;
    max-width:100vw !important;
    min-height:70vh;
    
    }
    
    .hero-image{
    margin-left:70vw !important;
    order:1;
   height:100vh;
    width:90vw;
    }
    

    .hero-image img{
    border:5px solid black;
 background: linear-gradient(45deg,rgba(0, 45, 80, 0.8),rgba(0, 45, 80, 0.8) 40%, rgba(0, 45, 80, 0.5) 60%, rgba(0, 45, 80, 0.8) 80%,rgba(0, 45, 80, 0.8));
    border-radius:100%;
      max-width: 900% !important;
      height: 150vh;
        }

    .hero-data h5{
    color:${({ theme }) => theme.colors.grey};
    font-size:15vw;
    }
    
    
    .hero-data h1{
    font-size:20vw;
    }

}


@media(width<=370px){


.hero-container{

    display:grid;
    grid-template-columns:
    padding-top:20rem;
    width:500vw;
    }
    
    
    .hero-data{
    padding-top:15vw;
    margin-left:-20vw !important;
    max-width:1000vw !important;
    min-height:70vh;
    }
    
    .hero-image{
    min-height:30vh;
    width:500vw !important;
    position:relative;
    }
    
    .hero-image img{
    border:5px solid black;
 background: linear-gradient(45deg,rgba(0, 45, 80, 0.8),rgba(0, 45, 80, 0.8) 40%, rgba(0, 45, 80, 0.5) 60%, rgba(0, 45, 80, 0.8) 80%,rgba(0, 45, 80, 0.8));
    border-radius:100%;
    padding:10vw;
    postition:absolute;
    height:130vh !important;
    width:150vw !important;
     animation: up-down 1s ease-in-out infinite alternate-reverse both;
  }
  
  @keyframes up-down{
    0%{
      transform: translateY(10px);
    }
    100%{
      transform: translateY(-10px);
    }
  }
        

    .hero-data h5{
        color:${({ theme }) => theme.colors.grey};
        font-size:30vw !important;
        }   
        
        
        .hero-data h1{
        font-size:40vw !important;
        }

}

@media(width<=500px){

.hero-container{
    display:grid;
    grid-template-columns:
    padding-top:20rem;
    width:500vw;
    }
    
    
    .hero-data{
    padding-top:15vw;
    margin-left:10vw;
    width:300vw !important;
    min-height:70vh;
    }
    
    .hero-image{
    min-height:30vh;
    width:300vw !important;
    position:relative;
    margin-left:-80vw;
    }
    
    .hero-image img{
    postition:absolute;
        width:150vw !important;
        }
    
    .hero-data h5{
        color:${({ theme }) => theme.colors.grey};
        font-size:14vw !important;
        }
        
        
        .hero-data h1{
        font-size:25vw;
        }

}

@media(width<=600px){

.hero-container{
    display:grid;
    grid-template-columns:
    padding-top:20rem;
    width:500vw;
    }
    
    
    .hero-data{
    padding-top:15vw;
    margin-left:10vw;
    width:300vw !important;
    min-height:70vh;
    }
    
    .hero-image{
    min-height:30vh;
    width:300vw !important;
    position:relative;
    margin-left:-80vw;
    }
    
    .hero-image img{
    postition:absolute;
        width:150vw !important;
        }
    
    .hero-data h5{
        color:${({ theme }) => theme.colors.grey};
        font-size:14vw !important;
        }
        
        
        .hero-data h1{
        font-size:25vw;
        }
    
    

}
@media(width<=800px){

.hero-container{
    display:grid;
    grid-template-columns:
    padding-top:20rem;
    width:500vw;
    }
    
    
    .hero-data{
    padding-top:15vw;
    margin-left:10vw;
    width:300vw !important;
    min-height:70vh;
    }
    
    .hero-image{
    min-height:30vh;
    width:300vw !important;
    position:relative;
    margin-left:-80vw;
    }
    
    .hero-image img{
    postition:absolute;
        width:150vw !important;
        }
    
    .hero-data h5{
        color:${({ theme }) => theme.colors.grey};
        font-size:14vw !important;
        }
        
        
        .hero-data h1{
        font-size:25vw;
        }
}

@media(width<=768px){


.hero-container{
    display:grid;
    grid-template-columns:
    padding-top:20rem;
    width:500vw;
    }
    
    
    .hero-data{
    padding-top:15vw;
    margin-left:10vw;
    width:300vw !important;
    min-height:70vh;
    }
    
    .hero-image{
    min-height:30vh;
    width:300vw !important;
    position:relative;
    margin-left:-80vw;
    }
    
    .hero-image img{
    postition:absolute;
        width:150vw !important;
        }
    
    .hero-data h5{
        color:${({ theme }) => theme.colors.grey};
        font-size:14vw !important;
        }
        
        
        .hero-data h1{
        font-size:25vw;
        }
}

@media(width<=998px){

.hero-container{
    display:grid;
    grid-template-columns:
    padding-top:20rem;
    width:500vw;
    }
    
    
    .hero-data{
    padding-top:15vw;
    margin-left:10vw;
    width:300vw !important;
    min-height:70vh;
    }
    
    .hero-image{
    min-height:30vh;
    width:300vw !important;
    position:relative;
    margin-left:-80vw;
    }
    
    .hero-image img{
    postition:absolute;
        width:150vw !important;
        }
    
    .hero-data h5{
        color:${({ theme }) => theme.colors.grey};
        font-size:14vw !important;
        }
        
        
        .hero-data h1{
        font-size:25vw;
        }
     
      
        }

  @media(width<=1220px){
  
.hero-container{
display:grid;
grid-template-columns:
padding-top:20rem;
width:500vw;
}


.hero-data{
padding-top:15vw;
margin-left:10vw;
max-width:1000vw !important;
min-height:70vh;
}

.hero-image{
min-height:30vh;
width:300vw !important;
position:relative;
}

.hero-image img{
postition:absolute;
    width:200vw !important;
    }

.hero-data h5{
    color:${({ theme }) => theme.colors.grey};
    font-size:18vw;
    }
    
    
    .hero-data h1{
    font-size:25vw;
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