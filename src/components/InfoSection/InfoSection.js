import React, { useState } from "react";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStles";
import { data } from "../../pages/faq/data";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  HeadingFAQ,
  SubtitleFAQ,
  TextWrapperFAQ,
  InfoSecFAQ,
  AccordionSection,
  Wrap,
  Dropdown,
  InfoSecSlideShow,
  ImgSS,
  ContainerSS,
  HeadingSS,
} from "./InfoSection.styles";

export const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  buttonLabel,
  description,
  topLine,
  headline,
  img,
  alt,
  start,
  link,
}) => {
  const spanStyle = {
    color: "#0056f5cc",
    cursor: "Pointer",
  };
  function ReadMore({ children, maxCharacterCount }) {
    const text = children;

    const [isTruncated, setiSTruncated] = useState(true);

    const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;

    function toggleisTruncated() {
      setiSTruncated(!isTruncated);
    }
    return (
      <>
        {resultString}
        <span onClick={toggleisTruncated} style={spanStyle}>
          {isTruncated ? " ...view more" : " ...view less"}
        </span>
      </>
    );
  }
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  <ReadMore maxCharacterCount={150}>{description}</ReadMore>
                </Subtitle>
                <Link to={link}>
                  <Button big fontBig primary={primary}>
                    {buttonLabel}{" "}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export const InfoSectionAbout = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  description,
  topLine,
  headline,
  img,
  alt,
  start,
}) => {
  function ReadMore({ children, maxCharacterCount }) {
    const spanStyle = {
      color: "#0056f5cc",
      cursor: "Pointer",
    };
    const text = children;

    const [isTruncated, setiSTruncated] = useState(true);

    const resultString = isTruncated ? text.slice(0, maxCharacterCount) : text;

    function toggleisTruncated() {
      setiSTruncated(!isTruncated);
    }
    return (
      <>
        {resultString}
        <span onClick={toggleisTruncated} style={spanStyle}>
          {isTruncated ? " ...view more" : " ...view less"}
        </span>
      </>
    );
  }
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>
                  <ReadMore maxCharacterCount={150}>{description}</ReadMore>
                </Subtitle>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export const InfoSectionFAQ = ({ headline, description }) => {
  return (
    <>
      <InfoSecFAQ lightBg={true}>
        <Container>
          <TextWrapperFAQ>
            <HeadingFAQ>{headline}</HeadingFAQ>
            <SubtitleFAQ>{description}</SubtitleFAQ>
          </TextWrapperFAQ>
        </Container>
      </InfoSecFAQ>
    </>
  );
};

export const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#6aaefc", size: "25px" }}>
      <AccordionSection>
        <Container>
          {data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.headline}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.description}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};

export const InfoSectionSlideShow = ({ img, headline }) => {
  return (
    <>
      <ContainerSS>
        <InfoSecSlideShow>
          <ImgSS src={img} />
          <HeadingSS>{headline}</HeadingSS>
        </InfoSecSlideShow>
      </ContainerSS>
    </>
  );
};
