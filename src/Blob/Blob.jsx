import React, { Fragment } from "react";
import styled from "styled-components";
const Blob = ()=>{
    return(
        <Fragment>
        <BlobWrapper>
        <div className="blob">
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" id="blobSvg">
<defs>
<linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
<stop offset="0%" style={{stopColor: "rgb(0, 45, 98)"}}></stop>
<stop offset="100%" style={{stopColor: "rgb(196, 224, 229)"}}></stop>
</linearGradient>
</defs>
<path id="blob" 
d="M358.5,358.5Q250,467,208,358.5Q166,250,208,181.5Q250,113,358.5,181.5Q467,
250,358.5,358.5Z" fill="url(#gradient)">

</path>
</svg>
      </div>
      </BlobWrapper>
        </Fragment>
    )
}


const BlobWrapper = styled.div`

.blob svg{
    position :absolute;
    z-index:-1;
    top:-28rem;
    left:-15rem;
    max-width:90rem;
    height:80rem;
    
    }
    
    @keyframes blobAnimation {
        0%,
        100% {
          d: path(
            "M358.5,358.5Q250,467,208,358.5Q166,250,208,181.5Q250,113,358.5,181.5Q467,250,358.5,358.5Z"
          );
        }
        25% {
          d: path(
            "M372.5,366Q260,482,207.5,366Q155,250,207.5,184Q260,118,372.5,184Q485,250,372.5,366Z"
          );
        }
        50% {
          d: path(
            "M354.5,368Q260,486,207,368Q154,250,207,170Q260,90,354.5,170Q449,250,354.5,368Z"
          );
        }
        75% {
          d: path(
            "M365,355.5Q250,461,190.5,355.5Q131,250,190.5,189Q250,128,365,189Q480,250,365,355.5Z"
          );
        }
      }
    
      @keyframes glow {
        0%,
        100% {
          filter: drop-shadow(0 0 20px rgba(0, 45, 98, 0.5));
        }
        50% {
          filter: drop-shadow(0 0 40px rgba(0, 45, 98, 1));
        }
      }
      #blob {
        animation: blobAnimation 8s infinite , glow 2s infinite;
      }
    

@media(width<=998px){
.blob svg{
postition:absolute;
    margin-left:9rem;
    width:1000%;
    z-index:-1;
}

}
@media(width<=1220px){
.blob svg{
    margin-left:15rem;
width:300vw;
    z-index:-1;
}

}
@media(width<=240px){
.blob svg{
postition:absolute;
    margin-left:-5vw;
    width:200% !important;
    z-index:-1;
}
}

@media(width<=600px){
.blob svg{
postition:absolute;
    margin-left:-5vw;
    width:1000%;
    z-index:-1;
}
}
`;


export default Blob;