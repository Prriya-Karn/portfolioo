import React, { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";
import AllPage from "./Allpage/AllPage";
import Resume from "./Resume/Resume";
const App = ()=>{

  const theme = {
    colors:{
      grey:"#808080",
      lightGrey:"#D8D8D8",
      white : "#FFFFFF",
      headerColor:"#F0F8FF",
      menuColor:"#002D62",
      logoColor: "#002D62",
      buttonBackColor : "rgba(0, 45, 80, 0.8)",
      eduboxColor:"#ccd5df",
      proboxColor:"rgba(0, 45, 98, 0.8)",
      prolinkColor:"#87CEEB",
      hoverBoxColor:"#335781",
    },

    fontSize:{
      logoSize : "2.5rem",
      menuSize : "2rem",
      buttonfontSize : "1.8rem",
      profileSize: "1.5rem",
      aboutImageParaSize:"1.5rem",
      skillsFont : "2rem",
      skillP : "1.5rem",
      eduHead: "4rem",
      eduh1 : "2.5rem",
      edup : "1.4rem",
      proboxh1:"2rem",
    },

    boxShadow:{
      boxShadow : "rgba(0, 0, 0, 0.24) 0px 3px 8px"
    },
    mediaQuery:{
      mobile:"768px",
      tab:"998px"
    }
  }



  return(
    <Fragment>
    <ThemeProvider theme={theme}>
    <GlobalStyle/>
    <BrowserRouter>
    <Header/>
  
    <Routes>
    <Route exact path="/" element = {<Home/>}/>
    <Route exact path="/about" element = {<About/>}/>
    <Route exact path = "/contact" element = {<Contact/>}/>
    <Route exact path = "/resume" element={<Resume/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </ThemeProvider>
    </Fragment>
  )
}

export default App;