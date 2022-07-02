import React, { useState } from "react";
import Modal from "react-modal";

import {
  EduStatusRadioGroup,
  EduStatusContainer,
  EduStatusBox,
  StyledLabel,
  StyledRadio,
} from "../../styles/eduStatus/eduStatus";
import { StyledAddCircleOutlineOutlinedIcon } from "../../styles/eduStatus/eduStatus";
import EduStatusCard from "./EduStatusCard";
import EduStatusModal from "./EduStatusModal";

const EduStatusMain = () => {
  const [eduList, setEduList] = useState([
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png/250px-IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png",
      course_name: "리액트기초",
      type: "Web",
      generation: 1,
      tech1: "JS",
      tech2: "Next.js",
      tech3: "React",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png/250px-IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png",
      course_name: "알고리즘 심화반",
      type: "etc",
      generation: 2,
      tech1: "C++",
      tech2: "DP",
      tech3: "BFS",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png/250px-IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png",
      course_name: "Nest.js ",
      type: "Web",
      generation: 1,
      tech1: "JS",
      tech2: "node.js",
      tech3: "express",
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png/250px-IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png",
      course_name: "안드로이드 스튜디오",
      type: "Android",
      generation: 1,
      tech1: "JAVA",
      tech2: "코틀린",
      tech3: "C++",
    },
  ]);
  const plusCard = (data: any) => {
    setEduList(eduList.concat(data));
  };
  const [radioValue, setRadioValue] = useState("all");
  const onChangeRadio = (e: any) => {
    setRadioValue(e.target.value);
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
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
            <EduStatusCard key={index} list={list} />
          ) : radioValue === list.type ? (
            <EduStatusCard key={index} list={list} />
          ) : null
        )}
      </EduStatusBox>
      <div onClick={() => setModalIsOpen(true)}>
        <StyledAddCircleOutlineOutlinedIcon />
      </div>
      <Modal
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: "rgba(255,255,255,0.45)",
            zIndex: 2000,
          },
          content: {
            margin: "0 auto",
            marginTop: "50px",
            width: "300px",
            height: "500px",
            zIndex: 20000,
            padding: 0,
          },
        }}
        ariaHideApp={false}
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
      >
        <EduStatusModal plusCard={plusCard} closeModal={closeModal} />
      </Modal>
    </EduStatusContainer>
  );
};

export default EduStatusMain;
