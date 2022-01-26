import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
}

`
export const Container = styled.div`
    z-index: 1;
    width: 100vw;
    max-width: 1300px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 50px;
    padding-right: 50px;

    @media screen and (max-width: 991px){
        padding-right: 30px;
        padding-left: 30px;
    }
`
export const Button = styled.button`
    border-radius: 4px;
    background: ${({primary}) => (primary ? '#4B59F7' : '#0467FB')};
    white-space: nowrap;
    padding: ${({big}) => (big ? '12px 64px' : '10px 20px')};
    color: #fff;
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    outline: none;
    border: none;
    cursor: pointer;
    box-shadow:${({primary}) => (primary ? '0 0 19px #cecece;' : '0 0 10px #000000;')}; 

    &:hover {
        transition: all 0.3s ease-out;
        background: #fff;
        background: linear-gradient(to right, #00c6ff 0%, #0072ff  51%, #00c6ff  100%);
    }

    @media screen and (max-width: 960px){
        width: 100%;
    }
`

export default GlobalStyle


