import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    
    font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
   
}

`;
export const Container = styled.div`
  z-index: 1;
  width: 100vw;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding-left: 50px;
  padding-right: 50px;

  @media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
  }
`;
export const Button = styled.button.attrs((props) => ({
  margin: props.mt || "0 0 0 0px",
}))`
  border-radius: 4px;
  background: #173d4e;
  white-space: nowrap;
  padding: ${({ big }) => (big ? "12px 64px" : "10px 20px")};
  color: #fff;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  margin: ${(props) => props.mt};
  box-shadow: ${({ primary }) =>
    primary ? "0 0 10px #000000;" : "0 0 10px #000000;"};

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: linear-gradient(
      to right,
      #3e7189 0%,
      #3e7189 51%,
      #3e7189 100%
    );
  }

  @media screen and (max-width: 960px) {
    width: 100%;
  }
`;

export default GlobalStyle;
