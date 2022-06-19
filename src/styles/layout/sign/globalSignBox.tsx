import styled from "@emotion/styled";
import {
  DEFAULT_BORDERRADIUS,
  FONT_L,
  FONT_M,
  FONT_XL,
  MOBILE_STANDARD,
  TABLET_STANDARD,
} from "../../global/Global";

export const SignContainer = styled("div")`
  width: 100vw;
  height: auto;
`;

export const SignBox = styled("div")`
  width: 500px;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${MOBILE_STANDARD}) {
    width: 100%;
    height: 100vh;
  }
  .logo {
    font-size: 70px;
    color: white;
    display: inline-block;
    width: 100%;
    padding: 60px;
  }
`;

export const Form = styled("form")`
  width: 400px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  .input {
    width: 380px;
    height: 50px;
    margin-bottom: 20px;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.textColor.sub};
    background-color: ${(props) => props.theme.textColor.primary};
    color: ${(props) => props.theme.textColor.sub};
    font-size: ${FONT_L};
    text-indent: 10px;
    &:focus {
      outline: none;
    }
  }
  .submit {
    width: 380px;
    height: 60px;
    margin-bottom: 20px;
    border-radius: ${DEFAULT_BORDERRADIUS};
    background-color: ${(props) => props.theme.textColor.sub};
    border: none;
  }
`;
