import styled from '@emotion/styled';

export const _H1 = styled.h1`
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 24px;

  text-align: ${(props) => props.style?.textAlign};
`;

export const _P = styled.p`
  font-size: 16px;
  font-weight: lighter;

  text-align: ${(props) => props.style?.textAlign};
`;
