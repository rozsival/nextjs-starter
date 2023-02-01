import Head from 'next/head';
import { memo } from 'react';

export const Meta = memo(function Meta() {
  return (
    <Head>
      <meta
        key="viewport"
        content="width=device-width, initial-scale=1"
        name="viewport"
      />
      <link key="favicon" href="/favicon.ico" rel="icon" />
    </Head>
  );
});
