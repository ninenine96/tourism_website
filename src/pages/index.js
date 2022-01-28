import React from "react";
import {
  InfoSection,
  InfoSectionSlideShow,
} from "../components/InfoSection/InfoSection";

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
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
    </>
  );
};

export default Home;
