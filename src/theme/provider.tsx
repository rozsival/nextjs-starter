import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import type { ReactElement } from 'react';

import { theme } from './theme';

export const ThemeProvider = ({
  children,
}: {
  children: ReactElement;
}): ReactElement => (
  <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
);
