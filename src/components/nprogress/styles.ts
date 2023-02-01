import { css } from '@emotion/react';

import { theme } from '../../theme';

const COLOR = theme.palette.primary.main;

export const { styles } = css`
  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${COLOR};
    height: 2px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1100;
  }

  #nprogress .peg {
    box-shadow: 0 0 10px ${COLOR}, 0 0 5px ${COLOR};
    display: block;
    height: 100%;
    opacity: 1;
    position: absolute;
    right: 0;
    transform: rotate(3deg) translate(0px, -4px);
    width: 100px;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .bar {
    position: absolute;
  }
`;
