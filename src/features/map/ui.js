import styled, { css, keyframes } from "styled-components";
// ui
import { PositionedFlex } from "../../ui";
/// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const fadeIn = keyframes`
  0% {  display: none; opacity: 0 }
  100% { opacity: 1 }
`;

export const fadeOut = keyframes`
  0% { opacity: 1; }
  100% { opacity: 0; }
`;

export const vanishIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(1, 1);
  }
  50% {
    opacity: 0.5;
    transform: scale(2, 2);
  }
  100% {
    opacity: 1;
    transform: scale(1, 1);
  }
`;

export const animationvanishIn = () => css`
  ${vanishIn} 1s ease-out;
`;

export const ItemsStatWrap = styled(PositionedFlex)`
  animation: ${({ withAnimation }) => (withAnimation ? animationvanishIn : "")};
`;

export const animationFadeIn = () => css`
  ${fadeIn} 1s ease;
`;

export const animationFadeOut = () => css`
  ${fadeOut} 1s ease;
`;
