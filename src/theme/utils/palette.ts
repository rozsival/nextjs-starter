import type { Color, DefaultTheme, ThemedProps } from '../types';

export const black = <P extends ThemedProps>({
  theme,
}: P): DefaultTheme['palette']['black'] => theme.palette.black;

export const colored =
  <
    C extends keyof Omit<DefaultTheme['palette'], 'black' | 'white'>,
    V extends keyof Color,
  >(
    color: C,
    variant = 'main' as V,
  ) =>
  <P extends ThemedProps>({ theme }: P): DefaultTheme['palette'][C][V] =>
    theme.palette[color][variant];

export const white = <P extends ThemedProps>({
  theme,
}: P): DefaultTheme['palette']['white'] => theme.palette.white;
