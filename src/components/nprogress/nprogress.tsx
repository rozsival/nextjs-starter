import Head from 'next/head';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import type { FunctionComponent } from 'react';
import { useEffect } from 'react';

import { styles } from './styles';

const start = () => NProgress.start();
const stop = () => NProgress.done();

export const Nprogress: FunctionComponent = () => {
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
      <style>{styles}</style>
    </Head>
  );
};
