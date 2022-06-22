import styled from "@emotion/styled";
import { TABLET_STANDARD, MOBILE_STANDARD } from "../global/Global";

export const EduStatusContainer = styled("main")`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100vw;
  height: auto;
  position: relative;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EduStatusRadioGroup = styled("div")`
  max-width: 800px;
  height: 100px;
  @media (max-width: ${TABLET_STANDARD}px) {
    max-width: 600px;
    font-size: 24px;
  }
  @media (max-width: ${MOBILE_STANDARD}px) {
    max-width: 280px;
    height: 80px;
    font-size: 18px;
  }
  background-color: white;
  border-radius: 50px;
  margin: 200px 0 100px 0;
  display: flex;
  font-size: 36px;
  align-items: center;
  .radio {
    text-align: center;
    line-height: 100px;
    @media (max-width: ${MOBILE_STANDARD}px) {
      line-height: 80px;
    }
  }
`;
export const StyledLabel = styled("label")`
  display: block;
  height: 100%;
  color: black;
  cursor: pointer;
  border-radius: 50px;
  width: 200px;
  @media (max-width: ${TABLET_STANDARD}px) {
    width: 150px;
  }
  @media (max-width: ${MOBILE_STANDARD}px) {
    width: 70px;
  }
`;
export const StyledRadio = styled("input")`
  display: none;

  &:checked + ${StyledLabel} {
    color: white;
    height: 100%;
    background: ${(props) => props.theme.buttonColor.primary};
  }
`;

export const EduStatusBox = styled("div")`
  width: 1200px;
  height: 930px;
  border: 1px solid black;
  margin-bottom: 200px;
  position: relative;
`;

export const StyledCard = styled("div")<{ url: string }>`
  width: 360px;
  height: 270px;
  border: 1px solid black;
  .image {
    width: 100%;
    height: 170px;
    background-image: url(${(props) => props.url});
  }
  .content {
    width: 100%;
    height: 100px;
  }
`;
