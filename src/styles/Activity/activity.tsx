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
    @media (max-width: 929px) {
      //여기서 꺠짐. 수정필요!!!
    }
    @media (max-width: 599px) {
      width: 166px;
      margin: ${props => `${10 - ((600 - props.windowWidth) * 0.097)}px`};
    }
  }//전체적으로 Masonry안의 중앙정렬이 안됨. 수정필요!!
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