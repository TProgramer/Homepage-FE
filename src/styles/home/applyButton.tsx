import styled from "@emotion/styled";
import { FONT_XL, MAX_WIDTH } from "../global/Global";

export const ApplyBox = styled("div")<{ backgroundImageUrl: string }>`
  width: 100vw;
  height: calc(100vh - 100px);

  display: flex;
  flex-direction: column;
  justify-content: center;

  margin: 0 auto;
  background-image: url("${(props) => props.backgroundImageUrl}");
  background-size: cover;
`;

export const ApplyMessage = styled("div")`
  width: 100%;
`;

export const Apply = styled("a")`
  width: 200px;
  height: 50px;
  align-self: center;
  text-align: center;

  border: 1px solid #000;
  border-radius: 5px;

  font-size: ${FONT_XL};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: #000;
    color: #fff;
  }
`;
