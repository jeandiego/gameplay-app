import 'styled-components';

// and extend it
declare module 'styled-components' {
  export interface DefaultTheme {

    colors: {
      background: string,
      heading: string,
      primary: string,
      line: string,
    };
  }
}