import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;

    colors: {
      base: string;
      primary: string;
      text: string;
      checkBorder: string;
      inputPlaceholder: string;
      inputShadow: string;
    };
  }
}
