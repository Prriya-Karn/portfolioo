import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
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
        <li className="list">
        <NavLink className="listNavLink" to={path}>{menu}</NavLink>
        </li>
        </Fragment>
    )
}

export default MenuList;
export {menuName};


