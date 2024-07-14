import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Heading from "../Heading/Heading";
const Projects = () => {
    return (
        <Fragment>
            <ProjectWrapper>
                <div className="project-container">
                <Heading
                headName = "Projects"
                className = "edu-border"
                />

                    <div className="card-project">
                        <div className="card-row row-1">
                            <div className="col-1 column-pro">
                            <img src="/Images/music.jpg"/>

                            <div className="pro-layer">
                            <h1>Youtube Clone</h1>
                            <div className="prolink">
                            <NavLink to="/about">
                            <img src="/Images/link.png"/>
                            </NavLink>
                            </div>
                            
                            </div>

                            </div>
                            <div className="col-2 column-pro">
                            
                            </div>
                            <div className="col-3 column-pro"></div>
                        </div>


                        <div className="card-row row-2">
                            <div className="col-4 column-pro"></div>
                            <div className="col-5 column-pro"></div>
                            <div className="col-6 column-pro"></div>
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

.col-1{
background-color:pink;
}
.col-2{
background-color:purple;
}
.col-3{
background-color:plum;
}
.col-4{
background-color:orange;
}
.col-5{
background-color:black;
}
.col-6{
background-color:aqua;
}

.column-pro{
 position: relative;
    border-radius: 2rem;
    overflow: hidden;
cursor : pointer;
}
.column-pro img{
width:100%;
height:100%;
border-radius:2rem;
}

.pro-layer {
    height: 100%;
    width: 100%;
    background-color: ${({theme})=>theme.colors.proboxColor};
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
background-color:${({theme})=>theme.colors.prolinkColor};
width:4rem;
height:4rem;
border-radius:1rem;
 display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

}
.pro-layer img{
width:3rem;
height:3rem;

}

.pro-layer h1{
color:white;
font-size:${({theme})=>theme.fontSize.proboxh1};
margin-top:-2rem;
margin-bottom:2rem;
}

`;

export default Projects;