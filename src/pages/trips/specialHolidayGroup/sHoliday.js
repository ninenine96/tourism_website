import React from "react";
import { Accordion } from "../../../components/InfoSection/InfoSection";

import { InfoSectionAbout } from "../../../components/InfoSection/InfoSection";
import { trip_kkk, data } from "./data.js";

const SpecialHolidayGroup = () => {
  return (
    <>
      <InfoSectionAbout {...trip_kkk} />
      <Accordion data={data} />
    </>
  );
};

export default SpecialHolidayGroup;
