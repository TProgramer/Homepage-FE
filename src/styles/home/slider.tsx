import { SerializedStyles } from "@emotion/react";
import styled from "@emotion/styled";
import {
  DEFAULT_BORDERRADIUS,
  DEFAULT_BOXSHADOW,
  FONT_L,
  FONT_XL,
  FONT_XXL,
  MOBILE_STANDARD,
  TABLET_STANDARD,
  TRANSITION,
} from "../global/Global";

export const Container = styled("div")<{
  bgColor: string[];
}>`
  width: 100vw;
  height: 800px;
  ${TRANSITION}
  background-color: ${(props) => props.bgColor[Math.floor(Math.random() * 4)]};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${`${TABLET_STANDARD}px`}) {
    height: 600px;
  }
  @media (max-width: ${`${MOBILE_STANDARD}px`}) {
    height: 400px;
  }
  .title {
    display: inline-block;
    width: 100%;
    height: 25%;
    text-align: center;
    font-size: ${FONT_XXL};
    padding: 50px 0;
    color: ${(props) => props.theme.textColor.primary};
    @media (max-width: ${`${MOBILE_STANDARD}px`}) {
      font-size: ${FONT_XL};
    }
  }
  .takealook {
    width: 200px;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: ${FONT_XL};
    border-radius: ${DEFAULT_BORDERRADIUS};
    margin: auto 0;
    ${DEFAULT_BOXSHADOW}
    color: ${(props) => props.theme.textColor.sub};
    background-color: ${(props) => props.theme.buttonColor.primary};
    cursor: pointer;
    ${TRANSITION}
    &:hover {
      background-color: ${(props) => props.theme.buttonColor.onHover};
    }
    @media (max-width: ${`${MOBILE_STANDARD}px`}) {
      width: 100px;
      height: 45px;
      font-size: ${FONT_L};
    }
  }
`;
export const ClickBox = styled("div")`
  width: 350px;
  height: 25%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  .click {
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    color: ${(props) => props.theme.buttonColor.primary};
    cursor: pointer;
    ${TRANSITION}
    &:first-of-type {
      transform: rotate(180deg);
    }
    &:hover {
      color: ${(props) => props.theme.buttonColor.onHover};
    }
  }
`;
export const RotateContainer = styled("div")`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  perspective: 2000px;
  @media (max-width: ${`${TABLET_STANDARD}px`}) {
    perspective: 1400px;
  }
  @media (max-width: ${`${MOBILE_STANDARD}px`}) {
    perspective: 800px;
  }
`;
export const AxisPlane = styled("div")<{ deg: number }>`
  width: 350px;
  height: 280px;
  position: relative;
  border-radius: ${DEFAULT_BORDERRADIUS};
  transform-style: preserve-3d;
  transition: all 0.5s ease-out;
  transform: rotateY(${(props) => `${props.deg}deg`});
  @media (max-width: ${`${TABLET_STANDARD}px`}) {
    width: 230px;
    height: 160px;
  }
  @media (max-width: ${`${MOBILE_STANDARD}px`}) {
    width: 130px;
    height: 100px;
  }
`;
export const Plane = styled("div")<{
  forLoop: (Z: number) => SerializedStyles;
}>`
  ${DEFAULT_BOXSHADOW}
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  position: absolute;
  transform-origin: center;
  border-radius: ${DEFAULT_BORDERRADIUS};
  overflow: hidden;
  /* box-shadow: 0px 0px 55px ${(props) => props.theme.buttonColor.primary}; */
  ${(props) => props.forLoop(550)}
  @media (max-width: ${`${TABLET_STANDARD}px`}) {
    ${(props) => props.forLoop(350)}
  }
  @media (max-width: ${`${MOBILE_STANDARD}px`}) {
    ${(props) => props.forLoop(200)}
  }
  .rotate__img {
    width: 120%;
  }
  .rotate__title {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10;
    font-size: ${FONT_XXL};
    color: ${(props) => props.theme.textColor.sub};
  }
`;
