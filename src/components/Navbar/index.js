import React, {useState} from 'react'
import { FaTimes, FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {
    Nav, 
    NavLogo, 
    NavIcon, 
    NavbarContainer, 
    MobileIcon,
    NavMenu,
    NavLink,
    NavItems,
} from './NavbarElements'



const Navbar = () => {
    const [click, setClick] = useState(false)
    // const [button, setButton] = useState(true)

     const handleClick = () => setClick(!click)

    // const showButton = () => {
    //     if(window.innerWidth <= 960) {
    //         setButton(false)
    //     } else {
    //         setButton(true)
    //     }
    // }

    // useEffect(() => {
    //     showButton();
    //   }, []);
    
    // window.addEventListener('resize', showButton)

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>    
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/home">
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
                                <NavLink to='/tours'>
                                    Tours
                                </NavLink>
                            </NavItems>
                        
                        
                            <NavItems>
                                <NavLink to='/contactUs'>
                                    Contact Us
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
                                <NavLink to='/faq'>
                                    FAQ
                                </NavLink>
                            </NavItems>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
