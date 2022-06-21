import styled from "@emotion/styled";
import { MOBILE_STANDARD, TABLET_STANDARD } from "../global/Global";

export const StudyStatusDiv = styled("section")`
  width: 100vw;
  height: auto;
  background-color: ${(props) => props.theme.backgroundColor};
`;

export const StudyStatusInnerDiv = styled("div")`
  max-width: 1200px;
  height: auto;
  margin: 0 auto;
  text-align: center;
  padding: 200px 0 286px 0;
  @media (max-width: ${MOBILE_STANDARD}px) {
    padding: 120px 0 194px 0;
  }
  p {
    font-size: 36px;
    margin-bottom: 50px;
    @media (max-width: ${MOBILE_STANDARD}px) {
      font-size: 24px;
    }
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
      @media (max-width: ${MOBILE_STANDARD}px) {
        width: 280px;
        height: 320px;
      }
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
        @media (max-width: ${MOBILE_STANDARD}px) {
          line-height: 320px;
        }
        border-radius: 40px;
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden; /* Safari */
        backface-visibility: hidden;
        background: white;
        color: black;
      }
      .back {
        font-size: 36px;
        line-height: 400px;
        @media (max-width: ${MOBILE_STANDARD}px) {
          line-height: 320px;
        }
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
`;
