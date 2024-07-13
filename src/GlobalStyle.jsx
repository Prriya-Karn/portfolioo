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


`;