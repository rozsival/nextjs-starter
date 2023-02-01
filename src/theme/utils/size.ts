import type { SpacingValue, ThemedProps } from '../types';

export const spaced =
  (multiplier = 1, units = 'px') =>
  <P extends ThemedProps>({ theme }: P): string =>
    `${theme.size.space * multiplier}${units}`;

export const spacing =
  (
    topBottom: SpacingValue,
    rightLeft?: SpacingValue,
    bottom?: SpacingValue,
    left?: SpacingValue,
  ) =>
  <P extends ThemedProps>(props: P): string =>
    [topBottom, rightLeft, bottom, left]
      .filter((v): v is SpacingValue => v !== undefined)
      .map((v) => (typeof v === 'number' ? spaced(v)(props) : v))
      .join(' ');
