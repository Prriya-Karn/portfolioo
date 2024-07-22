import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuList, { menuName } from "./MenuList";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
const Navbar = () => {
    return (
        <Fragment>
            <MenuWrap>
                <nav className="menu-link">



                    <ul className="menu-list">
                        {
                            menuName.map((e) => {
                                return (
                                    <Fragment>
                                        <MenuList
                                            menu={e.menu}
                                            path={e.path}
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
background-color:orange; 
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

@media(max-width:${({theme})=>theme.mediaQuery.mobile}){

.menu-list{

width:400vw;
height:100vh;

position:absolute;
top:0;
left:0;
background-color:orange;
transform : translateX(100%);

display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
text-align:center;
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