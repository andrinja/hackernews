import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: {
      sm: string;
      md: string;
    };

    colors: {
      background: string;
      primary: string;
      secondary: string;

      text: {
        primary: string;
        secondary: string;
        light: string;
      };
    };

    typography: {
      title: {
        fontSize: string;
      };
      subtitle: {
        fontSize: string;
      };
    };
    heights: {
      navbar: string;
    };
  }
}
