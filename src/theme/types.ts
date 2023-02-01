import type { WithTheme } from '@emotion/react';

import type {
  FONT_FAMILY,
  FONT_WEIGHT_BOLD,
  FONT_WEIGHT_REGULAR,
} from '../styles/constants';

export type Color = {
  main: string;
  light?: string;
  dark?: string;
};

export type ColorDark = Color & {
  dark: string;
};

export type ColorLight = Color & {
  light: string;
};

export type ColorComplete = ColorDark & ColorLight;

export type DefaultTheme = {
  breakpoints: {
    xxs: number;
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
    xxl: number;
  };
  font: {
    family: typeof FONT_FAMILY;
    weight: {
      bold: typeof FONT_WEIGHT_BOLD;
      regular: typeof FONT_WEIGHT_REGULAR;
    };
  };
  palette: {
    primary: ColorComplete;
    black: string;
    white: string;
  };
  shape: {
    borderRadius: number;
  };
  size: {
    space: number;
  };
};

export type SpacingValue = number | string;

export type ThemedProps<P = unknown> = WithTheme<P, DefaultTheme>;
