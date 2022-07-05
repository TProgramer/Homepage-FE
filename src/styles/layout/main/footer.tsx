import styled from "@emotion/styled";
import { MAX_WIDTH, FONT_XXXL, FONT_XL } from "../../global/Global";

export const StyledFooter = styled("footer")`
  background-color: #000000;
  height: 500px;
  width: 100%;
  .contents {
    max-width: ${MAX_WIDTH};
    height: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
  }
  .title {
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    border-bottom: 1px solid #ffffff;
    padding-bottom: 30px;
    .NL {
      font-size: ${FONT_XXXL};
      color: white;
    }
    .NL_detail {
      font-size: ${FONT_XL};
      color: white;
    }
  }
  .about-us {
    display: flex;
    flex-direction: column;
    width: fit-content;
    align-self: flex-end;
    margin-top: 30px;
  }
  .info-box {
    width: fit-content;
  }
  .info-text {
    font-size: 14px;
    margin: 0 0 0 8px;
    color: white;
  }
`;
