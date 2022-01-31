import React from "react";
import Carousel_Reviews from "../components/carousel/Carousel";
import {
  InfoSection,
  InfoSectionSlideShow,
} from "../components/InfoSection/InfoSection";
import ContactUs from "./contact-us/contact-us";

import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  slideShow,
} from "./Data";

const Home = () => {
  return (
    <>
      <InfoSectionSlideShow {...slideShow} />
      <ContactUs />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
      <Carousel_Reviews />
    </>
  );
};

export default Home;
