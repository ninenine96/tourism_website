import React from "react";
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
  SocialIconLink,
  FooterLinkP,
} from "./styles/footer";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaAddressCard,
  FaMailBulk,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle> Contact Us</FooterLinkTitle>
            <FooterLinkP>
              <FaPhone />
              {"\t"}09622660909
            </FooterLinkP>
            <FooterLinkP>
              <FaAddressCard />
              {"\t"}Near New bypass Bridge, Khushal Colony, Sopore,
              Kashmir:193201
            </FooterLinkP>

            <FooterLink to="/mail">
              <FaMailBulk />
              {"\t"}info@kashmirvendor.com
            </FooterLink>
            <FooterLink to="/whatsapp">
              <FaWhatsapp />
              {"\t"}9622660909
            </FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>More Info</FooterLinkTitle>
            <FooterLink to="/reviews">Reviews</FooterLink>
            <FooterLink to="/hotels">Hotels</FooterLink>
          </FooterLinksItems>
        </FooterLinksWrapper>
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
          <SocialLogo to="/">
            <SocialIcon />
          </SocialLogo>
          <WebsiteRights>M.R. Sofi © 2022</WebsiteRights>
          <SocialIcons>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>

            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>

            <SocialIconLink
              href="/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
