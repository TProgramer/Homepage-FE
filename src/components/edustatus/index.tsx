import React, { useState } from "react";
import {
  EduStatusRadioGroup,
  EduStatusContainer,
  EduStatusBox,
  StyledLabel,
  StyledRadio,
} from "../../styles/eduStatus/eduStatus";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import EduStatusCard from "./EduStatusCard";

const EduStatusMain = () => {
  const [eduList, setEduList] = useState([
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png/250px-IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png",
      name: "리액트기초",
      type: "Web",
      degree: 1,
      tech: ["JS", "Next.js", "React"],
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png/250px-IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png",
      name: "알고리즘 심화반",
      type: "etc",
      degree: 2,
      tech: ["C++", "DP", "BFS"],
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png/250px-IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png",
      name: "Nest.js ",
      type: "Web",
      degree: 1,
      tech: ["JS", "node.js", "express"],
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png/250px-IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png",
      name: "안드로이드 스튜디오",
      type: "Android",
      degree: 1,
      tech: ["JAVA", "코틀린", "C++"],
    },
  ]);
  const [radioValue, setRadioValue] = useState("all");
  const onChangeRadio = (e: any) => {
    setRadioValue(e.target.value);
  };
  return (
    <EduStatusContainer>
      <EduStatusRadioGroup>
        <div className="radio">
          <StyledRadio
            type="radio"
            id="all"
            name="btn"
            value="all"
            onChange={onChangeRadio}
            checked={radioValue === "all" ? true : false}
          />
          <StyledLabel htmlFor="all">All</StyledLabel>
        </div>
        <div className="radio">
          <StyledRadio
            type="radio"
            id="web"
            name="btn"
            value="Web"
            onChange={onChangeRadio}
          />
          <StyledLabel htmlFor="web">Web</StyledLabel>
        </div>
        <div className="radio">
          <StyledRadio
            type="radio"
            id="android"
            name="btn"
            value="Android"
            onChange={onChangeRadio}
          />
          <StyledLabel htmlFor="android">Android</StyledLabel>
        </div>
        <div className="radio">
          <StyledRadio
            type="radio"
            id="etc"
            name="btn"
            value="etc"
            onChange={onChangeRadio}
          />
          <StyledLabel htmlFor="etc">etc</StyledLabel>
        </div>
      </EduStatusRadioGroup>
      <EduStatusBox>
        {eduList.map((list, index: number) =>
          radioValue === "all" ? (
            <EduStatusCard key={index} list={list} select={radioValue} />
          ) : radioValue === list.type ? (
            <EduStatusCard key={index} list={list} select={radioValue} />
          ) : null
        )}
      </EduStatusBox>
      <AddCircleOutlineOutlinedIcon />
    </EduStatusContainer>
  );
};

export default EduStatusMain;
