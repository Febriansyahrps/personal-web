import { createGlobalStyle } from "styled-components";
const styled = { createGlobalStyle };

export const colorKey = {
  black: "#121212",
  blackHover: "#020000",
  white: "#fafafa",
  main: "#102060",
  mainHover: "#002050",
  secondary: "#108FFF",
  secondaryHover: "#01c0ff",
};

const { black, white, secondary } = colorKey;

const GlobalStyled = styled.createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html {
    background: ${white};
    &::-webkit-scrollbar {
      width: 7.5px;
    }
    &::-webkit-scrollbar-thumb {
      background: ${secondary};
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }
  body {
    font-family: "Montserrat", sans-serif;
    background: ${white};
    color: ${black};
  }
  h1 {
    font-size: 75px;
    @media screen and (max-width: 1200px) {
      font-size: 60px;
    }
    @media screen and (max-width: 900px) {
      font-size: 45px;
    }
    @media screen and (max-width: 680px) {
      font-size: 38px;
    }
    @media screen and (max-width: 550px) {
      font-size: 32px;
    }
  }
  h2 {
    font-size: 48px;
    @media screen and (max-width: 1200px) {
      font-size: 40px;
    }
    @media screen and (max-width: 900px) {
      font-size: 32px;
    }
    @media screen and (max-width: 680px) {
      font-size: 24px;
    }
  }
  h3 {
    font-size: 24px;
    @media screen and (max-width: 680px) {
      font-size: 20px;
    }
    @media screen and (max-width: 550px) {
      font-size: 16px;
    }
  }
  h4 {
    font-size: 18px;
    @media screen and (max-width: 680px) {
      font-size: 16px;
    }
    @media screen and (max-width: 550px) {
      font-size: 14px;
    }
  }
  p {
    @media screen and (max-width: 680px) {
      font-size: 14px;
    }
  }
  @media screen and (min-width: 1441px) {
    body {
      max-width: 1440px;
      margin: 0 auto;
    }
  }
`;

export default GlobalStyled;
