import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
import { Container } from "../../globalStles";

export const Nav = styled.nav`
  /* background: linear-gradient(
    90deg,
    rgba(73, 149, 0, 1) 0%,
    rgba(28, 119, 24, 1) 2%,
    rgba(3, 28, 0, 1) 10%
  ); */
  background: radial-gradient(
    circle 610px at 5.2% 51.6%,
    rgba(5, 8, 114, 1) 0%,
    #050325 97.5%
  );
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  position: sticky;
  top: 0;
  z-index: 19;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 80px;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled.img`
  margin-right: 0.5rem;
  height: 40px;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0%;
    right: 0%;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 95vw;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: radial-gradient(
      circle 610px at 5.2% 1.6%,
      rgba(5, 8, 114, 1) 0%,
      #050325 97.5%
    );
  }
`;

export const NavItems = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }

  &:hover {
    border: none;
  }
`;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
  }

  &:hover {
    color: #4b59f7;
    transition: all 0.3s ease;
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-with: 960px) {
    display: flex;
    justify-conent: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
export const NavItemsPhone = styled.div`
  display: flex;
  border: none;
  padding-top: 13px;
  font-size: 13px;
`;
export const NavPhoneNumber = styled.p`
  color: #f7f7f7;
`;
