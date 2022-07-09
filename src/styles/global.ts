import { createGlobalStyle } from 'styled-components';

import bgImg from '../assets/images/bg-mobile-light.jpg';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Josefin Sans', Arial, Helvetica, sans-serif;
    background-color: ${({ theme }) => theme.colors.base};
    background-image: url(${bgImg});
    background-repeat: no-repeat;
  }

  input, select, textarea, button {
    font-family: 'Josefin Sans', sans-serif;
  }
`;
