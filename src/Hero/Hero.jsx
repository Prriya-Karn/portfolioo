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


@media(width<=400px){

.hero-container{
    padding-top:20rem;
    width:100%;
    grid-template-rows:repeat(2,1fr);
        grid-template-columns:1fr;
    }
    
    
    .hero-data{

    order:2;
    padding-top:15vw;
    margin-left:10vw;
    max-width:100vw !important;
    min-height:70vh;
    
    }
    
    .hero-image{
   
    max-width:900vw !important;
    margin-left:80vw;
    order:1;
   height:90vh;
    position:relative;
    }
    
    .hero-image img{
       position: absolute;
      width: 500vw !important;
      height: 100vh;
        }
    .hero-data h5{
    color:${({ theme }) => theme.colors.grey};
    font-size:15vw;
    }
    
    
    .hero-data h1{
    font-size:20vw;
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

`;
export default Hero;



// .hero-data{
//     background-color:pink;
//     max-width:auto;
//     display:flex;
//     flex-direction:column;
//     justify-content:center;
//     }