import type { ThemedProps } from '../types';

export const borderRadius =
  (multiplier = 1) =>
  <P extends ThemedProps>({ theme }: P) =>
    `${theme.shape.borderRadius * multiplier}px`;
