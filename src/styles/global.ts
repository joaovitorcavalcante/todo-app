import { createGlobalStyle } from 'styled-components';

import bgImgMobile from '../assets/images/bg-mobile-light.jpg';
import bgImgDesktop from '../assets/images/bg-desktop-light.jpg';

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
    background-image: url(${bgImgMobile});
    background-repeat: no-repeat;

    @media (min-width: 376px) {
      background-image: url(${bgImgDesktop});
    }
  }

  input, select, textarea, button {
    font-family: 'Josefin Sans', sans-serif;
  }
`;
