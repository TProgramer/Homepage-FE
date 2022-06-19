import styled from "@emotion/styled";
import { FONT_L, FONT_XXXL } from "./global/Global";

export const _H1 = styled.h1`
  font-size: ${FONT_XXXL};
  font-weight: bold;
  margin-bottom: 24px;

  text-align: ${(props) => props.style?.textAlign};
`;

export const _P = styled.p`
  font-size: ${FONT_L};
  font-weight: lighter;

  text-align: ${(props) => props.style?.textAlign};
`;
