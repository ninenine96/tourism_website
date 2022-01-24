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
            
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Kashmir-Katra-Amritsar Package</PricingCardPlan>
                <PricingCardCost>RS 39999</PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>Days/Nights: 9</PricingCardFeature>
                  <PricingCardFeature>Package: Basic</PricingCardFeature> 
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Special holiday</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>5 Night 6 Days </PricingCardFeature>
                  <PricingCardFeature>Family Package</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Special Honeymoon Package </PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>6 Days</PricingCardFeature>
                  <PricingCardFeature>Family Package</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          

            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Honeymoon package </PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>6 Days</PricingCardFeature>
                  <PricingCardFeature>Family Package</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
          <PricingContainer>
          <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Special Holiday</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>6 Days</PricingCardFeature>
                  <PricingCardFeature>Group Package</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCrystalBars />
                </PricingCardIcon>
                <PricingCardPlan>Katra Kashmir Package </PricingCardPlan>
                <PricingCardCost></PricingCardCost>
                <PricingCardLength></PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>8 Days</PricingCardFeature>
                  <PricingCardFeature>Family Package</PricingCardFeature>
                  <PricingCardFeature></PricingCardFeature>
                </PricingCardFeatures>
              </PricingCardInfo>
            </PricingCard>
            
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Ladakh Package</PricingCardPlan>
                <PricingCardCost></PricingCardCost>
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