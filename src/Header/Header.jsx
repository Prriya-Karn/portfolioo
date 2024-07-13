import React, { Fragment } from "react";
import Navbar from "./Navbar";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const Header = () => {
    return (
        <Fragment>
            <MainHead>
                <header className="head">
                    <NavLink to="/" className="logoNavlink">
                        <h2 className="logo">Priya Karn</h2>
                    </NavLink>
                    <Navbar />
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
}

.head{
height:auto;
display:flex;
justify-content:space-between;
align-items:center;
margin-bottom:5rem;
}

`;

export default Header;