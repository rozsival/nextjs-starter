import { ICON_CLASS_NAME, ICON_SIZE } from './constants';
import type { SvgProps } from './types';

export const Svg = ({ color, size, path }: SvgProps) => {
  const dimensions = size ?? ICON_SIZE;
  const fill = color ?? 'currentColor';
  return (
    <svg
      className={ICON_CLASS_NAME}
      fill={fill}
      height={dimensions}
      viewBox="0 0 24 24"
      width={dimensions}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path clipRule="evenodd" d={path} fill={fill} fillRule="evenodd" />
    </svg>
  );
};
