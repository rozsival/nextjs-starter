import Head from 'next/head';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { useEffect } from 'react';

import { styles } from './styles';

const start = () => NProgress.start();
const stop = () => NProgress.done();

export const Nprogress = () => {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', stop);
    router.events.on('routeChangeError', stop);
    router.events.on('routeChangeStart', start);
    return () => {
      router.events.off('routeChangeComplete', stop);
      router.events.off('routeChangeError', stop);
      router.events.off('routeChangeStart', start);
    };
  }, [router.events]);
  return (
    <Head>
      <style key="nprogress">{styles}</style>
    </Head>
  );
};
