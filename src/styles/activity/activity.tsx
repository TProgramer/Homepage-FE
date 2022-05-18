import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { MOBILE_STANDARD, TABLET_STANDARD } from "../Global";

export const Wrapper = styled('div')`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`//임시
export const Masonry = styled('div') <{ windowWidth: number }>`
  width: ${props =>
    props.windowWidth <= MOBILE_STANDARD
      ? `${props.windowWidth}px`
      : props.windowWidth <= TABLET_STANDARD && props.windowWidth > MOBILE_STANDARD
        ? `${MOBILE_STANDARD}px`
        : '930px'
  };
  height: auto;
  margin: 100px auto auto auto;
  display: flex;
  flex-wrap: wrap;
`
export const ImageBox = styled('div')`
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
`
export const Img = styled('img')`
  width: 155%;
`
export const Hover = styled('div')`
  width: 100%;
  height: 100%;
  background-color: black;
  background-color: rgba(0,0,0,0);
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s linear;
  color: rgba(0,0,0,0);
  font-size: 25px;
  @media (max-width: ${MOBILE_STANDARD}px) {
    font-size: 1em;
  }
  &:hover {
    background-color: rgba(0,0,0,0.5);
    color: rgba(255,255,255,1);
  }
`
const SKELETON = keyframes`
  0% {
    opacity: 0.2;
  }
  50% {
    opacity: 0.27;
  }
  100% {
    opacity: 0.2;
  }
`
export const Skeleton = styled('div')`
  width: 100%;
  height: 100%;
  background-color: #5D6164;
  animation: ${SKELETON} 0.8s linear infinite;
`