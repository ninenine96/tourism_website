import React from "react";

import { FooterLinkTitle as H2 } from "../../components/footer/styles/footer";

import {
  UL,
  LI,
  HotelsContainer,
  HotelsListWrapper,
  HotelsListItems,
} from "./styles.js";

const Hotels = () => {
  return (
    <HotelsContainer>
      <HotelsListWrapper>
        <HotelsListItems>
          <H2>Hotels In Srinagar</H2>
          <UL>
            <LI>Hotel Green Leaf Srinagar</LI>
            <LI>Radisson Srinagar</LI>
            <LI>Hotel K28 inn</LI>
            <LI>Sahara Grand Hills Hotel</LI>
            <LI>Hotel Grand Mahal</LI>
            <LI>Hotel Metropolis </LI>
            <LI>Hotel Snow Land </LI>
            <LI>Fortune Resort Heevan</LI>
            <LI>The Orchard Retreat & Spa</LI>
            <LI>Sahara Grand Hills Hotel</LI>
          </UL>
        </HotelsListItems>
        <HotelsListItems>
          <H2>Hotels In Gulmarg</H2>
          <UL>
            <LI>The Khyber Himalayan Resort & Spa</LI>
            <LI>Hotel Sun & Snow </LI>
            <LI>Hotel Mama Palace</LI>
            <LI>Hotel Affarwat</LI>
            <LI>Royal Park Hotel</LI>
            <LI>Hotel Khaleel Palace</LI>
            <LI>Hotel Heevan Retreat</LI>
            <LI>Kolahoi Green Heights</LI>
            <LI>Hotel Pine Spring </LI>
          </UL>
        </HotelsListItems>
        <HotelsListItems>
          <H2>Hotels In Pahalgam</H2>
          <LI>Himalayan Hill Resorts Hotel</LI>
          <LI>Lidder Spring Resorts</LI>
          <LI>Pahalgam Retreat</LI>
          <LI>Srichan Resorts Hotel </LI>
          <LI>Eden Resorts and Spa Hotel</LI>
          <LI>Hotel Heevan Retreat</LI>
          <LI>The Chinar Resort And Spa</LI>
          <LI>Kolahoi Green Resorts</LI>
        </HotelsListItems>
        <HotelsListItems>
          <H2>Hotels In Sonmarg</H2>
          <LI>Sonmarg Glacier</LI>
          <LI>Green Glamping Resort</LI>
          <LI>Village Walk</LI>
        </HotelsListItems>
      </HotelsListWrapper>
    </HotelsContainer>
  );
};

export default Hotels;
