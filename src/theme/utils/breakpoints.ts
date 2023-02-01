import type { DefaultTheme, ThemedProps } from '../types';

export const down =
  <B extends keyof DefaultTheme['breakpoints']>(breakpoint: B) =>
  <P extends ThemedProps>({ theme }: P) =>
    `@media screen and (max-width: ${theme.breakpoints[breakpoint]}px)`;

export const up =
  <B extends keyof DefaultTheme['breakpoints']>(breakpoint: B) =>
  <P extends ThemedProps>({ theme }: P) =>
    `@media screen and (min-width: ${theme.breakpoints[breakpoint]}px)`;
