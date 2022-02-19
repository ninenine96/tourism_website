import React, { useState } from "react";
import { FaTimes, FaBars, FaPhone } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import "./styles.css";
import {
  Nav,
  NavLogo,
  NavIcon,
  NavbarContainer,
  MobileIcon,
  NavMenu,
  NavLink,
  NavItems,
  NavPhoneNumber,
  NavItemsPhone,
} from "./NavbarElements";

const Navbar = () => {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);

  return (
    <>
      <NavbarPhone />
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/home">
              <NavIcon src="logo_white.png" />
              KV
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItems>
                <NavLink to="/home">Home</NavLink>
              </NavItems>

              <NavItems>
                <NavLink to="/tours">Destinations</NavLink>
              </NavItems>

              <NavItems>
                <NavLink to="/contactUs">Contact Us</NavLink>
              </NavItems>

              <NavItems>
                <NavLink to="/packages">Packages</NavLink>
              </NavItems>
              <NavItems>
                <NavLink to="/hotels">Hotels</NavLink>
              </NavItems>
              <NavItems>
                <NavLink to="/about">About</NavLink>
              </NavItems>

              <NavItems>
                <NavLink to="/faq">FAQ</NavLink>
              </NavItems>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;

const NavbarPhone = () => {
  return (
    <div className="nav">
      <div className="navBarPhone">
        <NavItemsPhone>
          <NavPhoneNumber>
            Phone:{"\t"}
            <FaPhone />
            {"\t"}+919622660909
          </NavPhoneNumber>
        </NavItemsPhone>
      </div>
    </div>
  );
};
