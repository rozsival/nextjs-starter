import dynamic from 'next/dynamic';

export const Nprogress = dynamic(() =>
  import('./nprogress').then((module) => module.Nprogress),
);
