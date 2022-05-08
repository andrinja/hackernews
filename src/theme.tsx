import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  borderRadius: {
    sm: '4px',
    md: '8px',
  },

  colors: {
    background: '#FAFAFA',
    primary: '#F28F3B',
    secondary: '#588B8B',
    text: {
      primary: '#061B25',
      secondary: '#8B8B8B',
      light: '#E9EAEA',
    },
  },
  typography: {
    title: {
      fontSize: '24px',
    },
    subtitle: {
      fontSize: '18px',
    },
  },
  heights: {
    navbar: '68px',
  },
};

const size = {
  xs: '320px',
  sm: '768px',
  lg: '1200px',
};

export const device = {
  xs: `@media only screen and (min-width: ${size.xs})`,
  sm: `@media only screen and (min-width: ${size.sm})`,
  lg: `@media only screen and (min-width: ${size.lg})`,
};
