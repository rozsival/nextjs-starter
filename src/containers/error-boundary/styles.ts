import styled from '@emotion/styled';

import { borderRadius, colored, spacing } from '../../theme/utils';
import { fontWeight } from '../../theme/utils/font';

const CODE_MARGIN = 6;
const CODE_PADDING_X = 3;
const CODE_PADDING_Y = 4;

export const Code = styled('code')`
  background: ${colored('primary', 'light')};
  border-radius: ${borderRadius()};
  color: ${colored('primary', 'dark')};
  display: block;
  font-weight: ${fontWeight('bold')};
  margin: ${spacing(CODE_MARGIN, 'auto')};
  padding: ${spacing(CODE_PADDING_Y, CODE_PADDING_X)};
  text-align: center;
`;
