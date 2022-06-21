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
  display: flex;
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
    height: 100vh;
    position: relative;
    .logo {
      font-size: 70px;
      color: white;
      margin: 50px 0 5px 0;
      cursor: pointer;
    }
    .logo-detail {
      color: white;
      font-size: 18px;
      margin-bottom: 10px;
      cursor: pointer;
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
    .footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      @media (max-height: 800px) {
        display: none;
      }
      padding-bottom: 30px;
      .info-text {
        color: white;
        margin-left: 5px;
        font-size: 14px;
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
      cursor: pointer;
      color: ${(props) => props.theme.textColor.sub};
      background-color: ${(props) => props.theme.buttonColor.primary};
    }
  }
  .toregister {
    cursor: pointer;
    margin-top: 20px;
    color: white;
    text-decoration: underline;
    &:hover {
      color: ${(props) => props.theme.buttonColor.primary};
    }
  }
`;

export const SignBgImage = styled("div")<{ imageUrl: string }>`
  width: calc(100vw - 500px);
  height: 100vh;
  background-image: url(${(props) => props.imageUrl});
`;
