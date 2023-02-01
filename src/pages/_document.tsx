import { Html, Head, Main, NextScript } from 'next/document';

import { font } from '../styles';

const Document = () => (
  <Html lang="en">
    <Head>{font}</Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default Document;
