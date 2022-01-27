import React from "react";
import {
  Accordion,
  InfoSectionAbout,
} from "../../components/InfoSection/InfoSection";
import { homeObjOne } from "./data";

const FAQ = () => {
  return (
    <>
      <InfoSectionAbout {...homeObjOne} />
      <Accordion />
    </>
  );
};

export default FAQ;
