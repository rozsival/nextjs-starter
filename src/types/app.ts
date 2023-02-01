import type { NextComponentType, NextPage } from 'next';
import type {
  AppContext,
  AppInitialProps as NextAppInitialProps,
  AppProps as NextAppProps,
} from 'next/app';

export type AppPageProps = Record<string, never>;

export type AppPropsType = NextAppProps<AppPageProps>;

export type AppInitialProps = NextAppInitialProps<AppPageProps>;

export type AppProps = Omit<AppPropsType, 'Component'> & {
  Component: NextPage<AppPageProps>;
};

export type AppType = NextComponentType<AppContext, AppInitialProps, AppProps>;
