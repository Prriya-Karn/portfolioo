import React, { Fragment, useState } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import MenuList, { menuName } from "./MenuList";
const Header = () => {


    const [hamburger,setHamBur] = useState(false);
    const hamFun = ()=>{
        setHamBur(!hamburger)
        console.log(hamburger)
    }


    return (
        <Fragment>
            <MainHead>
                <div className="blob-head">
                    <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" id="blobSvg">
                        <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "rgb(0, 45, 98)" }}></stop>
                                <stop offset="100%" style={{ stopColor: "rgb(196, 224, 229)" }}></stop>
                            </linearGradient>
                        </defs>
                        <path id="blob" d="
            M410,325Q369,400,289.5,413.5Q210,427,154.5,375Q99,323,94,248Q89,173,147,
            113Q205,53,302,58Q399,63,425,156.5Q451,250,410,325Z
            "
                            fill="url(#gradient)"></path>
                    </svg>
                </div>
                <header className="head">
           
                    <NavLink to="/" className="logoNavlink">

                        <h2 className="logo">Priya Karn</h2>
                    </NavLink>
      {/*-------------------mobile hamburger and close button------------------------------*/}


      <div className="mob-ham-close">
      <GiHamburgerMenu className="hamburger" onClick={hamFun} />
     </div>

  <Navbar
  hamburger = {hamburger}
  setHamBur = {setHamBur}
  />
 
                   
                </header>
            </MainHead>
        </Fragment>
    )
}

const MainHead = styled.header`
.logo{
color : ${({ theme }) => theme.colors.logoColor};
font-size : ${({ theme }) => theme.fontSize.logoSize};
padding-left:20rem;
}

.logoNavlink{
text-decoration:none;
position:relative;
}

.head{
height:auto;
display:grid;
  grid-template-columns : repeat(2,1fr);
justify-content:space-between;
align-items:center;
margin-bottom:5rem;
position:relative;
max-width:100%;
} 


.blob-head{
position:absolute;
top:-2rem;
left:10rem;
width:15rem;
overflow:hidden;
z-index:-1;
}

.mob-ham-close{
display:none;
}

.hamburger,.close{

}



@media(width<=400px){
.logo{
color : ${({ theme }) => theme.colors.logoColor};
font-size : ${({ theme }) => theme.fontSize.logoSize};
padding-left:20rem;
}

.logoNavlink{
text-decoration:none;
position:relative;
}

.head{
height:auto;
display:grid;
  grid-template-columns : repeat(2,1fr);
justify-content:space-between;
align-items:center;
margin-bottom:5rem;
position:relative;
max-width:100%;
} 


.blob-head{
position:absolute;
top:-2rem;
left:10rem;
width:15rem;
overflow:hidden;
z-index:-1;
}

.mob-ham-close{
display:none;
}

.hamburger,.close{

}


}



@media(width<=320px){
.blob-head{
position:absolute;
top:-2rem;
left:10rem;
width:70vw !important;
overflow:hidden;
z-index:-1;
}

}


@media(max-width:980px){
.blob-head{
left:20%;
width:50vw;
overflow:hidden;
z-index:-1;
}


.close{
display:none;
}

.mob-ham-close{
display:block;
position:absolute;
right:-300%;
top:30%;
width:50vw;
height:6vh;
}

.logo{

padding-left: 50vw;
padding-top:5vw;
width:200%;
color: ${({ theme }) => theme.colors.logoColor};
font-size: 7rem;

 }

.hamburger {
display:block;
font-size: 8rem;

}






}
`;


export default Header;