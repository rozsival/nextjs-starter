import { css, Global } from '@emotion/react';

import { theme } from '../theme';

export const globalStyle = (
  <Global
    styles={css`
      html,
      body,
      #__next {
        background: ${theme.palette.primary.light};
        margin: 0;
        -webkit-overflow-scrolling: touch;
        padding: 0;
        width: 100%;
      }

      html,
      body {
        font-family: ${theme.font.family}, -apple-system, BlinkMacSystemFont,
          Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
          Helvetica Neue, sans-serif;
        font-size: 14px;
        height: 100%;
        margin: 0;
        min-height: 100%;
        padding: 0;
      }

      html {
        scroll-behavior: smooth;
        text-size-adjust: 100%;
      }

      body {
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        -ms-overflow-style: scrollbar;
        overflow-y: auto;
        overscroll-behavior-y: none;
        text-rendering: optimizeLegibility;
      }

      #__next {
        display: flex;
        flex-basis: auto;
        flex-direction: column;
        flex-grow: 1;
        flex-shrink: 0;
        height: 100%;
        overflow-x: hidden;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      * {
        box-sizing: border-box;
      }
    `}
  />
);
