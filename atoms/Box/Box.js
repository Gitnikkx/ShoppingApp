import styled, { css as scCss } from "styled-components";
import systemCss from "@styled-system/css";

import {
  color,
  layout,
  grid,
  space,
  position,
  background,
  border,
  shadow,
  typography,
  flexbox,
} from "styled-system";

export const Box = styled.div`
  position: relative;
  font-family: Poppins;
  ${space}
  ${color}
  ${layout}
  ${background}
  ${position}
  ${grid}
  ${border}
  ${typography}
  ${flexbox}
  ${shadow}
  ${({ css }) => css && systemCss(css)}
  ${({ cursor }) =>
    cursor &&
    scCss`
      cursor: ${cursor};
    `}
  ${({ transition }) =>
    transition &&
    scCss`
        transition: ${transition};
      `}

  ${({ textTransform }) =>
    textTransform &&
    scCss`
        text-transform: ${textTransform};
      `}
  ${({ transform }) =>
    transform &&
    scCss`
        transform: ${transform};
      `}
${({ placeItems }) =>
    placeItems &&
    scCss`
        place-items: ${placeItems};
      `}   
  ${({ flexDirection }) =>
    flexDirection &&
    scCss`
        flex-direction: ${flexDirection};
      `}
  ${({ textDecoration }) =>
    textDecoration &&
    scCss`
    text-decoration: ${textDecoration};
      `}
  &:hover {
    ${({ _hover }) => _hover && systemCss(_hover)}
  &:active {
    ${({ _active }) => _active && systemCss(_active)}
  }
`;
