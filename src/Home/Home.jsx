import React, { Fragment } from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import styled from "styled-components";
import Education from "../Education/Education";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
const Home = ()=>{
    return(
        <Fragment>
        <WrapHome>
        <section id="home">
        <Hero/>
        <About/>
        <Education/>
        <Projects/>
        <Contact/>
        <div className="footer-bott">
        <Footer/>        
        </div>
        </section>
        </WrapHome>
        </Fragment>
    )

}

const WrapHome = styled.section`
@media(width<=400px){
section{
overflow:hidden;
width:400vw;
}
}
  @media(width<=370px){
  section{
overflow:hidden;
width:400vw;
}
  }
  @media(width<=320px){
  section{
overflow:hidden;
width:400vw;
}
  }
  @media(width<=800px){
  section{
overflow:hidden;
width:400vw;
}
  }
   @media(width<=998px){
   section{
overflow:hidden;
width:400vw;
}
   }
    @media(width<=768px){
    section{
overflow:hidden;
width:400vw;
}
    }
 @media(width<=600px){
 section{
overflow:hidden;
width:400vw;
}
 }
  @media(width<=500px){
  section{
overflow:hidden;
width:400vw;
}
  }
  @media(width<=1220px){
  section{
overflow:hidden;
width:400vw;
}
  }
   @media(width<=998px){
   section{
overflow:hidden;
width:400vw;
}
   }
   
@media(width<=800px){
section{
overflow:hidden;
width:400vw;
}
}




`
export default Home;