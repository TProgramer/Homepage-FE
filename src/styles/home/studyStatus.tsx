import styled from "@emotion/styled";

export const StudyStatusInnerDiv = styled("section")`
  width: 100vw;
  height: auto;
  margin: 0 auto;
  text-align: center;
  padding: 200px 0 286px 0;
  background-color: ${(props) => props.theme.backgroundColor};
  p {
    font-size: 36px;
    margin-bottom: 50px;
  }
  .box {
    display: flex;
    width: 100%;
    height: auto;
    gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
    .item {
      background-color: transparent;
      width: 360px;
      height: 400px;
      perspective: 1000px;

      .item_inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }
      .front {
        font-size: 36px;
        line-height: 400px;
        border-radius: 40px;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        background: #e2e2e2;
        color: black;
      }
      .back {
        font-size: 36px;
        line-height: 400px;
        border-radius: 40px;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        background: #9989f7;
        color: white;
        transform: rotateY(180deg);
      }
    }
    .item:hover .item_inner {
      transform: rotateY(180deg);
    }
  }
`;
