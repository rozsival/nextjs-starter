import type { DefaultTheme, ThemedProps } from '../types';

export const fontWeight =
  <W extends keyof DefaultTheme['font']['weight']>(weight: W) =>
  <P extends ThemedProps>({ theme }: P) =>
    theme.font.weight[weight];
