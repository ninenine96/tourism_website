import styled from "styled-components";

export const InfoSec = styled.div`
  color: #fff;
  padding: 160px 0;
  background: ${({ lightBg }) =>
    lightBg
      ? "linear-gradient(90deg, #e9defa 0%, #fbfcdb 100%)"
      : "radial-gradient( circle 610px at 5.2% 1.6%,  rgba(5,8,114,1) 0%, #050325 97.5% )"};
  @media screen and (max-width: 768px) {
    padding: 20px 0;
    padding-bottom: 60px;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

export const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 100%;
  flex-basis: 50%;

  @media screen and (max-width: 900px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 25px;
  }
`;

export const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

export const TopLine = styled.div`
  color: ${({ lightTopLine }) => (lightTopLine ? "#a9b3c1" : "#4B59F7")};
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  @media screen {
    font-size: 12px;
  }
`;

export const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  display: inline-block;
  max-height: 500px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  text-align: left;
  color: ${({ lightText }) => (lightText ? "#f7f8fa" : "#08634c")};
  &:hover {
    position: relative;
  }
  @media screen {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  text-justify: inter-cluster;

  color: ${({ lightTextDesc }) => (lightTextDesc ? "#d1d1d1" : "#1c2237")};
  @media screen and (max-width: 760px) {
    font-size: 14px;
    line-height: 18px;
  }
`;

export const InfoSecFAQ = styled.div`
  color: #fff;
  padding: 10px 0;

  background: ${({ lightBg }) => (lightBg ? "#fff" : "#101522")};
`;

export const TextWrapperFAQ = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  max-width: 90vw;
  padding-top: 0;
  padding-bottom: 60px;
  color: #000;
  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

export const HeadingFAQ = styled.h1`
  font-size: 32px;
  line-height: 1.1;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #1c2237;
`;

export const SubtitleFAQ = styled.p`
  max-width: 90vw;
  margin-bottom: 35px;
  padding: 10px 20px;
  font-size: 18px;
  line-height: 24px;
  text-align: justify;
  text-justify: inter-word;
  color: #1c2237;
`;

export const AccordionSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  height: auto;
  background: radial-gradient(
    circle 610px at 5.2% 1.6%,
    rgba(5, 8, 114, 1) 0%,
    #050325 97.5%
  );
`;

export const Wrap = styled.div`
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: center;
  cursor: pointer;
  h1 {
    padding: 2rem;
    font-size: 1.3rem;
  }
  span {
    margin-right: 1.5rem;
  }
`;

export const Dropdown = styled.div`
  color: #c5c5c5;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #c5c5c5;
  border-top: 1px solid #c5c5c5;
  p {
    font-size: 1rem;
    margin-left: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;

export const ContainerSS = styled.div`
  text-align: center;
  z-index: 1;
  box-sizing: content-box;
  display: block;
  float: none;
  @media screen and (max-width: 991px) {
  }
`;

export const InfoSecSlideShow = styled.div`
  display: flex;
  color: #fff;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ImgSS = styled.img`
  min-height: 460px;
  height: 700px;
  width: 100%;
  background-size: contain important;
  background-repeat: no-repeat !important;
  position: relative;
`;

export const HeadingSS = styled.h1`
  vertical-align: middle;
  position: absolute;
  top: 50%;
  left: 50%;
  text-shadow: 2px 2px #00000057;
  transform: translate(-50%, -50%);
  margin-bottom: 24px;
  line-height: 2;
  font-weight: 600;
  z-index: 2;
  color: #ffffff;
  font-size: 76px;
  letter-spacing: -0.4px;
  line-height: 82px;
  font-weight: bolder;
  text-shadow: 1px 1px 10px #000;
  text-transform: uppercase;
  @media screen and (max-width: 765px) {
    font-size: 32px;
    line-height: 1.5;
    transform: translate(-50%, -60%);
  }
`;

export const InfoSecForm = styled.div`
  display: flex;
  color: #000000;
  padding: 40px 0;
  justify-content: center;
  align-items: center;

  background: linear-gradient(70deg, #e9defa 0%, #fbfcdb 100%);
  @media screen and (max-width: 768px) {
    padding: 20px 0;
    padding-bottom: 60px;
  }
`;
