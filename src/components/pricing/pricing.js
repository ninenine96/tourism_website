import React from 'react';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
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
  PricingCardFeature
} from './pricing.styles';

function Pricing() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Packages</PricingHeading>
          <PricingContainer>
            
            <PricingCard to='/trip-kashmir-katra-amritsar'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Kashmir-Katra-Amritsar</PricingCardPlan>
                <PricingCardCost>RS 39999</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Days/Nights: 9</PricingCardFeature>
                  <PricingCardFeature>Package: Basic</PricingCardFeature> 
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            
            <PricingCard to='/special-holiday'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Special holiday</PricingCardPlan>
                <PricingCardCost>RS68000</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>5 Night 6 Days </PricingCardFeature>
                  <PricingCardFeature>Family Package</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            
            <PricingCard to='/special-honeymoon'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Special Honeymoon</PricingCardPlan>
                <PricingCardCost>RS40000</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>6 Days</PricingCardFeature>
                  <PricingCardFeature>Special Package</PricingCardFeature>
                  <PricingCardFeature>For Couples</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          

            <PricingCard to='/honeymoon'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Honeymoon package </PricingCardPlan>
                <PricingCardCost>RS40000</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>6 Days</PricingCardFeature>
                  <PricingCardFeature>Regular Package</PricingCardFeature>
                  <PricingCardFeature>For Couples</PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
          <PricingContainer>
          <PricingCard to='/special-holiday-group'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
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
            
            <PricingCard to='/trip-kashmir-katra'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
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
            
            <PricingCard to='/trip-ladakh'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
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