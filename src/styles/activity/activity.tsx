import styled from "@emotion/styled";
const REACTIVE_MASONRY_PIXEL = '550px';

export const Wrapper = styled('div')`
  width: 100vw;
  min-width: 550px;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`//임시 LAYOUT
export const Masonry = styled('div')`
  width: 800px;
  padding: 10px;
  display: grid;
  grid-template-rows: repeat(3,210px);
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: 100px;
  @media(max-width: ${REACTIVE_MASONRY_PIXEL}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const Block = styled('div')`
  margin: 5px;
  border-radius: 10px;
  background-position: center;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: rgba(0,0,0,0);
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  transition: all 0.2s linear;
  &:hover {
    cursor: pointer;
    opacity: 0.7;
    color: whitesmoke;
    &:nth-of-type(4) {
      color: #04E148;
    }
  }
  &:nth-of-type(1) {
    grid-column: span 2;
  }
  &:nth-of-type(7) {
    grid-column: span 2;
  }
  @media(max-width: ${REACTIVE_MASONRY_PIXEL}) {
    width: 400px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`
export const Img = styled('img')`
  width: 150%;
`
export const Description = styled('h2')`
  position: absolute;
  font-size: 27px;
`
