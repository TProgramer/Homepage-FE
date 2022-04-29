import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const MODALBOX_ANIMATION = keyframes`
    0%{
      opacity: 0;
    }
    100%{
      background-color: rgba(0,0,0,0.25);
    }
  `

export const ModalBox = styled('div')`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin: auto;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  animation: ${MODALBOX_ANIMATION} 0.2s linear forwards;
  `
const MODAL_ANIMATION = keyframes`
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  `
export const Modal = styled('div')`
  width: 470px;
  height: 650px;
  display: grid;
  grid-template-rows: auto auto;
  background-color: whitesmoke;
  border-radius: 20px;
  animation: ${MODAL_ANIMATION} 0.2s linear forwards;
`
export const PictureBox = styled('div')`
  width: 470px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
`
export const Picture = styled('img')`
  width: 100%;
  border-radius: 20px 20px 0 0;
  position: absolute;
  top: 0;
`
export const DescriptionBox = styled('div')`
width: 100%;
width: auto;
display: flex;
flex-direction: column;
/* border-top: 1px solid rgba(0,0,0,0.3); */
position: relative;
`
export const DescTitle = styled('span')`
  display: block;
  padding: 5px;
  font-size: 17px;
`
export const Description = styled('div')`
  width: 100%;
  height: 100%;
  padding: 0 6px 6px 6px;
  font-size: 15px;
  color: rgba(0,0,0,0.4);//임의색상
`
export const CloseBtn = styled('button')`
  position: absolute;
  top: 5px;
  right: 8px;
  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  width: 25px;
  height: 15px;
  font-size: 13px;
  color: rgba(0,0,0,0.4);
  cursor: pointer;
  &:hover {
    color: black;
  }
`