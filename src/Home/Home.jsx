import React, { Fragment } from "react";
import Hero from "../Hero/Hero";
import About from "../About/About";
import styled from "styled-components";
import Education from "../Education/Education";
const Home = ()=>{
    return(
        <Fragment>
        <wrapHome>
        <section>
        <Hero/>
        <About/>
        <Education/>
        </section>
        </wrapHome>
        </Fragment>
    )

}

const wrapHome = styled.section`

`
export default Home;