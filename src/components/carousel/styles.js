import styled from "styled-components";

export const CarouselWrapper = styled.div`
  color: #000;
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 900px) {
    height: auto;
  }
`;

export const Item = styled.div`
  padding: 20px 0;
  width: 90%;
  height: 100%;
`;

export const Heading = styled.h1`
  text-align: center;
`;

export const Name = styled.h3`
  padding: 20px 0;
  font-size: 24px;
`;

export const Review = styled.p`
  font-size: 1em;
  padding: 10px;
  width: 100%;
  margin: 10px auto;
  text-align: justify;
  text-justify: distribute;
`;
