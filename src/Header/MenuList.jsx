import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
const menuName = [
    {
        menu : "Home",
        path : "/"
    },
    {
        menu : "About",
        path : "/about"
    },
    {
        menu : "Resume",
        path : "/resume"
    },
    {
        menu : "Contact",
        path : "/contact"
    }
]


const MenuList = ({menu,path})=>{
    return(
        <Fragment>
        <menuList>
        <li className="list">
        <NavLink className="listNavLink" to={path}>{menu}</NavLink>
        </li>
        </menuList>
        </Fragment>
    )
}

const menuList = styled.li`

`;

export default MenuList;
export {menuName};


