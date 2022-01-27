import React from "react";
import { useState } from "react";
import { IconContext } from "react-icons";
import { FiPlus, FiMinus } from "react-icons/fi";

import { Container } from "../../../globalStles";
import { data } from "./datakkk";
import {
  AccordionSection,
  Wrap,
  Dropdown,
} from "../../../components/InfoSection/InfoSection.styles";

import { InfoSectionAbout } from "../../../components/InfoSection/InfoSection";
import { trip_kkk } from "./datakkk.js";

const TripKKK = () => {
  return (
    <>
      <InfoSectionAbout {...trip_kkk} />
      <Accordion />
    </>
  );
};

export default TripKKK;

export const Accordion = () => {
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    if (clicked === index) {
      //if clicked question is already active, then close it
      return setClicked(null);
    }

    setClicked(index);
  };

  return (
    <IconContext.Provider value={{ color: "#6aaefc", size: "25px" }}>
      <AccordionSection>
        <Container>
          {data.map((item, index) => {
            return (
              <>
                <Wrap onClick={() => toggle(index)} key={index}>
                  <h1>{item.headline}</h1>
                  <span>{clicked === index ? <FiMinus /> : <FiPlus />}</span>
                </Wrap>
                {clicked === index ? (
                  <Dropdown>
                    <p>{item.description}</p>
                  </Dropdown>
                ) : null}
              </>
            );
          })}
        </Container>
      </AccordionSection>
    </IconContext.Provider>
  );
};
