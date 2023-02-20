import type { FunctionComponent } from 'react';
import { memo } from 'react';

import { Svg } from './svg';
import type { CreateIconOptions, IconProps } from './types';

export const createIcon = ({ name, path }: CreateIconOptions) => {
  const Icon: FunctionComponent<IconProps> = ({ color, size }) => (
    <Svg color={color} path={path} size={size} />
  );
  Icon.displayName = name;
  return memo(Icon);
};
