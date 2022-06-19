import styled from "@emotion/styled";
import { MOBILE_STANDARD, TABLET_STANDARD } from "../global/Global";

export const StudyStatusInnerDiv = styled("section")`
  max-width: 1200px;
  height: 886px;
  margin: 0 auto;
  text-align: center;
  padding-top: 200px;
  p {
    font-size: 36px;
    margin-bottom: 50px;
  }
  .box {
    display: flex;
    width: 100%;
    height: 400px;
    gap: 30px;
    .item {
      background-color: transparent;
      flex-grow: 1;
      height: 100%;
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
        @media (max-width: ${TABLET_STANDARD}px) {
            font-size: 28px;
        }
        @media (max-width: ${MOBILE_STANDARD}px) {
            font-size: 18px;
        }
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
        @media (max-width: ${MOBILE_STANDARD}px) {
            font-size: 18px;
        }
        @media (max-width: ${MOBILE_STANDARD}px) {
            font-size: 18px;
        }
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
`;
