import * as R from 'ramda';
import styled from 'styled-components';
import {
  color,
  space,
  width,
  height,
  border,
  display,
  fontSize,
  boxShadow,
  borderColor,
  borderRadius,
} from 'styled-system';
// theme
import Theme from '../../../theme';
// helpers
import * as H from '../../../helpers';
// //////////////////////////////////////////////////////////////////////////////

export const Textarea = styled.textarea`
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${display}
  ${fontSize}
  ${boxShadow}
  ${borderColor}
  ${borderRadius}
  resize: none;
  outline: none;
  padding: ${({ p }) => R.or(p, '10px')};
  cursor: ${({ cursor }) => R.or(cursor, 'text')};
  border: ${({ border }) => R.or(border, '1px solid')};
  height: ${({ height }) => R.or(height, `${H.w(13)}px`)};
  border-color: ${({ borderColor }) => R.or(borderColor, Theme.colors.lightGray)};
  &:focus {
    box-shadow: ${({ focusBoxShadow }) => R.or(focusBoxShadow, Theme.boxShadow)};
  }
  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }
`;
