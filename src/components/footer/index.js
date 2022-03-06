import React from "react";
import {
  FooterContainer,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinksItems,
  FooterLinkTitle,
  // FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcon,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
  FooterLinkP,
  FooterURL,
} from "./styles/footer";

import {
  FaFacebook,
  FaInstagram,
  // FaYoutube,
  // FaTwitter,
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

            {/* <FooterLink to=""> */}
            <FooterLinkP>
              <FaMailBulk />
              {"\t"}info@kashmirvendor.com
            </FooterLinkP>
            <FooterURL href="https://wa.me/9622660909">
              <FaWhatsapp />
              {"\t"}9622660909
            </FooterURL>
          </FooterLinksItems>
        </FooterLinksWrapper>

        <FooterLinksWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>Social Media</FooterLinkTitle>
            <FooterURL href="https://www.facebook.com/KashmirVendor-109221331552388/">
              Facebook
            </FooterURL>
            <FooterURL href="https://www.instagram.com/kashmirvendor/">
              Instagram
            </FooterURL>
            <FooterURL href="https://wa.me/9622660909">WhatsApp</FooterURL>
          </FooterLinksItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <SocialMedia>
        <SocialMediaWrap>
          <SocialLogo to="/">
            <SocialIcon src="logo_white.png" />
          </SocialLogo>
          <WebsiteRights>M.R. Sofi © 2022</WebsiteRights>
          <SocialIcons>
            <SocialIconLink
              href="https://www.facebook.com/KashmirVendor-109221331552388/"
              target="_blank"
              aria-label="Facebook"
            >
              <FaFacebook />
            </SocialIconLink>

            <SocialIconLink
              href="https://www.instagram.com/kashmirvendor/"
              target="_blank"
              aria-label="Instagram"
            >
              <FaInstagram />
            </SocialIconLink>

            {/* <SocialIconLink
              href="/"
              rel="noopener noreferrer"
              target="_blank"
              aria-label="Youtube"
            >
              <FaYoutube />
            </SocialIconLink> */}
            {/* <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink> */}
          </SocialIcons>
        </SocialMediaWrap>
      </SocialMedia>
    </FooterContainer>
  );
};

export default Footer;
