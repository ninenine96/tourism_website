import React from 'react'
import {
    FooterContainer,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcon,
    WebsiteRights,
    SocialIcons,
    SocialIconLink

} from './styles/footer'

import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin
} from 'react-icons/fa';



const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/sign-up">Sign Up</FooterLink>
                        <FooterLink to="/packages">Packages</FooterLink>
                        <FooterLink to="/contact us">Contact Us</FooterLink>
                        <FooterLink to="/about">About</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>    
                    <FooterLinksItems>
                        <FooterLinkTitle>Videos</FooterLinkTitle>
                        <FooterLink to="/">YouTube Testimonials</FooterLink>
                        <FooterLink to="/">Kashmir</FooterLink>
                    </FooterLinksItems>
                <FooterLinksWrapper>    
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/">Facebook</FooterLink>
                        <FooterLink to="/">Instagram</FooterLink>
                        <FooterLink to="/">WhatsApp</FooterLink>

                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                    <SocialIcon />
                    </SocialLogo>
                    <WebsiteRights>M.R. Sofi © 2022</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                        </SocialIconLink>
                        
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                        </SocialIconLink>
                        
                        <SocialIconLink
                        href='/'
                        rel='noopener noreferrer'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <FaYoutube />
                        
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                        </SocialIconLink>
                        
                        <SocialIconLink href='/' target='_blank' aria-label='LinkedIn'>
                        <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

        </FooterContainer>
    )
}

export default Footer
