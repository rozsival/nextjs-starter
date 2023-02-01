import { Meta } from './meta';
import { Seo } from './seo';
import type { PageProps } from './types';

export const Page = ({ children }: PageProps) => (
  <>
    <Meta />
    <Seo />
    {children}
  </>
);
