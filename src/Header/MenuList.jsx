import React, { Fragment } from "react";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
const menuName = [
    {
        menu : "Home",
        path : "/"
    },
    {
        menu : "About",
        path : "/about",
    },
    {
        menu : "Projects",
        path : "/projects"
    },
    {
        menu : "Contact",
        path : "/contact"
        
    },
    {
        menu : "Skills",
        path : "aboutus"
    }
]

const MenuList = ({menu,path,setHamBur})=>{
    return(
        <Fragment>
        <MenuListWrap>
        <li className="list active-list menu">
      <NavLink
        className="listNavLink" to={path}>{menu}</NavLink>
        </li>
        </MenuListWrap>
        </Fragment>
    )
}

const MenuListWrap = styled.div`
.list{
list-style:none;
}
@media(max-width:980px){
}

`;

export default MenuList;
export {menuName};


