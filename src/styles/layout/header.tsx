import styled from "@emotion/styled";
import MenuIcon from "@mui/icons-material/Menu";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import Typography from "@mui/material/Typography";

export const StyledHeader = styled("header")`
  width: 100%;
  height: 100px;
  border-bottom: 1px solid black;
`;

export const StyledNavbar = styled("nav")<{ isHover: boolean }>`
  background: lightblue;
  width: calc(100% - 320px);
  @media (max-width: 800px) {
    width: 100%;
  }
  @media (max-width: 900px) {
    font-size: 12px;
  }
  margin: 0 auto;
  height: 100%;
  position: relative;
  text-align: center;
  line-height: 100px;
  .logo {
    @media (max-width: 900px) {
      font-size: 16px;
    }
    font-weight: bold;
    position: absolute;
    left: 0;
    display: inline-block;
    border: 1px solid black;
    height: 100%;
    width: 10%;
    min-width: 100px;
  }
  .navBox {
    position: absolute;
    right: 10%;
    display: inline-block;
    background: lightgreen;
    height: 100%;
    width: 60%;
    display: inline-flex;
    @media (max-width: 600px) {
      display: none;
    }
    .navBoxItem {
      border: 1px solid black;
      height: 100%;
      flex-grow: 1;
    }
  }
  .register {
    position: absolute;
    background: lightcoral;
    right: 0;
    display: inline-block;
    border: 1px solid black;
    height: 100%;
    width: 10%;
    @media (max-width: 600px) {
      display: none;
    }
  }
  .drop_down {
    position: absolute;
    width: 100%;
    display: block;
    //overflow: hidden;
    height: ${(props) => (props.isHover ? 350 : 0)}px;
    background: lightgrey;
    margin-top: 100px;
  }
  .inner_drop_down {
    height: 100%;
    width: 46%;
    position: absolute;
    right: 24%;
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  position: absolute;
  right: 0;
  height: 0;
  overflow: hidden;
  cursor: pointer;
  @media (max-width: 600px) {
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
    width: 24.4%;
    height: 100%;
    .intro_list {
      width: 100%;
      height: 30px;
      margin-bottom: 30px;
    }
  }
  .act {
    width: 24.4%;
    height: 100%;
    .act_list {
      width: 100%;
      height: 30px;
      margin-bottom: 30px;
    }
    &:nth-child(1) {
      margin-top: 0px;
    }
  }
  .data {
    width: 24.4%;
    height: 100%;
    .data_list {
      width: 100%;
      height: 30px;
      margin-bottom: 30px;
    }
  }
  .board {
    height: 100%;
    width: 26.8%;
    .board_list {
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
  @media (max-width: 600px) {
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
  background: lightgreen;
  @media (min-width: 600px) {
    display: none;
  }
  .reserve {
    margin-top: 8px;
    background: white;
    padding: 16px 0 16px 16px;
    border-bottom: 1px solid black;
    &:hover {
      cursor: pointer;
    }
  }
  .signin {
    padding: 0 16px;
    background: white;
    padding: 16px 0 16px 16px;
    &:hover {
      cursor: pointer;
    }
  }
`;

export const StyledTypography = styled(Typography)<{ isSide: boolean }>`
  font-size: ${(props) => (props.isSide ? 16 : 0)}px;
`;
