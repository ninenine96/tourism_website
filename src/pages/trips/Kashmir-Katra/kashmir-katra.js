import React from "react";
import { data } from "./data";

import { Accordion } from "../../../components/InfoSection/InfoSection";
import { InfoSectionAbout } from "../../../components/InfoSection/InfoSection";
import { trip_kkk } from "./data.js";

const TripKK = () => {
  return (
    <>
      <InfoSectionAbout {...trip_kkk} />
      <Accordion data={data} />
    </>
  );
};

export default TripKK;
