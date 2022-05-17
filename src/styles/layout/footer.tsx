import styled from "@emotion/styled";

export const StyledFooter = styled("footer")`
  border-top: 1px solid black;
  position: absolute;
  bottom: 0;
  width: calc(100% - 320px);
  margin-left: 160px;
  @media (max-width: 800px) {
    width: 100%;
    margin: 0;
  }
  h1 {
    font-weight: bold;
  }
  p {
    color: #767575;
  }
`;
