import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Container } from '../../globalStles'
import { 
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.styles'


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
    start
}) => {
    return (
        <>
          <InfoSec lightBg={lightBg}>
              <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                            <Link to='/packages'>
                                <Button big fontBig primary={primary}>
                                    {buttonLabel}
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
    )
}

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
    start
}) => {
    return (
        <>
          <InfoSec lightBg={lightBg}>
              <Container>
                <InfoRow imgStart={imgStart}>
                    <InfoColumn>
                        <TextWrapper>
                            <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                            <Heading lightText={lightText}>{headline}</Heading>
                            <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
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
    )
}