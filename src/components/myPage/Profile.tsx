import React, { useState } from "react";
import CreateIcon from "@mui/icons-material/Create";
import CheckIcon from "@mui/icons-material/Check";
import AddBoxIcon from "@mui/icons-material/AddBox";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import {
  Another,
  Arrow,
  Avatar,
  AvatarInput,
  Bio,
  Contents,
  FormContainer,
  InputBox,
  ProfileContainer,
} from "../../styles/myPage/myPage";
import { useForm } from "react-hook-form";

interface IPersonalType {
  profileImg: string;
  readonly name: string;
  readonly major: string;
  grade: string;
  type: "FrontEnd" | "BackEnd" | "DevOps";
  bio: string;
  email: string;
  number: string;
  github: string;
  link: string;
}

const MyProfile = () => {
  const [myForm, setMyForm] = useState(false);
  const [move, setMove] = useState(225);
  const [personalData, setPersonalData] = useState<IPersonalType>({
    profileImg: "",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdkVemYyTTjjwW8ax1aJ-kHvwR6aK1VTPKRSbvlnIlMs340p0iFzcs_u878365DmbZvI&usqp=CAU",
    name: "박인재",
    major: "건축공학과",
    grade: "2",
    type: "FrontEnd",
    bio: "안녕하세요 저는 건축공학과 2학년 재학중인 박인재입니다 안녕하세요저는 건축공학과 2학년 재학중인 박인재입니다 안녕하세요 저는 건축공학과 2학년 재학중인 박인재입니다 안녕하세요 저는 건축공학과저는 건축공학과 2학년 재학중인 박인재입니다 안녕하세요 저는 건축공학과 2학년 재학중인 박인재입니",
    email: "qkrdlswo98@naver.com",
    number: "010-3393-9410",
    github: "https://CWCTBOY.github.com",
    link: "https://wakatime.com",
  });
  const { register, handleSubmit } = useForm<IPersonalType>();
  const onSubmit = (data: IPersonalType) => {
    setPersonalData(data);
    setMyForm(false);
  };
  const onClickLeft = () => {
    setMove((prev) => prev + 450);
  };
  const onClickRight = () => {
    setMove((prev) => prev - 450);
  };
  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)} myForm={myForm}>
      <button className="submit" type="submit">
        <CheckIcon />
      </button>
      <AvatarInput>
        <div className="avatar__input--box">
          <label
            htmlFor="avatar__input--input"
            className="avatar__input--label"
          >
            <AddBoxIcon />
          </label>
          <input
            {...register("profileImg")}
            type="file"
            id="avatar__input--input"
          />
        </div>
      </AvatarInput>
      <InputBox>
        <label htmlFor="name" className="form__label">
          이름
        </label>
        <input
          {...register("name", { required: true })}
          type="text"
          className="form__input"
          id="name"
          placeholder={personalData.name}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="major" className="form__label">
          전공
        </label>
        <input
          {...register("major", { required: true })}
          type="text"
          className="form__input"
          id="major"
          placeholder={personalData.major}
        />
      </InputBox>
      <div className="selection">
        <InputBox className="select">
          <label htmlFor="grade" className="form__label">
            학년
          </label>
          <select {...register("grade")} name="grade" id="grade">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </InputBox>
        <InputBox className="select">
          <label htmlFor="type" className="form__label">
            업무
          </label>
          <select {...register("type")} name="type" id="type">
            <option value="FrontEnd">FrontEnd</option>
            <option value="BackEnd">BackEnd</option>
            <option value="DevOps">DevOps</option>
          </select>
        </InputBox>
      </div>
      <InputBox>
        <label htmlFor="bio" className="form__label">
          소개
        </label>
        <input
          {...register("bio", { required: true, maxLength: 200 })}
          type="text"
          className="form__input"
          id="bio"
          placeholder={personalData.bio}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="email" className="form__label">
          <EmailOutlinedIcon />
        </label>
        <input
          {...register("email", { required: true })}
          type="email"
          className="form__input"
          id="email"
          placeholder={personalData.email}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="number" className="form__label">
          <CallOutlinedIcon />
        </label>
        <input
          {...register("number", { required: true })}
          type="text"
          className="form__input"
          id="number"
          placeholder={personalData.number}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="github" className="form__label">
          <GitHubIcon />
        </label>
        <input
          {...register("github", { required: true })}
          type="url"
          className="form__input"
          id="github"
          placeholder={personalData.github}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="link" className="form__label">
          <InsertLinkOutlinedIcon />
        </label>
        <input
          {...register("link", { required: true })}
          type="url"
          className="form__input"
          id="link"
          placeholder={personalData.link}
        />
      </InputBox>
      <ProfileContainer myForm={myForm}>
        <div
          className="edit"
          onClick={() => {
            setMyForm(true);
          }}
        >
          <CreateIcon />
        </div>
        <Avatar>
          <div className="avatar">
            {personalData.profileImg === "" ? (
              "Add your Avatar"
            ) : (
              <img
                src={personalData.profileImg}
                alt="avatar"
                className="avatar__img"
              />
            )}
          </div>
          <div className="info__header">
            <h2 className="name">{personalData.name}</h2>
            <h3 className="major--grade">{`${personalData.major} ${personalData.grade}학년`}</h3>
          </div>
          <span className="type">{`<${personalData.type}/>`}</span>
        </Avatar>
        <Contents move={move}>
          <Bio>
            <p className="paragraph">{personalData.bio}</p>
          </Bio>
          <Another>
            <div className="infoBox">
              <EmailOutlinedIcon />
              <span className="info">{personalData.email}</span>
            </div>
            <div className="infoBox">
              <CallOutlinedIcon />
              <span className="info">{personalData.number}</span>
            </div>
            <div className="infoBox">
              <GitHubIcon />
              <span className="info">{personalData.github}</span>
            </div>
            <div className="infoBox">
              <InsertLinkOutlinedIcon />
              <span className="info">{personalData.link}</span>
            </div>
          </Another>
        </Contents>
        <Arrow>
          {move === 225 ? (
            <DoubleArrowIcon
              className="arrow arrow__r"
              onClick={onClickRight}
            />
          ) : (
            <DoubleArrowIcon className="arrow arrow__l" onClick={onClickLeft} />
          )}
        </Arrow>
      </ProfileContainer>
    </FormContainer>
  );
};
export default MyProfile;
