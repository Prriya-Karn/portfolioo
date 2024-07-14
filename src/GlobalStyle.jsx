import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
     font-family: "Klee One", cursive;
  }

  html {
    font-size: 62.5%;
    overflow-x: hidden;
  }

  .header{
  background-color: ${({ theme }) => theme.colors.headerColor}
  }


  .grid{
  display : grid;
  gap:0rem;
  grid-template-columns : repeat(2,1fr);
  }

.edu-head{
font-size:${({theme})=>theme.fontSize.eduHead};
text-align:center;
color:${({theme})=>theme.colors.proboxColor};
}


.edu-border{
margin-top:1rem;
margin-left:68rem;
margin-bottom:2rem;
max-width:10rem;
background-color:${({theme})=>theme.colors.buttonBackColor};
height:0.5rem;
border-radius:1rem;
}

`;