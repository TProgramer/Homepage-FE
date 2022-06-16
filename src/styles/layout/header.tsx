import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Typography from "@mui/material/Typography";
import { TABLET_STANDARD, MOBILE_STANDARD } from "../Global";
export const StyledHeader = styled("header")`
  width: 100%;
  height: 100px;
`;

export const StyledNavbar = styled("nav")<{ isHover: boolean }>`
  width: 1024px;
  border-bottom: 1px solid #e2e2e2;

  @media (max-width: ${TABLET_STANDARD}px) {
    width: 100%;
  }
  margin: 0 auto;
  height: 100%;
  position: relative;
  text-align: center;
  line-height: 100px;
  .logo {
    cursor: pointer;
    font-size: 36px;
    @media (max-width: ${TABLET_STANDARD}px) {
      font-size: 36px;
    }
    font-weight: bold;
    position: absolute;
    left: 0;
    display: inline-block;
    height: 100%;
    width: 10%;
    min-width: 100px;
  }
  .navBox {
    position: absolute;
    right: 20%;
    display: inline-block;
    height: 100%;
    width: 50%;
    display: inline-flex;

    @media (max-width: ${MOBILE_STANDARD}px) {
      display: none;
    }
    .navBoxItem {
      height: 100%;
      flex-grow: 1;
    }
  }
  .reserve {
    cursor: pointer;
    position: absolute;
    right: 10%;
    display: inline-block;
    width: 10%;
    height: 100%;
    @media (max-width: ${MOBILE_STANDARD}px) {
      display: none;
    }
  }
  .register {
    cursor: pointer;
    position: absolute;
    right: 0;
    display: inline-block;
    height: 100%;
    width: 10%;
    @media (max-width: ${MOBILE_STANDARD}px) {
      display: none;
    }
  }
  .drop_down {
    position: absolute;
    width: 100%;
    display: block;
    height: ${(props) => (props.isHover ? 350 : 0)}px;
    background: lightgrey;
    margin-top: 100px;
  }
  .inner_drop_down {
    height: 100%;
    width: 50%;
    position: absolute;
    right: 20%;
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  position: absolute;
  right: 0;
  height: 0;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: ${MOBILE_STANDARD}px) {
    width: 50px;
    height: 100%;
    border: 1px solid black;
  }
`;

export const DropDownList = styled("div")<{ isHover: boolean }>`
  height: 100%;
  box-sizing: border-box;
  display: ${(props) => (props.isHover ? "flex" : "none")};
  @media (max-width: 1200px) {
    font-size: 12px;
  }
  .intro {
    width: 24%;
    height: 100%;
    .intro_list {
      cursor: pointer;
      width: 100%;
      height: 30px;
      margin-bottom: 30px;
    }
  }
  .act {
    width: 24%;
    height: 100%;
    .act_list {
      cursor: pointer;
      width: 100%;
      height: 30px;
      margin-bottom: 30px;
    }
    &:nth-child(1) {
      margin-top: 0px;
    }
  }
  .data {
    height: 100%;
    width: 25%;
    .data_list {
      cursor: pointer;
      width: 100%;
      height: 30px;
      margin-bottom: 30px;
    }
  }
  .board {
    height: 100%;
    width: 25%;
    .board_list {
      cursor: pointer;
      width: 100%;
      height: 30px;
      margin-bottom: 30px;
    }
  }
`;

export const StyledCancelIcon = styled(HighlightOffIcon)`
  position: absolute;
  right: 0;
  height: 0;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: ${MOBILE_STANDARD}px) {
    width: 50px;
    height: 100%;
    border: 1px solid black;
  }
`;

export const StyledSideBlock = styled("div")<{ isSide: boolean }>`
  width: ${(props) => (props.isSide ? 100 : 0)}%;
  transition: width 0.3s;
  position: absolute;
  right: 0;
  height: 100%;
  background: white;

  @media (min-width: ${MOBILE_STANDARD}px) {
    display: none;
  }
  .side_reserve {
    background: rgba(0, 0, 0, 0.03);
    padding: 12px 0 12px 16px;
    border: 1px solid rgba(0, 0, 0, 0.125);
    cursor: pointer;
  }
  .side_signin {
    padding: 0 16px;
    background: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    padding: 12px 0 12px 16px;
    cursor: pointer;
  }
`;

export const StyledTypography = styled(Typography)<{ isSide: boolean }>`
  font-size: ${(props) => (props.isSide ? 16 : 0)}px;
  .text {
    cursor: pointer;
  }
`;
