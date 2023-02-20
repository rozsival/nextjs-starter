export type IconProps = {
  color?: string;
  size?: number;
};

export type SvgProps = IconProps & {
  path: string;
};

export type CreateIconOptions = Pick<SvgProps, 'path'> & { name: string };
