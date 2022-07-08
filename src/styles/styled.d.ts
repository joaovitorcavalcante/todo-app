import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;

    colors: {
      base: string;
      primary: string;
    };
  }
}
