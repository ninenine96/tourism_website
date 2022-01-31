import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.div`
  background: radial-gradient(
    circle 650px at 5% 95%,
    rgba(5, 8, 114, 1) 0%,
    #050325 97.5%
  );
  /* background: radial-gradient(
    circle 1900px at 90% 10%,
    #13630f 0%,
    rgba(3, 28, 0, 1) 24%
  ); */

  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: row;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: #101522;
`;

export const FooterSubHeading = styled.p`
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const Form = styled.form`
  z-index: 1;
  display: flex;
  flex-direction: column;
  max-width: 820px;
  width: 50%;
  justify-content: center;
  align-items: ceter;
  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  display: flex;
  max-width: 820px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 20px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #101522;
  &::placeholder {
    color: #242424;
  }
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 90vw;

  display: flex;
  justify-content: center;
  align-content: space-between;
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px;
  text-align: left;
  width: 30vh;
  box-sizing: border-box;
  color: #fff;
  @media screen and (max-width: 820px) {
    margin: 5px;
    padding: 0px;
    width: 100%;
    align-items: left;
  }
`;

export const FooterLinkTitle = styled.h2`
  margin-bottom: 16px;
`;
export const FooterLinkP = styled.p`
  margin-bottom: 10px;
  text-align: left;
`;

export const FooterLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const FooterURL = styled.a`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  &:hover {
    color: #0467fb;
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const SocialIcon = styled.img`
  margin-right: 10px;
  height: 40px;
`;

export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;
export const Label = styled.label``;
export const Selection = styled.select`
  display: flex;
  max-width: 820px;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  border-radius: 5px;
  margin-right: 10px;
  margin-bottom: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid #101522;
  background: #fff;
  color: #242424;
  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const Option = styled.option``;
