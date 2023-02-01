import Head from 'next/head';
import { memo } from 'react';

export const Seo = memo(function Seo() {
  return (
    <Head>
      <title>Next.js Starter</title>
      <meta
        key="description"
        content="Vít's Next.js Starter template."
        name="description"
      />
    </Head>
  );
});
