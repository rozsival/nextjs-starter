import { FONT_API, FONTS } from './constants';
import type { Font } from './types';

const mapFamily = ({ name, weights }: Font) =>
  `family=${name.replaceAll(' ', '+')}:wght@${weights.join(';')}`;

const family = FONTS.map(mapFamily).join('&');
const href = `${FONT_API}?${family}&display=swap`;

export const font = (
  <>
    <link href="https://fonts.googleapis.com" rel="preconnect" />
    <link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
    <link href={href} rel="stylesheet" />
  </>
);
