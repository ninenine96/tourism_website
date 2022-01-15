import React, {useState, useEffect} from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStles'
import {
    Nav, 
    NavLogo, 
    NavIcon, 
    NavbarContainer, 
    MobileIcon,
    NavMenu,
    NavLink,
    NavItems,
    NavItemBtn,
    NavBtnLink
} from './NavbarElements'



const Navbar = () => {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
      }, []);
    
    window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>    
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/">
                            <NavIcon />
                            KV
                        </NavLogo>
                        <MobileIcon onClick={handleClick}>
                            {click ? <FaTimes /> : <FaBars /> }
                        </MobileIcon>
                        <NavMenu onClick={handleClick} click={click}>
                            
                            <NavItems>
                                <NavLink to='/home'>
                                    Home
                                </NavLink>
                            </NavItems>
                        
                        
                            <NavItems>
                                <NavLink to='/packages'>
                                    Packages
                                </NavLink>
                            </NavItems>
                        
                        
                            <NavItems>
                                <NavLink to='/about'>
                                    About
                                </NavLink>
                            </NavItems>
                        
                        
                            <NavItems>
                                <NavLink to='/contact us'>
                                    Contact Us
                                </NavLink>
                            </NavItems>
                            <NavItemBtn>
                                {button ? (
                                    <NavBtnLink to="/sign-up">
                                        <Button primary>SIGN UP</Button>
                                    </NavBtnLink>
                                ) : (
                                    <NavBtnLink to="/sign-up">
                                        <Button  fontBig primary>
                                            SIGN UP
                                        </Button>
                                    </NavBtnLink>
                                
                                )}
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
