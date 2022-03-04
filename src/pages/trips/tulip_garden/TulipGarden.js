import React from "react";

import { Accordion } from "../../../components/InfoSection/InfoSection";
import { InfoSectionAbout } from "../../../components/InfoSection/InfoSection";
import { trip, data } from "./data.js";

const TripTulipGarden = () => {
  return (
    <>
      <InfoSectionAbout {...trip} />
      <Accordion data={data} />
    </>
  );
};

export default TripTulipGarden;
