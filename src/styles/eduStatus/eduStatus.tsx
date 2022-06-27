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
  max-width: 1200px;
  height: auto;
  margin-bottom: 200px;
  position: relative;
  display: flex;
  gap: 60px 60px;
  @media (max-width: 1199px) {
    justify-content: center;
  }
  flex-wrap: wrap;
`;

export const StyledCard = styled("div")<{ url: string; type: string }>`
  width: 360px;
  height: 270px;
  border-radius: 10px;
  background: white;
  .image {
    width: 100%;
    height: 170px;
    background-image: url(${(props) => props.url});
    border-radius: 10px 10px 0 0;
  }
  .content {
    position: relative;
    width: 100%;
    height: 100px;
    padding: 0 30px 0 30px;
    .left_content {
      display: inline-block;
      position: absolute;
      top: 40px;
      .content_name {
        font-size: 18px;
        margin-bottom: 3px;
      }
      .content_tech {
        color: #e2e2e2;
      }
    }
    .right_content {
      right: 30px;
      top: 20px;
      display: inline-block;
      position: absolute;
      .content_degree {
        text-align: right;
        margin: 0 10px 6px 0;
        font-size: 18px;
      }
      .content_type {
        text-align: center;
        line-height: 36px;
        width: 80px;
        height: 36px;
        background: ${(props) =>
          props.type === "Web"
            ? "#ec9b3b"
            : props.type === "Android"
            ? "#F24C4C"
            : "#293462"};
        border-radius: 25px;
        color: white;
      }
    }
  }
`;
