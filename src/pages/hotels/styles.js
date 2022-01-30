import styled from "styled-components";

export const HotelsContainer = styled.div`
  background: radial-gradient(
    circle 610px at 5.2% 1.6%,
    rgba(5, 8, 114, 1) 0%,
    #050325 97.5%
  );
  color: #fff;

  display: flex;
  justify-content: center;
  padding: 20px 20px;
  @media screen and (max-width: 768px) {
    padding: 20px 0;
    padding-bottom: 60px;
  }
`;

export const HotelsListWrapper = styled.div`
  display: flex;
  align-content: space-between;
  padding: 0px 40px;
  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const HotelsListItems = styled.div`
  display: flex;
  flex-direction: column;

  margin: 10px;
  text-align: left;
  width: 40vh;
  box-sizing: content-box;
  color: #fff;
  @media screen and (max-width: 820px) {
    margin: 5px;
    padding: 0px;
    width: 100%;
    align-items: left;
  }
`;

export const UL = styled.ul`
  margin: 10px;
  text-align: left;

  color: #fff;
  @media screen and (max-width: 820px) {
    margin: 5px;
    padding: 0px;
    width: 100%;
    align-items: left;
  }
`;
export const LI = styled.li`
  font-size: 1em;
  padding: 5px 5px;
`;
