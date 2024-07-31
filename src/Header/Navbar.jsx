import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuList, { menuName } from "./MenuList";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const Navbar = ({hamburger,setHamBur}) => {
    
    return (
        <Fragment>
            <MenuWrap>
                <nav className="menu-link">
              
                    <ul className={hamburger==true?"mob-menu-list":"menu-list"}>

                    <div className={hamburger==false?"close":""}>
                    <IoClose className="mob-close-icon"
                     onClick={()=>setHamBur(false)}/> 
                    </div>
                   
                        {
                            menuName.map((e) => {
                                return (
                                    <Fragment>
                                
                                        <MenuList
                                            menu={e.menu}
                                            path={e.path}
                                            setHamBur = {setHamBur}
                                        />
                                    </Fragment>
                                )
                            })
                        }
                         
                    </ul>

                  

                </nav>
            </MenuWrap>

        </Fragment>
    )
}


const MenuWrap = styled.nav`
.menu-link{
padding-right:20rem;

display:flex;
gap:20rem;
max-width:100%;
}

.menu-list{
display:flex;
align-items:center;
list-style:none;
}

.list{
margin:2rem;
}
.listNavLink{
text-decoration:none;
font-size : ${({ theme }) => theme.fontSize.menuSize};
color : ${({ theme }) => theme.colors.menuColor};
font-weight:700;
transition:color 0.3s linear;
}

.listNavLink:hover{
color:#6CB4EE;
}

.mob-ham-close{
display:none;
}
.close{
display:none;
}

@media(max-width:980px){

.close{
margin-top:1vw;
width:12vw;
cursor:pointer;
height:20vh;
display:block;
z-index:999;
}

.mob-close-icon{
margin-bottom:10vw;
border:5px solid black;
text-align:center;
font-size:12vw;
}

.menu-list{
display:none;
}
.mob-menu-list{
box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, 
rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    width:400vw;
    height:400vh;
    position:fixed;
    z-index:999;
    top:0;
    left:0%;
    background-color:white;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
   
    }

.listNavLink{
text-decoration:none;
font-size : ${({ theme }) => theme.fontSize.mobileMenuSize};
line-height:10rem;
color : ${({ theme }) => theme.colors.menuColor};
font-weight:700;
transition:color 0.3s linear;
}
}


`;

export default Navbar;



