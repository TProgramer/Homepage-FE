import styled from "@emotion/styled";
import {
  DEFAULT_BORDERRADIUS,
  FONTWEIGHT_BOLD,
  FONT_L,
  HOVER_BUTTON,
  MOBILE_STANDARD,
  TABLET_STANDARD,
} from "../global/Global";

export const ModalContainer = styled("div")`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Modal = styled("div")<{ windowWidth: number }>`
  width: ${(props) =>
    props.windowWidth <= MOBILE_STANDARD
      ? `${props.windowWidth}px`
      : props.windowWidth <= TABLET_STANDARD &&
        props.windowWidth > MOBILE_STANDARD
      ? `700px`
      : "850px"};
  height: ${(props) =>
    props.windowWidth <= MOBILE_STANDARD ? "100%" : "80vh"};
  background-color: ${(props) => props.theme.backgroundColor};
  border-radius: ${(props) =>
    props.windowWidth <= MOBILE_STANDARD ? 0 : DEFAULT_BORDERRADIUS};
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CloseBtn = styled("div")`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  ${HOVER_BUTTON}
`;
export const ThumbNail = styled("div")<{ windowWidth: number }>`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  border-radius: ${(props) =>
    props.windowWidth <= TABLET_STANDARD ? 0 : DEFAULT_BORDERRADIUS};
`;
export const Img = styled("img")`
  width: 100%;
  height: 100%;
`;
export const Title = styled("h2")`
  width: 100%;
  height: 50px;
  display: inline-block;
  text-align: center;
  font-size: ${FONT_L};
  font-weight: ${FONTWEIGHT_BOLD};
  margin: 10px 0 0 0;
`;
export const Description = styled("p")`
  width: 100%;
  height: auto;
  display: inline-block;
  padding: 10px;
  overflow: scroll;
`;
