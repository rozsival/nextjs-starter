import type { Font } from './types';

export const FONT_API = 'https://fonts.googleapis.com/css2';
export const FONT_FAMILY = 'Roboto';

export const FONT_WEIGHT_REGULAR = 400;
export const FONT_WEIGHT_BOLD = 700;

export const FONTS: Font[] = [
  { name: FONT_FAMILY, weights: [FONT_WEIGHT_REGULAR, FONT_WEIGHT_BOLD] },
];
