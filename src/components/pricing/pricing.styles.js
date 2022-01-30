import { Link } from "react-router-dom";
import styled from "styled-components";

export const PricingSection = styled.div`
  padding: 10px 0 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: radial-gradient(
    circle 610px at 5.2% 1.6%,
    rgba(5, 8, 114, 1) 0%,
    #050325 97.5%
  );
`;

export const PricingWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 960px) {
    margin: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const PricingHeading = styled.h1`
  color: #fff;
  font-size: 48px;
  margin-bottom: 24px;
`;

export const PricingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
`;

export const PricingCard = styled(Link).attrs((props) => ({
  background: props.background || "#000000",
}))`
  background: no-repeat ${(props) => props.background};
  box-shadow: 0 6px 20px rgba(248, 248, 248, 0.274);
  width: 300px;
  height: 450px;
  text-decoration: none;
  text-shadow: 0 0 3px #000000;
  border-radius: 4px;
  &:nth-child(2n + 1) {
    margin: 50px;
  }
  &:hover {
    transform: scale(1.06);
    transition: all 0.3s ease-out;
    color: #1c2237;
  }
  @media screen and (max-width: 960px) {
    width: 90%;
    &:hover {
      transform: none;
    }
  }
`;

export const PricingCardInfo = styled.div.attrs((props) => ({
  color: props.color || "#fff",
}))`
  color: ${(props) => props.color};
  display: flex;
  flex-direction: column;
  height: 500px;
  padding: 24px;
  align-items: center;
`;

export const PricingCardIcon = styled.div`
  margin: 24px 0;
`;

export const PricingCardPlan = styled.h3`
  margin-bottom: 5px;
  font-size: 24px;
  text-align: center;
`;

export const PricingCardCost = styled.h4`
  font-size: 25px;
  margin-top: 10px;
`;

export const PricingCardLength = styled.p`
  font-size: 14px;
  margin-bottom: 24px;
`;

export const PricingCardFeatures = styled.ul.attrs((props) => ({
  color: props.color || " #a9b3c1 ",
}))`
  color: ${(props) => props.color};
  margin: 16px 0 32px;
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PricingCardFeature = styled.li`
  margin-bottom: 10px;
  font-size: 1.2rem;
  text-shadow: 0 0 9px #000000;
`;
