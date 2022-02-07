import React from "react";
import styled from "styled-components";
import {
  CardSliderHotelsGulmarg,
  CardSliderHotelsPahalgam,
  CardSliderHotelsSonmarg,
  CardSliderHotelsSrinagar,
} from "../../components/CardSlider";

import {
  HotelsSrinagar,
  HotelsGulmarg,
  HotelsPahalgam,
  HotelsSonmarg,
} from "./data";

const H2 = styled.h2`
  padding: 50px 50px 50px 50px;
  background: linear-gradient(90deg, #e9defa 0%, #fbfcdb 100%);
  justify-content: center;
  text-align: center;
`;

const Hotels = () => {
  return (
    <>
      <H2>Hotels In Srinagar</H2>
      <CardSliderHotelsSrinagar slides={HotelsSrinagar} />
      <H2>Hotels In Gulmarg</H2>
      <CardSliderHotelsGulmarg slides={HotelsGulmarg} />
      <H2>Hotels In Pahalgam</H2>
      <CardSliderHotelsPahalgam slides={HotelsPahalgam} />
      <H2>Hotels In Sonmarg</H2>
      <CardSliderHotelsSonmarg slides={HotelsSonmarg} />
    </>
  );
};

export default Hotels;
