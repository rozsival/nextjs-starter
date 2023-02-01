import {
  FONT_FAMILY,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_REGULAR,
} from '../styles/constants';

import type { DefaultTheme } from './types';

export const theme: DefaultTheme = {
  breakpoints: {
    xxs: 0,
    xs: 360,
    sm: 600,
    md: 900,
    lg: 1140,
    xl: 1360,
    xxl: 1530,
  },
  font: {
    family: FONT_FAMILY,
    weight: {
      bold: FONT_WEIGHT_BOLD,
      regular: FONT_WEIGHT_REGULAR,
    },
  },
  palette: {
    black: '#000000',
    primary: {
      dark: '#8A8F99',
      main: '#B8BFCC',
      light: '#F2F7FF',
    },
    white: '#FFFFFF',
  },
  shape: {
    borderRadius: 8,
  },
  size: {
    space: 8,
  },
};
