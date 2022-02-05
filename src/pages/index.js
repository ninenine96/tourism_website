import React from "react";
import Cards from "../components/Cards";
import CarouselReviews from "../components/carousel/Carousel";
import HeroSection from "../components/HeroSection";
import { InfoSection } from "../components/InfoSection/InfoSection";
import ContactUs from "./contact-us/contact-us";

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
} from "./Data";

const Home = () => {
  return (
    <>
      <HeroSection />
      <Cards />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />

      <CarouselReviews />
      <ContactUs />
    </>
  );
};

export default Home;
