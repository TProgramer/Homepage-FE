import styled from "@emotion/styled";
import {
  DEFAULT_BORDERRADIUS,
  DEFAULT_BOXSHADOW,
  FONTWEIGHT_BOLD,
  FONT_L,
  FONT_XL,
  FONT_XXL,
  TRANSITION,
} from "../global/Global";

export const Wrapper = styled("div")`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  display: flex;
`;

export const FormContainer = styled("form")<{
  myForm?: boolean;
}>`
  width: 450px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 100px 0 0 0;
  position: relative;
  background-color: white;
  ${DEFAULT_BOXSHADOW}
  overflow: hidden;
  .submit {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 270px;
    left: 320px;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    border: none;
    ${DEFAULT_BOXSHADOW}
    color: ${(props) => props.theme.textColor.sub};
    background-color: ${(props) => props.theme.buttonColor.primary};
    ${TRANSITION}
    &:hover {
      background-color: ${(props) => props.theme.buttonColor.onHover};
    }
  }
  .selection {
    width: 300px;
    display: flex;
    justify-content: space-between;
    .select {
      width: 150px;
      justify-content: flex-start;
      #type,
      #grade {
        margin-left: 20px;
      }
    }
  }
`;
export const AvatarInput = styled("div")`
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  z-index: 0;
  .avatar__input--box {
    width: 320px;
    height: 320px;
    background-color: ${(props) => props.theme.textColor.sub};
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 10px 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    .avatar__input--label {
      ${TRANSITION}
      color: rgba(0, 0, 0, 0.4);
      cursor: pointer;
      &:hover {
        color: rgba(0, 0, 0, 0.7);
      }
    }
    #avatar__input--input {
      display: none;
    }
  }
  .form__header {
    width: auto;
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
    .form__name {
      font-size: ${FONT_XL};
      color: ${(props) => props.theme.textColor.primary};
      font-weight: ${FONTWEIGHT_BOLD};
      margin-right: 5px;
    }
    .form__major--grade {
      font-size: ${FONT_L};
      color: rgba(0, 0, 0, 0.4);
    }
  }
  .form__type {
    margin-left: 10px;
  }
`;

export const InputBox = styled("div")`
  width: 300px;
  height: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  .form__label {
    width: 35px;
    min-height: 40px;
    font-size: ${FONT_L};
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .form__input {
    width: 240px;
    border: none;
    border-bottom: 2px solid ${(props) => props.theme.backgroundColor};
    ${TRANSITION}
    &:focus {
      outline: none;
      border-bottom: 2px solid ${(props) => props.theme.buttonColor.primary};
    }
  }
  #bio {
    height: 150px;
    border: 2px solid ${(props) => props.theme.backgroundColor};
    border-radius: ${DEFAULT_BORDERRADIUS};
    margin-left: 20px;
    &:focus {
      outline: none;
      border: 2px solid ${(props) => props.theme.buttonColor.primary};
    }
  }
`;

export const ProfileContainer = styled("div")<{
  myForm?: boolean;
}>`
  width: 450px;
  height: 100%;
  display: flex;
  position: absolute;
  flex-direction: column;
  align-items: center;
  ${DEFAULT_BOXSHADOW}
  background-color: white;
  transition: all 0.6s ease-out;
  transform: translateX(${(props) => (!props.myForm ? 0 : "-450px")});
  z-index: 2;
  /* transform: translateX(450px); */
  overflow: hidden;
  .edit {
    width: 50px;
    height: 50px;
    position: absolute;
    top: 270px;
    left: 320px;
    z-index: 3;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    ${DEFAULT_BOXSHADOW}
    color: ${(props) => props.theme.textColor.sub};
    background-color: ${(props) => props.theme.buttonColor.primary};
    ${TRANSITION}
    &:hover {
      background-color: ${(props) => props.theme.buttonColor.onHover};
    }
  }
`;

export const Avatar = styled("div")`
  width: 100%;
  height: 420px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  .avatar {
    width: 320px;
    height: 320px;
    background-color: white;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 0 10px 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    .avatar__img {
      width: 100%;
    }
  }
  .info__header {
    width: auto;
    display: flex;
    align-items: flex-end;
    margin-bottom: 10px;
    .name {
      font-size: ${FONT_XL};
      color: ${(props) => props.theme.textColor.primary};
      font-weight: ${FONTWEIGHT_BOLD};
      margin-right: 5px;
    }
    .major--grade {
      font-size: ${FONT_L};
      color: rgba(0, 0, 0, 0.4);
    }
  }
  .type {
    font-size: ${FONT_XL};
    color: ${(props) => props.theme.buttonColor.primary};
  }
`;
export const Contents = styled("div")<{ move: number }>`
  width: 900px;
  min-height: 160px;
  display: flex;
  ${TRANSITION}
  transform: translateX(${(props) => `${props.move}px`});
`;
export const Bio = styled("div")`
  width: 450px;
  height: auto;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  .paragraph {
    white-space: normal;
    word-break: break-all;
    width: 350px;
    height: auto;
    font-size: ${FONT_L};
    color: rgba(0, 0, 0, 0.4);
  }
`;
export const Another = styled("div")`
  width: 450px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: white;
  .infoBox {
    width: fit-content;
    height: 30px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 0 10px 90px;
    color: rgba(0, 0, 0, 0.4);
    .info {
      margin: 0 0 0 10px;
    }
  }
`;
export const Arrow = styled("div")`
  width: auto;
  margin: 10px;
  .arrow {
    font-size: ${FONT_XXL};
    color: ${(props) => props.theme.buttonColor.primary};
    ${TRANSITION}
    &:hover {
      color: ${(props) => props.theme.buttonColor.onHover};
    }
  }
  .arrow__l {
    transform: rotate(180deg);
  }
`;
