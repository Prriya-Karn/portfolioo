import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import MenuList, { menuName } from "./MenuList";
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

`;

export default Navbar;