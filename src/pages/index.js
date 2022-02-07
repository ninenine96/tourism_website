import React from "react";
import Cards from "../components/Cards";
import CardSlider from "../components/CardSlider";
import CarouselReviews from "../components/carousel/Carousel";
import { GalleryComponent } from "../components/Gallery";
import HeroSection from "../components/HeroSection";
import { InfoSection } from "../components/InfoSection/InfoSection";
import ContactUs from "./contact-us/contact-us";

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  slides,
} from "./Data";

const Home = () => {
  return (
    <>
      <HeroSection />

      <Cards />
      <CardSlider slides={slides} />
      <GalleryComponent />
      <InfoSection animate={{ x: "200%" }} {...homeObjOne} />

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
