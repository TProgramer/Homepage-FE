import styled from "@emotion/styled";
import { MOBILE_STANDARD, MAX_WIDTH } from "../../global/Global";
export const StyledFooter = styled("footer")`
  @media (max-width: ${MOBILE_STANDARD}px) {
    display: none;
  }
  background-color: #000000;
  height: 500px;

  width: 100%;
  .inner_footer {
    width: ${MAX_WIDTH};
    height: 100%;
    margin: 0 auto;
    .title {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      height: 200px;
      border-bottom: 1px solid #ffffff;
      .NL {
        font-size: 72px;
        color: white;
      }
      .NL_detail {
        font-size: 18px;
        color: white;
      }
    }
    .subtitle {
      position: relative;
      width: 100%;
      height: 300px;
      .info1 {
        position: absolute;
        right: 0;
        span {
          font-size: 14px;
          margin: 0 0 0 8px;
          color: white;
        }
      }
      .info2 {
        position: absolute;
        right: 0;
        margin: 30px 101px 0 0;
        span {
          font-size: 14px;
          margin: 0 0 0 8px;
          color: white;
        }
      }
      .info3 {
        position: absolute;
        right: 0;
        margin: 60px 134px 0 0;
        span {
          font-size: 14px;
          margin: 0 0 0 8px;
          color: white;
        }
      }
    }
  }
`;