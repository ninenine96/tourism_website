import React from "react";
import { IconContext } from "react-icons/lib";
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature,
} from "./pricing.styles";

function Pricing() {
  return (
    <IconContext.Provider value={{ color: "#a9b3c1", size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Packages</PricingHeading>
          <PricingContainer>
            <PricingCard
              to="/trip-kashmir-katra-amritsar"
              background="url(https://images.unsplash.com/photo-1606301762185-bb0256e01eca?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1046&q=80)"
            >
              <PricingCardInfo color="#f8f8f8">
                <PricingCardIcon></PricingCardIcon>
                <PricingCardPlan>Kashmir-Katra-Amritsar</PricingCardPlan>
                <PricingCardCost>RS 39999</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures color="#f8f8f8">
                  <PricingCardFeature>Days/Nights: 9</PricingCardFeature>
                  <PricingCardFeature>Package: Basic</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard
              to="/special-holiday"
              background="url(https://images.unsplash.com/photo-1564327287902-0ccf559d839e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=40)"
            >
              <PricingCardInfo>
                <PricingCardIcon></PricingCardIcon>
                <PricingCardPlan>Special holiday</PricingCardPlan>
                <PricingCardCost>RS68000</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures color="#f8f8f8">
                  <PricingCardFeature>5 Night 6 Days </PricingCardFeature>
                  <PricingCardFeature>Family Package</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard
              to="/special-honeymoon"
              background="url(https://images.unsplash.com/photo-1608807469710-9b88e9f86b7a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2FuZGxlbGlnaHQlMjBkaW5uZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)"
            >
              <PricingCardInfo>
                <PricingCardIcon></PricingCardIcon>
                <PricingCardPlan>Special Honeymoon</PricingCardPlan>
                <PricingCardCost>RS40000</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures color="#f8f8f8">
                  <PricingCardFeature>6 Days</PricingCardFeature>
                  <PricingCardFeature>Special Package</PricingCardFeature>
                  <PricingCardFeature>For Couples</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard
              to="/honeymoon"
              background="url(https://images.unsplash.com/photo-1519307212971-dd9561667ffb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)"
            >
              <PricingCardInfo>
                <PricingCardIcon></PricingCardIcon>
                <PricingCardPlan>Honeymoon package </PricingCardPlan>
                <PricingCardCost>RS40000</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures color="#f8f8f8">
                  <PricingCardFeature>6 Days</PricingCardFeature>
                  <PricingCardFeature>Regular Package</PricingCardFeature>
                  <PricingCardFeature>For Couples</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
          <PricingContainer>
            <PricingCard
              to="/special-holiday-group"
              background="url(https://images.unsplash.com/photo-1612026342893-4d76f8a61d5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cGFoYWxnYW18ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=240)"
            >
              <PricingCardInfo>
                <PricingCardIcon></PricingCardIcon>
                <PricingCardPlan>Special Family Holiday</PricingCardPlan>
                <PricingCardCost>RS29999</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>7 Days</PricingCardFeature>
                  <PricingCardFeature>Group Package</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard
              to="/trip-kashmir-katra"
              background="url(https://images.unsplash.com/photo-1639647383258-abee94a76f84?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c29ubWFyZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=600&q=60)"
            >
              <PricingCardInfo>
                <PricingCardIcon></PricingCardIcon>
                <PricingCardPlan>Katra Kashmir</PricingCardPlan>
                <PricingCardCost>RS59999</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>7 Days</PricingCardFeature>
                  <PricingCardFeature>1 Night Houseboat</PricingCardFeature>
                  <PricingCardFeature>2 Nights katra</PricingCardFeature>
                  <PricingCardFeature>1 Night Pahalgam</PricingCardFeature>
                  <PricingCardFeature>3 Nights Srinagar</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>

            <PricingCard
              to="/trip-ladakh"
              background="url(https://images.unsplash.com/photo-1623996085640-8075fd4f9f74?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80)"
            >
              <PricingCardInfo>
                <PricingCardIcon></PricingCardIcon>
                <PricingCardPlan>Ladakh Package</PricingCardPlan>
                <PricingCardCost>RS49500</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>6 Days</PricingCardFeature>
                  <PricingCardFeature>Family Package</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Pricing;
