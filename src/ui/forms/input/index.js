import R from "ramda";
import styled from "styled-components";
import {
  color,
  space,
  width,
  height,
  border,
  opacity,
  display,
  position,
  fontSize,
  boxShadow,
  borderColor,
  borderRadius
} from "styled-system";
// theme
import Theme from "../../../theme";
// //////////////////////////////////////////////////////////////////////////////

// TODO: with render border

export const Input = styled.input`
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${opacity}
  ${display}
  ${position}
  ${fontSize}
  ${boxShadow}
  ${borderColor}
  ${borderRadius}
  outline: none;
  cursor: ${({ cursor }) => R.or(cursor, "text")};
  &:focus {
    box-shadow: ${({ focusBoxShadow }) =>
      R.or(focusBoxShadow, Theme.colors.main)};
  }
  &::placeholder {
    color: ${({ placeholderColor }) => placeholderColor};
  }
`;

export const SelectWrapper = styled.div`
  ${width};
  position: relative;
  &::before {
    width: 0;
    height: 0;
    z-index: 1;
    content: "";
    position: absolute;
    pointer-events: none;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;

    top: ${({ afterTop }) => afterTop || "10px"};
    border-bottom: 1px solid ${Theme.colors.lightGray};
    right: ${({ afterRight }) => afterRight || "10px"};
  }
  &::after {
    width: 0;
    height: 0;
    content: "";
    position: absolute;
    pointer-events: none;
    border-left: 1px solid transparent;
    border-right: 1px solid transparent;

    border-top: 1px solid ${Theme.colors.lightGray};
    top: ${({ afterTop }) => afterTop || "10px"};
    right: ${({ afterRight }) => afterRight || "10px"};
  }
`;
