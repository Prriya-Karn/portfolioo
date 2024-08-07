import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Heading from "../Heading/Heading";
const Projects = () => {
  const projectdata = [
    {
      proName : "Youtube Clone",
      link : "https://youtubeclone-k9k3xkj80-priya-s-projects-23467243.vercel.app/"
    },
    {
      proName : "Weather App",
      link : "https://weatherapp-lilac-five.vercel.app/"
    },
    {
      proName : "SearchFilter Web",
      link : "https://searchfilterwebsite.vercel.app/"
    },
    {
      proName : "Quiz App",
      link : "https://quizapp-omega-dun.vercel.app/"
    },
    {
      proName : "GithubProfile Web",
      link : "https://quizapp-omega-dun.vercel.app/"
    },
    {
      proName : "GithubProfile Web",
      link : "https://quizapp-omega-dun.vercel.app/"
    },
  ]
    return (
        <Fragment>
            <ProjectWrapper>
                <div className="project-container">
                <div className="mob-pro-head">
                <Heading
                headName = "Projects"
                className = "edu-border"
                />
                </div>
                    <div className="card-project">
                        <div className="card-row row-1">
                        
                        <div className="blob-pro">
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"  id="blobSvg">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: "rgb(0, 45, 98)"}}></stop>
                            <stop offset="100%" style={{stopColor: "rgb(196, 224, 229)"}}></stop>
                          </linearGradient>
                        </defs>
                        <path id="blob" d="
                        M410,325Q369,400,289.5,413.5Q210,427,154.5,375Q99,323,94,248Q89,173,147,
                        113Q205,53,302,58Q399,63,425,156.5Q451,250,410,325Z
                        "
                         fill="url(#gradient)"></path>
                      </svg>
                      </div>

                      
                      <div className="blob-sub-pro-1">
                      <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"  id="blobSvg">
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" style={{stopColor: "rgb(0, 45, 98)"}}></stop>
                          <stop offset="100%" style={{stopColor: "rgb(196, 224, 229)"}}></stop>
                        </linearGradient>
                      </defs>
                      <path id="blob" d="
                      M410,325Q369,400,289.5,413.5Q210,427,154.5,375Q99,323,94,248Q89,173,147,
                      113Q205,53,302,58Q399,63,425,156.5Q451,250,410,325Z
                      "
                       fill="url(#gradient)"></path>
                    </svg>
                    </div>
                            <div className="col-1 column-pro">
                            




<div className="pro-layer">
<h1>{projectdata[0].proName}</h1>
<div className="prolink">
<NavLink exact to={projectdata[0].link} target="_blank"><img src="/Images/link.png"/>
</NavLink>
</div>

</div>

                            </div>

                            
                        <div className="blob-pro-1">
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"  id="blobSvg">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: "rgb(0, 45, 98)"}}></stop>
                            <stop offset="100%" style={{stopColor: "rgb(196, 224, 229)"}}></stop>
                          </linearGradient>
                        </defs>
                        <path id="blob" d="
                        M410,325Q369,400,289.5,413.5Q210,427,154.5,375Q99,323,94,248Q89,173,147,
                        113Q205,53,302,58Q399,63,425,156.5Q451,250,410,325Z
                        "
                         fill="url(#gradient)"></path>
                      </svg>
                      </div>
                      
                      
                            <div className="col-2 column-pro">
                            <h1>Project 2</h1>
                            <div className="pro-layer">
<h1>{projectdata[1].proName}</h1>
<div className="prolink">
<NavLink exact to={projectdata[1].link}  target="_blank">
<img src="/Images/link.png"/>
</NavLink>
</div>

</div>
                            </div>
                            
                        <div className="blob-pro-2">
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"  id="blobSvg">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: "rgb(0, 45, 98)"}}></stop>
                            <stop offset="100%" style={{stopColor: "rgb(196, 224, 229)"}}></stop>
                          </linearGradient>
                        </defs>
                        <path id="blob" d="
                        M410,325Q369,400,289.5,413.5Q210,427,154.5,375Q99,323,94,248Q89,173,147,
                        113Q205,53,302,58Q399,63,425,156.5Q451,250,410,325Z
                        "
                         fill="url(#gradient)"></path>
                      </svg>
                      </div>
                      
                  
                            <div className="col-3 column-pro">
                            <div className="pro-layer">
<h1>{projectdata[2].proName}</h1>
<div className="prolink">
<NavLink exact to={projectdata[2].link}  target="_blank">
<img src="/Images/link.png"/>
</NavLink>
</div>

</div>
                            </div>
                        </div>


                        <div className="card-row row-2">
                        
                        <div className="blob-pro-3">
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"  id="blobSvg">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: "rgb(0, 45, 98)"}}></stop>
                            <stop offset="100%" style={{stopColor: "rgb(196, 224, 229)"}}></stop>
                          </linearGradient>
                        </defs>
                        <path id="blob" d="
                        M410,325Q369,400,289.5,413.5Q210,427,154.5,375Q99,323,94,248Q89,173,147,
                        113Q205,53,302,58Q399,63,425,156.5Q451,250,410,325Z
                        "
                         fill="url(#gradient)"></path>
                      </svg>
                      </div>
                      
                   
                            <div className="col-4 column-pro">
                            <div className="pro-layer">
<h1>{projectdata[3].proName}</h1>
<div className="prolink">
<NavLink exact to={projectdata[3].link}  target="_blank">
<img src="/Images/link.png"/>
</NavLink>
</div>

</div>
                            
                            </div>


                            <div className="blob-pro-4">
                        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg"  id="blobSvg">
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" style={{stopColor: "rgb(0, 45, 98)"}}></stop>
                            <stop offset="100%" style={{stopColor: "rgb(196, 224, 229)"}}></stop>
                          </linearGradient>
                        </defs>
                        <path id="blob" d="
                        M410,325Q369,400,289.5,413.5Q210,427,154.5,375Q99,323,94,248Q89,173,147,
                        113Q205,53,302,58Q399,63,425,156.5Q451,250,410,325Z
                        "
                         fill="url(#gradient)"></path>
                      </svg>
                      </div>
                      
                    



                            <div className="col-5 column-pro">
                            <div className="pro-layer">
<h1>{projectdata[4].proName}</h1>
<div className="prolink">
<NavLink exact to={projectdata[4].link}  target="_blank">
<img src="/Images/link.png"/>
</NavLink>
</div>

</div>
                            </div>
                            <div className="col-6 column-pro">
                            <div className="pro-layer">
<h1>{projectdata[4].proName}</h1>
<div className="prolink">
<NavLink exact to={projectdata[4].link}  target="_blank">
<img src="/Images/link.png"/>
</NavLink>
</div>

</div>
                            </div>
                        </div>
                        
                
                    </div>



                </div>
                
        
            </ProjectWrapper>
        </Fragment>
    )
};


const ProjectWrapper = styled.div`

.project-container{
margin-top:30rem;
margin-bottom:20rem;
}
.edu-border{
margin-left:68rem;
}
.card-project{
display:grid;
grid-template-row : repeat(2,1fr);
}

.card-project .card-row{
display:grid;
grid-template-columns : repeat(3,1fr);
gap:1rem;
margin-top:1rem;
position:relative;

}
.blob-sub-pro-1{
display:none;
}
.blob-sub-pro-2{
display:none;
}
.blob-sub-pro-3{
display:none;
}
.blob-sub-pro-4{
display:none;
}
.blob-pro{
top:-2rem;
left:-8rem;
position:absolute;
width:25rem;
}
.blob-pro-1{
top:15rem;
left:20rem;
z-index:-1;
position:absolute;
width:20rem;
}

.blob-pro-2{
top:2rem;
left:50rem;
z-index:-1;
position:absolute;
width:20rem;
}

.blob-pro-3{
top:8rem;
left:65rem;
z-index:-1;
position:absolute;
width:15rem;
}


.blob-pro-4{
    top:8rem;
    left:1rem;
    z-index:-1;
    position:absolute;
    width:15rem;
    }
.row-1{
margin-left:35rem;
max-width:80rem;
height:20rem;
}

.row-2{
margin-left:35rem;
max-width:80rem;
height:20rem;
}
.col-1, .col-2, .col-3, .col-4, .col-5, .col-6 {
    background: rgba(255, 255, 255, 0.3); 
    backdrop-filter: blur(10px);
    border-radius: 2rem;
    position: relative;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.18);
}
.column-pro{
 position: relative;
    border-radius: 2rem;
    overflow: hidden;
cursor : pointer;
}
.column-pro h1{
color:${({theme})=>theme.colors.menuColor};
display:flex;
justify-content:center;
place-items:center;
align-items:center;
height:100%;
font-size:${({theme})=>theme.fontSize.menuSize};
z-index:-1;
}

.pro-layer{

    height: 100%;
    width: 100%;
    background-color: ${({theme})=>theme.colors.hoverBoxColor};
    position: absolute;
    bottom: 0;
  
    transform: translateY(100%);
    transition: transform 0.6s ease;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
}

.column-pro:hover .pro-layer {
transform: translateY(0);
}

.prolink{
 background: rgba(255, 255, 255, 0.3); 
    backdrop-filter: blur(10px);
margin-bottom:5rem;
width:4vw;
height:5vh;
border-radius:1rem;
 display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;

}
.pro-layer img{
width:3vw;
height:4vh;
}
.pro-layer h1{
    color: white;
    font-size: 1.5vw;
  
}



@media(width<=1220px){
.project-container{
margin-top:80vw;
height:300vh;
width:300vw;
  margin-left:40vw;
  margin-bottom:20rem;
}


  .edu-border{
  margin-left:110vw;
 max-width:50vw !important;
  }


  .card-project{
  margin-left:-20vw;
  display:grid;
  grid-template-row : repeat(2,1fr);
  gap:10vw;
  }
  
  .card-project .card-row{
   
  display:grid;
  grid-template-columns : repeat(3,1fr);
  max-width:200vw;

  height:130vh;
  gap:10vw;
  margin-top:1rem;
  position:relative;
  
  }
  
  .blob-pro{
    position:absolute;
  top:-5vw !important;
  left:-12vw !important;
  width:60vw !important;
  }
  .blob-pro-1{
  top:20vw !important;
  left:70vw !important;
  z-index:-1;
  position:absolute;
  width:55vw !important;
  }

  
  .blob-pro-2{
  top:2vw;
  left:240vw !important;
  z-index:-1;
  position:absolute;
  width:60vw !important;
  }
   
  .blob-pro-3{
  top:10vw !important;
  left:200vw !important;
  z-index:-1;
  position:absolute;
  width:40vw !important;
  }
  
  
  .blob-pro-4{
      top:10vw !important;
      left:-10vw;
      z-index:-1;
      position:absolute;
      width:50vw !important;
      }
  
  .row-1{
  margin-left:35rem;
  }
  
  .row-2{
  margin-left:35rem;
  }
  
  .column-pro{
  width:95vw;
   position: relative;
      border-radius: 2rem;
      overflow: hidden;
  cursor : pointer;
  }

  .column-pro h1{
  color:${({theme})=>theme.colors.menuColor};
  display:flex;
  justify-content:center;
  place-items:center;
  align-items:center;
  height:100%;
  font-size:7vw !important;
  z-index:-1;
  }
  
  
.prolink{

width:14vw;
margin-bottom:8vw;
height:30vh;
border-radius:1rem;
 display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;

}
.pro-layer img{
width:8vw;
height:9vh;
}
 
   
  .pro-layer h1{
color:white;
  }
  

}
 @media(width<=800px){
 .project-container{

margin-top:80vw;
height:250vh;
width:300vw;
  margin-left:40vw;
  margin-bottom:20rem;
}


  .edu-border{
  margin-left:125vw;
  }


  .card-project{
  margin-left:-20vw;
  display:grid;
  grid-template-row : repeat(2,1fr);
  gap:10vw;
  }
  
  .card-project .card-row{
   
  display:grid;
  grid-template-columns : repeat(3,1fr);
  max-width:200vw;
gap:10vw;
  height:100vh;
  margin-top:1rem;
  position:relative;
  
  }
  
  .blob-pro{
    position:absolute;
  top:-5vw !important;
  left:-12vw !important;
  width:60vw !important;
  }
  .blob-pro-1{
  top:20vw !important;
  left:70vw !important;
  z-index:-1;
  position:absolute;
  width:55vw !important;
  }

  
  .blob-pro-2{
  top:2vw;
  left:240vw !important;
  z-index:-1;
  position:absolute;
  width:60vw !important;
  }
   
  .blob-pro-3{
  top:10vw !important;
  left:200vw !important;
  z-index:-1;
  position:absolute;
  width:40vw !important;
  }
  
  
  .blob-pro-4{
      top:10vw !important;
      left:-10vw;
      z-index:-1;
      position:absolute;
      width:50vw !important;
      }
  
  .row-1{
  margin-left:35rem;
  }
  
  .row-2{
  margin-left:35rem;
  }
  
  .column-pro{
  width:95vw;
   position: relative;
      border-radius: 2rem;
      overflow: hidden;
  cursor : pointer;
  }

  .column-pro h1{
  color:${({theme})=>theme.colors.menuColor};
  display:flex;
  justify-content:center;
  place-items:center;
  align-items:center;
  height:100%;
  font-size:7vw !important;
  z-index:-1;
  }
  
  
.prolink{

width:14vw;
margin-bottom:8vw;
height:30vh;
border-radius:1rem;
 display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;

}
.pro-layer img{
width:8vw;
height:9vh;
}
 
   
  .pro-layer h1{
color:white;
  }

 
 }
 @media(width<=998px){}
 @media(width<=768px){
 .project-container{

margin-top:80vw;
height:250vh;
width:300vw;
  margin-left:40vw;
  margin-bottom:20rem;
}


  .edu-border{
  margin-left:125vw;
  }


  .card-project{
  margin-left:-20vw;
  display:grid;
  grid-template-row : repeat(2,1fr);
  gap:10vw;
  }
  
  .card-project .card-row{
   
  display:grid;
  grid-template-columns : repeat(3,1fr);
  max-width:200vw;

  height:100vh;
 gap:10vw;
  margin-top:1rem;
  position:relative;
  
  }
  
  .blob-pro{
    position:absolute;
  top:-5vw !important;
  left:-12vw !important;
  width:60vw !important;
  }
  .blob-pro-1{
  top:20vw !important;
  left:70vw !important;
  z-index:-1;
  position:absolute;
  width:55vw !important;
  }

  
  .blob-pro-2{
  top:2vw;
  left:240vw !important;
  z-index:-1;
  position:absolute;
  width:60vw !important;
  }
   
  .blob-pro-3{
  top:10vw !important;
  left:200vw !important;
  z-index:-1;
  position:absolute;
  width:40vw !important;
  }
  
  
  .blob-pro-4{
      top:10vw !important;
      left:-10vw;
      z-index:-1;
      position:absolute;
      width:50vw !important;
      }
  
  .row-1{
  margin-left:35rem;
  }
  
  .row-2{
  margin-left:35rem;
  }
  
  .column-pro{
  width:95vw;
   position: relative;
      border-radius: 2rem;
      overflow: hidden;
  cursor : pointer;
  }

  .column-pro h1{
  color:${({theme})=>theme.colors.menuColor};
  display:flex;
  justify-content:center;
  place-items:center;
  align-items:center;
  height:100%;
  font-size:7vw !important;
  z-index:-1;
  }
  
  
.prolink{

width:14vw;
margin-bottom:8vw;
height:30vh;
border-radius:1rem;
 display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;

}
.pro-layer img{
width:8vw;
height:9vh;
}
 
   
  .pro-layer h1{
color:white;
  }


 }


@media(width<=600px){

.project-container{
  margin-top:80vw !important;
height:200vh;
width:200vw;
  margin-left:90vw;
  margin-bottom:20rem;
}


  .edu-border{
  margin-left:80vw;
  }


  .card-project{
  display:grid;
  grid-template-row : repeat(2,1fr);
  gap:10vw;
  }
  
  .card-project .card-row{
   
  display:grid;
  grid-template-columns : repeat(3,1fr);
  max-width:300vw;
  margin-left:-30vw !important;
  height:80vh;
gap:10vw;
  margin-top:1rem;
  position:relative;
  
  }
  
  .blob-pro{
    position:absolute;
  top:-5vw !important;
  left:-12vw !important;
  width:70vw !important;
  }
  .blob-pro-1{
  top:32vw !important;
  left:80vw !important;
  z-index:-1;
  position:absolute;
  width:60vw !important;
  }

  
  .blob-pro-2{
  top:2vw;
  left:250vw !important;
  z-index:-1;
  position:absolute;
  width:70vw !important;
  }
   
  .blob-pro-3{
  top:15vw !important;
  left:160vw !important;
  z-index:-1;
  position:absolute;
  width:80vw !important;
  }
  
  
  .blob-pro-4{
      top:8vw !important;
      left:1rem;
      z-index:-1;
      position:absolute;
      width:50vw !important;
      }
  
  .row-1{
  margin-left:35rem;
  }
  
  .row-2{
  margin-left:35rem;
  }
  
  .column-pro{
  width:109vw;
   position: relative;
      border-radius: 2rem;
      overflow: hidden;
  cursor : pointer;
  }

  .column-pro h1{
  color:${({theme})=>theme.colors.menuColor};
  display:flex;
  justify-content:center;
  place-items:center;
  align-items:center;
  height:100%;
  font-size:10vw !important;
  z-index:-1;
  }
  
  
.prolink{

width:18vw;
margin-bottom:12vw;
height:25vh !important;
border-radius:1rem;
 display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;

}
.pro-layer img{
width:8vw;
height:9vh;
}
 
   
  .pro-layer h1{
color:white;
font-size:10vw !important;
  }
}
   @media(width<=500px){

   .project-container{
  margin-top:60vw !important;
  height:200vh;
  width:200vw;
    margin-left:90vw;
    margin-bottom:20rem;
  }
  
  
    .edu-border{
    margin-left:80vw;
    }
  
  
    .card-project{
    display:grid;
    grid-template-row : repeat(2,1fr);
    gap:10vw;
    }
    
    .card-project .card-row{
     
    display:grid;
    grid-template-columns : repeat(3,1fr);
    max-width:300vw;
    margin-left:-30vw !important;
    height:80vh;
  gap:10vw;
    margin-top:1rem;
    position:relative;
    
    }
    
    .blob-pro{
      position:absolute;
    top:-5vw !important;
    left:-12vw !important;
    width:70vw !important;
    }
    .blob-pro-1{
    top:32vw !important;
    left:80vw !important;
    z-index:-1;
    position:absolute;
    width:60vw !important;
    }
  
    
    .blob-pro-2{
    top:2vw;
    left:250vw !important;
    z-index:-1;
    position:absolute;
    width:70vw !important;
    }
     
    .blob-pro-3{
    top:15vw !important;
    left:160vw !important;
    z-index:-1;
    position:absolute;
    width:80vw !important;
    }
    
    
    .blob-pro-4{
        top:8vw !important;
        left:1rem;
        z-index:-1;
        position:absolute;
        width:50vw !important;
        }
    
    .row-1{
    margin-left:35rem;
    }
    
    .row-2{
    margin-left:35rem;
    }
    
    .column-pro{
    width:109vw;
     position: relative;
        border-radius: 2rem;
        overflow: hidden;
    cursor : pointer;
    }
  
    .column-pro h1{
    color:${({theme})=>theme.colors.menuColor};
    display:flex;
    justify-content:center;
    place-items:center;
    align-items:center;
    height:100%;
    font-size:10vw !important;
    z-index:-1;
    }
    
    
  .prolink{
  
  width:18vw;
  margin-bottom:12vw;
  height:25vh !important;
  border-radius:1rem;
   display: flex;
      justify-content: center;
      align-items: center;
      text-align:center;
  
  }
  .pro-layer img{
  width:8vw;
  height:9vh;
  }
   
     
    .pro-layer h1{
  color:white;
  font-size:10vw !important;
    }
    

   }
      @media(width<=400px){
  
   .project-container{
    margin-top:90vw !important;
  height:900vh;
  width:200vw;
    margin-left:90vw;

  }
  
  
    .edu-border{
    margin-left:45vw;
    }

  
    .card-project{
    display:grid;
     grid-template-rows:repeat(6,1fr);
     gap:440vw;
    }
    
    .card-project .card-row{
      margin-top:20vw;
    display:grid;
 grid-template-rows:repeat(6,1fr);
grid-template-columns:1fr;
    max-width:300vw;
    margin-left:-30vw !important;
    height:90vh;
    position:relative;
    }


       .column-pro{
       background-color:orange;
      width:300vw;
    height:120vh;
     position: relative;
         border-radius:7rem;
        overflow: hidden;
    cursor : pointer;
    margin-top:20vw;
    }
  
    .column-pro h1{
    color:${({theme})=>theme.colors.menuColor};
    display:flex;
    justify-content:center;
    place-items:center;
    align-items:center;
    height:100%;
    font-size:13vw !important;
    z-index:-1;
    }
    
    
  .prolink{
  width:50vw;
  margin-bottom:18vw;
  height:40vh !important;
  border-radius:1rem;
   display: flex;
      justify-content: center;
      align-items: center;
      text-align:center;
  
  }
  .pro-layer img{
  width:20vw;
  height:20vh;
  }

  .pro-layer h1{
  color:white;
  font-size:20vw !important;
    }
   
    .blob-pro-3{
     display:none;
    top:15vw !important;
    left:160vw !important;
    z-index:-1;
    position:absolute;
    width:80vw !important;
    }
    
    
    .blob-pro-4{
     display:none;
        top:8vw !important;
        left:1rem;
        z-index:-1;
        position:absolute;
        width:50vw !important;
        }
    
    .row-1{
    margin-left:35rem;
    }
    
    .row-2{
    margin-left:35rem;
    }
    
 
     }

   
@media(width<=390px){

.project-container{
   
margin-top:90vw !important;
height:900vh;
width:200vw;
margin-left:90vw;

}


.edu-border{
margin-left:45vw;
}


.card-project{
display:grid;
 grid-template-rows:repeat(6,1fr);
 gap:440vw;
}

.card-project .card-row{
  margin-top:20vw;
display:grid;
grid-template-rows:repeat(6,1fr);
grid-template-columns:1fr;

max-width:300vw;
margin-left:-30vw !important;
height:90vh;
position:relative;
}


   .column-pro{
   background-color:green !important;
  width:300vw;
height:120vh;
 position: relative;
     border-radius:7rem;
    overflow: hidden;
cursor : pointer;
margin-top:20vw;
}

.column-pro h1{
color:${({theme})=>theme.colors.menuColor};
display:flex;
justify-content:center;
place-items:center;
align-items:center;
height:100%;
font-size:13vw !important;
z-index:-1;
}


.prolink{
width:50vw;
margin-bottom:18vw;
height:40vh !important;
border-radius:1rem;
display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;

}
.pro-layer img{
width:20vw;
height:20vh;
}

.pro-layer h1{
color:white;
font-size:20vw !important;
}

.blob-pro-3{
 display:none;
top:15vw !important;
left:160vw !important;
z-index:-1;
position:absolute;
width:80vw !important;
}


.blob-pro-4{
 display:none;
    top:8vw !important;
    left:1rem;
    z-index:-1;
    position:absolute;
    width:50vw !important;
    }

.row-1{
margin-left:35rem;
}

.row-2{
margin-left:35rem;
}


}
@media(width<=370px){

.project-container{
   
margin-top:90vw !important;
height:900vh;
width:200vw;
margin-left:90vw;

}


.edu-border{
margin-left:45vw;
}


.card-project{
display:grid;
 grid-template-rows:repeat(6,1fr);
 gap:460vw;
}

.card-project .card-row{
  margin-top:20vw;
display:grid;
grid-template-rows:repeat(6,1fr);
grid-template-columns:1fr;

max-width:300vw;
margin-left:-30vw !important;
height:90vh;
position:relative;
}


   .column-pro{
   background-color:green !important;
  width:300vw;
height:120vh;
 position: relative;
     border-radius:7rem;
    overflow: hidden;
cursor : pointer;
margin-top:20vw;
}

.column-pro h1{
color:${({theme})=>theme.colors.menuColor};
display:flex;
justify-content:center;
place-items:center;
align-items:center;
height:100%;
font-size:13vw !important;
z-index:-1;
}


.prolink{
width:50vw;
margin-bottom:18vw;
height:40vh !important;
border-radius:1rem;
display: flex;
  justify-content: center;
  align-items: center;
  text-align:center;

}
.pro-layer img{
width:20vw;
height:20vh;
}

.pro-layer h1{
color:white;
font-size:20vw !important;
}

.blob-pro-3{
 display:none;
top:15vw !important;
left:160vw !important;
z-index:-1;
position:absolute;
width:80vw !important;
}


.blob-pro-4{
 display:none;
    top:8vw !important;
    left:1rem;
    z-index:-1;
    position:absolute;
    width:50vw !important;
    }

.row-1{
margin-left:35rem;
}

.row-2{
margin-left:35rem;
}


}


@media(width<=360px){

.project-container{
  margin-top:90vw !important;
 height:900vh;
width:200vw;
  margin-left:90vw;
  margin-bottom:20rem;
}


  .edu-border{
  margin-left:45vw;
  }


  
.card-project{
  display:grid;
   grid-template-rows:repeat(6,1fr);
  gap:470vw;
  }
  
  .card-project .card-row{
    margin-top:20vw;
  display:grid;
grid-template-rows:repeat(6,1fr);
grid-template-columns:1fr;
  max-width:300vw;
  margin-left:-30vw !important;
  height:90vh;
  position:relative;
  }
     .column-pro{
     background-color:orange;
    width:300vw;
  height:120vh;
  margin-top:20vw;
   position: relative;
       border-radius:7rem;
      overflow: hidden;
  cursor : pointer;
  }

  .column-pro h1{
  color:${({theme})=>theme.colors.menuColor};
  display:flex;
  justify-content:center;
  place-items:center;
  align-items:center;
  height:100%;
  font-size:13vw !important;
  z-index:-1;
  }
  
  
.prolink{

width:50vw;
margin-bottom:40vw;
height:30vh !important;
border-radius:1rem;
 display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;

}
.pro-layer img{
width:20vw;
height:20vh;
}

.pro-layer h1{
color:white;
font-size:26vw !important;
  }
 
  .blob-pro-3{
   display:none;
  top:15vw !important;
  left:160vw !important;
  z-index:-1;
  position:absolute;
  width:80vw !important;
  }
  
  
  .blob-pro-4{
   display:none;
      top:8vw !important;
      left:1rem;
      z-index:-1;
      position:absolute;
      width:50vw !important;
      }
  
  .row-1{
  margin-left:35rem;
  }
  
  .row-2{
  margin-left:35rem;
  }
  
}


@media(width<=340px){

.project-container{
  margin-top:90vw !important;
 height:900vh;
width:200vw;
  margin-left:90vw;
  margin-bottom:20rem;
}


  .edu-border{
  margin-left:45vw;
  }


  
.card-project{
  display:grid;
   grid-template-rows:repeat(6,1fr);
   gap:490vw;
  }
  
  .card-project .card-row{
    margin-top:20vw;
  display:grid;
grid-template-rows:repeat(6,1fr);
grid-template-columns:1fr;
  max-width:300vw;
  margin-left:-30vw !important;
  height:90vh;
  position:relative;
  }
     .column-pro{
     background-color:orange;
    width:300vw;
  height:120vh;
  margin-top:20vw;
   position: relative;
       border-radius:7rem;
      overflow: hidden;
  cursor : pointer;
  }

  .column-pro h1{
  color:${({theme})=>theme.colors.menuColor};
  display:flex;
  justify-content:center;
  place-items:center;
  align-items:center;
  height:100%;
  font-size:13vw !important;
  z-index:-1;
  }
  
  
.prolink{

width:50vw;
margin-bottom:40vw;
height:30vh !important;
border-radius:1rem;
 display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;

}
.pro-layer img{
width:20vw;
height:20vh;
}

.pro-layer h1{
color:white;
font-size:26vw !important;
  }
 
  .blob-pro-3{
   display:none;
  top:15vw !important;
  left:160vw !important;
  z-index:-1;
  position:absolute;
  width:80vw !important;
  }
  
  
  .blob-pro-4{
   display:none;
      top:8vw !important;
      left:1rem;
      z-index:-1;
      position:absolute;
      width:50vw !important;
      }
  
  .row-1{
  margin-left:35rem;
  }
  
  .row-2{
  margin-left:35rem;
  }
  
}


@media(width<=320px){

.project-container{
  margin-top:90vw !important;
 height:900vh;
width:200vw;
  margin-left:90vw;
  margin-bottom:20rem;
}


  .edu-border{
  margin-left:45vw;
  }


  
.card-project{
  display:grid;
   grid-template-rows:repeat(6,1fr);
   gap:520vw;
  }
  
  .card-project .card-row{
    margin-top:20vw;
  display:grid;
grid-template-rows:repeat(6,1fr);
grid-template-columns:1fr;
  max-width:300vw;
  margin-left:-30vw !important;
  height:90vh;
  position:relative;
  }
     .column-pro{
     background-color:orange;
    width:300vw;
  height:120vh;
  margin-top:20vw;
   position: relative;
       border-radius:7rem;
      overflow: hidden;
  cursor : pointer;
  }

  .column-pro h1{
  color:${({theme})=>theme.colors.menuColor};
  display:flex;
  justify-content:center;
  place-items:center;
  align-items:center;
  height:100%;
  font-size:13vw !important;
  z-index:-1;
  }
  
  
.prolink{

width:50vw;
margin-bottom:40vw;
height:30vh !important;
border-radius:1rem;
 display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;

}
.pro-layer img{
width:20vw;
height:20vh;
}

.pro-layer h1{
color:white;
font-size:26vw !important;
  }
 
  .blob-pro-3{
   display:none;
  top:15vw !important;
  left:160vw !important;
  z-index:-1;
  position:absolute;
  width:80vw !important;
  }
  
  
  .blob-pro-4{
   display:none;
      top:8vw !important;
      left:1rem;
      z-index:-1;
      position:absolute;
      width:50vw !important;
      }
  
  .row-1{
  margin-left:35rem;
  }
  
  .row-2{
  margin-left:35rem;
  }
  
}

`;

export default Projects;


