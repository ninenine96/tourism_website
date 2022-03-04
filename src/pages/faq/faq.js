import React from "react";
import {
  Accordion,
  InfoSectionFAQ,
} from "../../components/InfoSection/InfoSection";
import { homeObjOne, data } from "./data";

const FAQ = () => {
  return (
    <>
      <InfoSectionFAQ {...homeObjOne} />
      <Accordion data={data} />
    </>
  );
};

export default FAQ;
