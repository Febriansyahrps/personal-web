import { createGlobalStyle } from "styled-components";
const styled = { createGlobalStyle };

const GlobalStyled = styled.createGlobalStyle`
  * {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }
  html {
    &::-webkit-scrollbar {
      width: 7.5px;
    }
    &::-webkit-scrollbar-thumb {
      background: #00efee;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }
  body {
    font-family: "Montserrat", sans-serif;
    background: #fafafa;
    color: #121212;
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
