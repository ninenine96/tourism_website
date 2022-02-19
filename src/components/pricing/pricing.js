import React from "react";
import { CardSliderPackagesTop } from "../CardSlider";
import { CardSliderPackagesBottom } from "../CardSlider";
import { packagesTop, packagesBottom } from "./data";
import "../../App.css";
function Pricing() {
  return (
    <div className="packages">
      <h1>Our Packages</h1>
      <CardSliderPackagesTop slides={packagesTop} />
      <CardSliderPackagesBottom slides={packagesBottom} />
    </div>
  );
}
export default Pricing;
