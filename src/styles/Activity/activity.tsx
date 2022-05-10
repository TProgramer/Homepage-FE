import styled from "@emotion/styled";

export const Wrapper = styled('div')`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  justify-content: center;
`//임시
export const Masonry = styled('div') <{ windowWidth: number }>`
  width: ${props =>
    props.windowWidth >= 930
      ? '930px'
      : props.windowWidth
  };
  height: auto;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  div {
    background-color: rgba(0,0,0,0.3);
    aspect-ratio: 1 / 1;
    width: 290px;
    margin: 10px;
    @media (max-width: 930px) {
      width: 30%;
    }
    @media (max-width: 600px) {
      width: 165px;
      margin:0.3px;
    }
  }
`
export const Image = styled('img')`

`
// width: ${
//   props =>
//   props.windowWidth >= 930
//     ? '290px'
//     : `${(29 / 93) * props.windowWidth}px`
// };
// height: ${
//   props =>
//   props.windowWidth >= 930
//     ? '290px'
//     : `${(29 / 93) * props.windowWidth}px`
// };
// margin: ${
//   props =>
//   props.windowWidth >= 930
//     ? '10px'
//     : `${((props.windowWidth / 3) - ((29 / 93) * props.windowWidth)) / 2}px`
// };