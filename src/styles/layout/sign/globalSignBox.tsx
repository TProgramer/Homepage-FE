import { css } from "@emotion/react";
import styled from "@emotion/styled";
import {
  DEFAULT_BORDERRADIUS,
  FONT_L,
  FONT_M,
  FONT_XL,
  MOBILE_STANDARD,
  TABLET_STANDARD,
  TRANSITION,
} from "../../global/Global";

export const SignContainer = styled("div")`
  width: 100vw;
  height: auto;
`;

export const SignBox = styled("div")`
  width: 500px;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${MOBILE_STANDARD}) {
    width: 100%;
    height: 100vh;
  }
  .innerContainer {
    width: 370px;
    height: auto;
    .logo {
      font-size: 70px;
      color: white;
      margin: 50px 0;
    }
    .warning {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
      color: red;
      .paragraph {
        margin-left: 15px;
      }
    }
  }
`;

export const Form = styled("form")<{ show: boolean }>`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .pwVisible {
    width: 100%;
    height: 45px;
    position: relative;
    margin-bottom: 20px;
    .visibleIcon {
      position: absolute;
      top: 25%;
      left: 102%;
      color: ${(props) => (!props.show ? props.theme.textColor.sub : "red")};
    }
  }
  .input {
    width: 100%;
    height: 45px;
    margin-bottom: 20px;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.textColor.sub};
    background-color: ${(props) => props.theme.textColor.primary};
    color: ${(props) => props.theme.textColor.sub};
    font-size: ${FONT_L};
    text-indent: 10px;
    ${TRANSITION}
    &:focus {
      outline: none;
      border-bottom: 2px solid ${(props) => props.theme.buttonColor.primary};
    }
  }
  .submit {
    width: 380px;
    height: 60px;
    margin-bottom: 20px;
    border-radius: ${DEFAULT_BORDERRADIUS};
    background-color: ${(props) => props.theme.textColor.sub};
    border: none;
    ${TRANSITION}
    &:hover {
      color: ${(props) => props.theme.textColor.sub};
      background-color: ${(props) => props.theme.buttonColor.primary};
    }
  }
`;
