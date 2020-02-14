import R from "ramda";
import styled, { css, keyframes } from "styled-components";
import {
  top,
  left,
  flex,
  size,
  color,
  space,
  width,
  right,
  height,
  bottom,
  border,
  zIndex,
  opacity,
  padding,
  gridGap,
  gridRow,
  display,
  flexGrow,
  position,
  maxWidth,
  minWidth,
  fontSize,
  flexWrap,
  overflow,
  overflowX,
  overflowY,
  textAlign,
  maxHeight,
  minHeight,
  boxShadow,
  borderTop,
  fontWeight,
  lineHeight,
  gridColumn,
  borderLeft,
  background,
  alignItems,
  borderColor,
  borderRight,
  borderWidth,
  gridAutoRows,
  borderBottom,
  borderRadius,
  letterSpacing,
  gridColumnGap,
  flexDirection,
  justifyContent,
  backgroundSize,
  backgroundImage,
  gridAutoColumns,
  gridTemplateRows,
  gridTemplateAreas,
  backgroundPosition,
  gridTemplateColumns,
  fontFamily
} from "styled-system";
// helpers
import * as H from "../helpers";
// export /////////////////////////////////////////////////////////////////////////////////////////////////
export { Input, SelectWrapper } from "./forms/input";
export { Label } from "./forms/label";
export { Textarea } from "./forms/textarea";
// ////////////////////////////////////////////////////////////////////////////////////////////////////////

export const Abstract = tag => styled(R.or(tag, "div"))`
  ${top}
  ${left}
  ${flex}
  ${size}
  ${color}
  ${space}
  ${width}
  ${right}
  ${height}
  ${bottom}
  ${border}
  ${padding}
  ${opacity}
  ${display}
  ${flexGrow}
  ${overflow}
  ${fontSize}
  ${position}
  ${maxWidth}
  ${minWidth}
  ${overflow}
  ${overflowX}
  ${overflowY}
  ${textAlign}
  ${maxHeight}
  ${minHeight}
  ${boxShadow}
  ${borderTop}
  ${background}
  ${fontWeight}
  ${lineHeight}
  ${borderLeft}
  ${borderWidth}
  ${borderRight}
  ${borderColor}
  ${borderBottom}
  ${borderRadius}
  ${backgroundSize}
  ${backgroundImage}
  ${backgroundPosition}
  filter: ${({ filter }) => filter};
  cursor: ${({ cursor }) => cursor};
  animation: ${({ animation }) => animation};
  transform: ${({ transform }) => transform};
  transition: ${({ transition }) => transition};
  ${({ additionalStyles }) => additionalStyles};
  white-space: ${({ whiteSpace }) => whiteSpace};
  text-overflow: ${({ textOverflow }) => textOverflow};
  text-decoration: ${({ textDecoration }) => textDecoration};
  border-top-left-radius: ${({ borderTopLeftRadius }) => borderTopLeftRadius};
  border-top-right-radius: ${({ borderTopRightRadius }) =>
    borderTopRightRadius};
  border-bottom-left-radius: ${({ borderBottomLeftRadius }) =>
    borderBottomLeftRadius};
  border-bottom-right-radius: ${({ borderBottomRightRadius }) =>
    borderBottomRightRadius};
}};
`;

export const Box = Abstract("div");

export const Flex = styled(Box)`
  ${flexWrap}
  ${alignItems}
  ${borderColor}
  ${borderBottom}
  ${flexDirection}
  ${justifyContent}
  display: ${({ inline }) => H.ifElse(inline, "inline-flex", "flex")};
`;

export const Grid = styled(Box)`
  ${gridGap}
  ${gridRow}
  ${alignItems}
  ${gridColumn}
  ${gridAutoRows}
  ${gridColumnGap}
  ${gridAutoColumns}
  ${gridTemplateRows}
  ${gridTemplateAreas}
  ${gridTemplateColumns}
  display: ${({ display }) => R.or(display, "grid")};
`;

export const PositionedAbstract = instance => styled(instance)`
  ${top}
  ${left}
  ${right}
  ${bottom}
  ${position}
`;

export const PositionedBox = PositionedAbstract(Box);
export const PositionedFlex = PositionedAbstract(Flex);

export const Text = styled.span`
  ${color}
  ${space}
  ${width}
  ${height}
  ${padding}
  ${display}
  ${opacity}
  ${fontSize}
  ${textAlign}
  ${fontFamily}
  ${lineHeight}
  ${fontWeight}
  ${letterSpacing}
  white-space: ${({ whiteSpace }) => whiteSpace};
  text-overflow: ${({ textOverflow }) => textOverflow};
  text-decoration: ${({ textDecoration }) => textDecoration};
}};
  cursor: ${({ cursor }) => cursor};
  text-decoration: ${({ textDecoration }) => textDecoration};
  &:hover {
    text-decoration: ${({ hoverTextDecoration }) => hoverTextDecoration};
  }
`;

export const Button = styled.button`
  ${color}
  ${space}
  ${width}
  ${height}
  ${border}
  ${zIndex}
  ${opacity}
  ${fontSize}
  ${boxShadow}
  ${fontWeight}
  ${borderColor}
  ${borderRadius}
  cursor: ${({ cursor }) => cursor};
`;

export const createMinWithMediaQuery = n => `
  @media screen and (min-width: ${n}px)
`;

export const createMaxWithMediaQuery = n => `
  @media screen and (max-width: ${n}px)
`;

// animations

export const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
    display: none;
  }
`;

const defaultAnimation = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const spin = keyframes`
  0% {
    opacity: 1;
    filter: blur(0px);
    transform:scale(1);
  }
  50% {
    opacity: 0;
    filter: blur(4px);
    transform: scale(1.5);
  }
  100% {
    opacity: 1;
    filter: blur(0px);
    transform: scale(1);
  }
`;

const animations = {
  spin,
  fadeIn,
  fadeOut,
  defaultAnimation
};

export const getAnimationName = animationName => {
  switch (animationName) {
    case "fade-in":
      return fadeIn;
    case "fade-out":
      return fadeOut;
    default:
      return defaultAnimation;
  }
};

export const getAnimation = ({ animationName, animationProps }) => css`
  animation: ${R.pathOr(defaultAnimation, [animationName], animations)}
    ${animationProps};
`;

export const animation = ({ animationName, animationProps }) => css`
  animation: ${getAnimationName(animationName)} ${animationProps};
`;
