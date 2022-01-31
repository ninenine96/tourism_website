import React from "react";
import { InfoSection } from "../../components/InfoSection/InfoSection";
import { InfoSectionSlideShow } from "../../components/InfoSection/InfoSection";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
  homeObjFour,
  homeObjFive,
  slideShowObj,
} from "./data";

const Packages = () => {
  return (
    <>
      <InfoSectionSlideShow {...slideShowObj} />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
      <InfoSection {...homeObjFive} />
    </>
  );
};

export default Packages;
