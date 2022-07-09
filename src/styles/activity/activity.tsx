import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import {
  DEFAULT_BOXSHADOW,
  FONT_XXXL,
  MOBILE_STANDARD,
  TABLET_STANDARD,
} from "../global/Global";

export const Wrapper = styled("div")`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
export const ActivityHeader = styled("header")<{ windowWidth: number }>`
  width: ${(props) =>
    props.windowWidth <= MOBILE_STANDARD
      ? `${props.windowWidth}px`
      : props.windowWidth <= TABLET_STANDARD &&
        props.windowWidth > MOBILE_STANDARD
      ? `${MOBILE_STANDARD}px`
      : "915px"};
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px auto 10px auto;
  border-bottom: 1px solid ${(props) => props.theme.accentColor};
  .flexBox {
    width: 100%;
    height: 90%;
    display: flex;
    .flexBox__title {
      width: auto;
      height: 100%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .h1 {
        font-size: ${FONT_XXXL};
        margin-left: 10px;
      }
    }
    .flexBox__title2 {
      width: 80%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.3);
    }
  }
  .flexBox__sub {
    width: 100%;
    .subTitle {
    }
  }
`;
export const Masonry = styled("div")<{ windowWidth: number }>`
  width: ${(props) =>
    props.windowWidth <= MOBILE_STANDARD
      ? `${props.windowWidth}px`
      : props.windowWidth <= TABLET_STANDARD &&
        props.windowWidth > MOBILE_STANDARD
      ? `${MOBILE_STANDARD}px`
      : "930px"};
  height: auto;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;
export const ImageBox = styled("div")`
  aspect-ratio: 1 / 1;
  width: 290px;
  margin: 10px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  object-fit: fill;
  position: relative;
  box-shadow: ${DEFAULT_BOXSHADOW};
  @media (max-width: ${TABLET_STANDARD}px) {
    width: 250px;
    margin: 3px;
    box-shadow: none;
  }
  @media (max-width: ${MOBILE_STANDARD}px) {
    width: 33%;
    margin: 0.16666666%;
    box-shadow: none;
  }
`;
export const Img = styled("img")`
  width: 155%;
`;
const SKELETON = keyframes`
    0% {
      background-color: #DDDDDD;
    }
    50% {
      background-color: #CDCDCD;
    }
    100% {
      background-color: #DDDDDD;
    }
  `;
export const Skeleton = styled("div")<{ load: boolean }>`
  width: 100%;
  height: 100%;
  animation: ${(props) => (props.load ? SKELETON : "none")} 0.7s linear infinite;
  background-color: rgba(0, 0, 0, ${(props) => (props.load ? 1 : 0)});
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  color: rgba(0, 0, 0, 0);
  font-size: 25px;
  cursor: pointer;
  @media (max-width: ${MOBILE_STANDARD}px) {
    font-size: 1em;
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
    color: rgba(255, 255, 255, 1);
  }
`;
