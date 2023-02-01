import Head from 'next/head';

import { Layout, Nprogress } from '../components';
import { ErrorBoundary } from '../containers';
import { globalStyle } from '../styles';
import { ThemeProvider } from '../theme';
import type { AppType } from '../types';

const App: AppType = ({ Component, pageProps }) => (
  <>
    <Head>{globalStyle}</Head>
    <Nprogress />
    <ErrorBoundary>
      <ThemeProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </ErrorBoundary>
  </>
);

export default App;
