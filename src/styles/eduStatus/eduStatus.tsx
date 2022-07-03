import styled from "@emotion/styled";
import { TABLET_STANDARD, MOBILE_STANDARD, TRANSITION } from "../global/Global";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";

export const EduStatusContainer = styled("main")`
  background-color: ${(props) => props.theme.backgroundColor};
  width: 100vw;
  height: auto;
  position: relative;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const EduStatusRadioGroup = styled("div")`
  max-width: 800px;
  height: 100px;
  @media (max-width: ${TABLET_STANDARD}px) {
    max-width: 600px;
    font-size: 24px;
  }
  @media (max-width: ${MOBILE_STANDARD}px) {
    max-width: 280px;
    height: 80px;
    font-size: 18px;
  }
  background-color: white;
  border-radius: 50px;
  margin: 200px 0 100px 0;
  display: flex;
  font-size: 36px;
  align-items: center;
  .radio {
    text-align: center;
    line-height: 100px;
    @media (max-width: ${MOBILE_STANDARD}px) {
      line-height: 80px;
    }
  }
`;
export const StyledLabel = styled("label")`
  display: block;
  height: 100%;
  color: black;
  cursor: pointer;
  border-radius: 50px;
  width: 200px;
  @media (max-width: ${TABLET_STANDARD}px) {
    width: 150px;
  }
  @media (max-width: ${MOBILE_STANDARD}px) {
    width: 70px;
  }
`;
export const StyledRadio = styled("input")`
  display: none;

  &:checked + ${StyledLabel} {
    color: white;
    height: 100%;
    background: ${(props) => props.theme.buttonColor.primary};
  }
`;

export const EduStatusBox = styled("div")`
  max-width: 1200px;
  height: auto;
  margin-bottom: 200px;
  position: relative;
  display: flex;
  gap: 60px 60px;
  @media (max-width: 1199px) {
    justify-content: center;
  }
  flex-wrap: wrap;
`;

export const StyledCard = styled("div")<{ url: string; type: string }>`
  width: 360px;
  height: 270px;
  border-radius: 10px;
  background: white;
  .image {
    width: 100%;
    height: 170px;
    background-image: url(${(props) => props.url});
    border-radius: 10px 10px 0 0;
  }
  .content {
    position: relative;
    width: 100%;
    height: 100px;
    padding: 0 30px 0 30px;
    .left_content {
      display: inline-block;
      position: absolute;
      top: 40px;
      .content_name {
        font-size: 18px;
        margin-bottom: 3px;
      }
      .content_tech {
        color: #e2e2e2;
      }
    }
    .right_content {
      right: 30px;
      top: 20px;
      display: inline-block;
      position: absolute;
      .content_degree {
        text-align: right;
        margin: 0 10px 6px 0;
        font-size: 18px;
      }
      .content_type {
        text-align: center;
        line-height: 36px;
        width: 80px;
        height: 36px;
        background: ${(props) =>
          props.type === "Web"
            ? "#ec9b3b"
            : props.type === "Android"
            ? "#F24C4C"
            : "#293462"};
        border-radius: 25px;
        color: white;
      }
    }
  }
`;

export const StyledAddCircleOutlineOutlinedIcon = styled(
  AddCircleOutlineOutlinedIcon
)`
  position: absolute;
  bottom: 30px;
  right: 50px;
  font-size: 72px;
  cursor: pointer;
`;

export const ModalForm = styled("form")<{ count: number }>`
  position: relative;
  p {
    text-align: center;
    font-size: 18px;
    font-weight: bold;
    margin: 40px 0 50px 0;
  }
  .image,
  .course_name {
    display: block;
    margin: 0 auto;
    padding: 3px 43px 3px 10px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 2px solid #e2e2e2;
    ${TRANSITION}
    &:focus {
      outline: none;
      border-bottom: 2px solid ${(props) => props.theme.buttonColor.primary};
    }
  }
  .generation_type {
    max-width: 200px;
    margin: 0 auto;
    .generation_input {
      display: inline-block;
      width: 40px;
      border: none;
      border-bottom: 2px solid #e2e2e2;
      ${TRANSITION}
      &:focus {
        outline: none;
        border-bottom: 2px solid ${(props) => props.theme.buttonColor.primary};
      }
    }
    span {
      font-size: 12px;
      margin-right: 40px;
    }
    .type {
      width: 100px;
      display: inline-block;
      padding-left: 10px;
      margin-bottom: 30px;
      border: none;
      border-bottom: 2px solid #e2e2e2;
      ${TRANSITION}
      &:focus {
        outline: none;
        border-bottom: 2px solid ${(props) => props.theme.buttonColor.primary};
      }
    }
  }

  .plusbtn {
    display: inline-block;
  }
  .all_tech {
    .maintext {
      display: inline-block;
      margin-left: 50px;
      font-size: 14px;
      margin-bottom: 10px;
    }
    span {
      margin-left: 50px;
    }
    .tech1,
    .tech2,
    .tech3 {
      display: inline-block;
      margin: 0 auto;
      padding: 3px 29px 3px 10px;
      margin-bottom: 15px;
      border: none;
      border-bottom: 2px solid #e2e2e2;
      ${TRANSITION}
      &:focus {
        outline: none;
        border-bottom: 2px solid ${(props) => props.theme.buttonColor.primary};
      }
    }
    .techbox1 {
      display: ${(props) => (props.count > 0 ? "block" : "none")};
    }
    .techbox2 {
      display: ${(props) => (props.count > 1 ? "block" : "none")};
    }
    .techbox3 {
      display: ${(props) => (props.count > 2 ? "block" : "none")};
    }
  }
  .submit {
    width: 200px;
    margin-left: 50px;
    margin-top: 20px;
    height: 40px;
    padding: 5px 0 5px 0;
    cursor: pointer;
    background-color: ${(props) => props.theme.textColor.sub};
    border: 1px solid #e2e2e2;
    ${TRANSITION}
    &:hover {
      color: ${(props) => props.theme.textColor.sub};
      background-color: ${(props) => props.theme.buttonColor.primary};
    }
  }
`;

export const ModalLabel = styled("label")`
  height: 100%;
  color: black;
  display: inline-block;
  cursor: pointer;
  border-radius: 50px;
  border: 1px solid #e2e2e2;
  width: 80px;
  padding: 10px;
  text-align: center;
`;

export const ModalRadio = styled("input")`
  display: none;
  &:checked + ${ModalLabel} {
    color: white;
    height: 100%;
    background: ${(props) => props.theme.buttonColor.primary};
  }
`;

export const ModalAddCircleOutlineOutlinedIcon = styled(
  AddCircleOutlineOutlinedIcon
)<{ count: number }>`
  cursor: pointer;
  display: ${(props) => props.count === 3 && "none"};
  font-size: 18px;
  color: ${(props) => props.theme.buttonColor.primary};
`;
