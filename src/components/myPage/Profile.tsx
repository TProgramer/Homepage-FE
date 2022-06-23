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
  Bio,
  Contents,
  ProfileContainer,
} from "../../styles/myPage/myPage";

interface IPersonalType {
  readonly name: string;
  readonly major: string;
  grade: number;
  type: "FrontEnd" | "BackEnd" | "DevOps";
  profileImg: string;
  email: string;
  number: string;
  github: string;
  link: string;
}

const MyProfile = () => {
  const [myForm, setMyForm] = useState(false);
  const [move, setMove] = useState(225);
  const [personalData, setPersonalData] = useState<IPersonalType>({
    name: "박인재",
    major: "건축공학과",
    grade: 2,
    type: "FrontEnd",
    profileImg: "",
    // "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzdkVemYyTTjjwW8ax1aJ-kHvwR6aK1VTPKRSbvlnIlMs340p0iFzcs_u878365DmbZvI&usqp=CAU",
    email: "qkrdlswo98@naver.com",
    number: "010-3393-9410",
    github: "https://CWCTBOY.github.com",
    link: "https://wakatime.com",
  });
  const onClickLeft = () => {
    setMove((prev) => prev + 450);
  };
  const onClickRight = () => {
    setMove((prev) => prev - 450);
  };
  console.log(myForm);
  return (
    <ProfileContainer myForm={myForm}>
      <Avatar>
        <div
          className="edit"
          onClick={() => {
            setMyForm(true);
          }}
        >
          <CreateIcon />
        </div>
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
          <p className="paragraph">
            안녕하세요 저는 건축공학과 2학년 재학중인 박인재입니다 안녕하세요
            저는 건축공학과 2학년 재학중인 박인재입니다 안녕하세요 저는
            건축공학과 2학년 재학중인 박인재입니다 안녕하세요 저는 건축공학과
            저는 건축공학과 2학년 재학중인 박인재입니다 안녕하세요 저는
            건축공학과 2학년 재학중인 박인재입니
          </p>
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
          <DoubleArrowIcon className="arrow arrow__r" onClick={onClickRight} />
        ) : (
          <DoubleArrowIcon className="arrow arrow__l" onClick={onClickLeft} />
        )}
      </Arrow>
      <ProfileContainer className="form"></ProfileContainer>
    </ProfileContainer>
  );
};
export default MyProfile;
