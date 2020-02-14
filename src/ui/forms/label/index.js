import styled from 'styled-components';
import { color, space, width, display, fontSize, alignItems, fontWeight } from 'styled-system';
// helpers
import * as H from '../../../helpers';
// //////////////////////////////////////////////////////////////////////////////

export const Label = styled.label`
  ${color}
  ${space}
  ${width}
  ${display}
  ${fontSize}
  ${fontWeight}
  ${alignItems}
  &::after {
    color: ${({ requiredStarColor }) => requiredStarColor};
    content: ${({ required }) => H.ifElse(required, '*', '')};
  }
`;
