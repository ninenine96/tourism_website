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
    FaTwitter
} from 'react-icons/fa';



const Footer = () => {
    return (
        <FooterContainer>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinkTitle>Navigation</FooterLinkTitle>
                        <FooterLink to="/home">Home</FooterLink>
                        <FooterLink to="/packages">Packages</FooterLink>
                        <FooterLink to="/contactUs">Contact Us</FooterLink>
                        <FooterLink to="/about">About</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>    
                    <FooterLinksItems>
                        <FooterLinkTitle>More Info</FooterLinkTitle>
                        <FooterLink to="/">YouTube</FooterLink>
                        <FooterLink to="/">Kashmir</FooterLink>
                    </FooterLinksItems>
                <FooterLinksWrapper>    
                    <FooterLinksItems>
                        <FooterLinkTitle>Social Media</FooterLinkTitle>
                        <FooterLink to="/" href="">Facebook</FooterLink>
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
                        
                        
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>

        </FooterContainer>
    )
}

export default Footer
