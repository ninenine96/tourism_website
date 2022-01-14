import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <h1>KV</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                       About
                    </NavLink>
                    <NavLink to="/packages" activeStyle>
                       Packages
                    </NavLink>
                    <NavLink to="/contact-us" activeStyle>
                       Contact Us
                    </NavLink>
                    <NavLink to="/book-now" activeStyle>
                       Book Now
                    </NavLink>

                </NavMenu>
                <NavBtn>
                    <NavBtnLink to="/sign-in">Sign In</NavBtnLink>
                </NavBtn>
            </Nav>
        </>
    )
}

export default Navbar
