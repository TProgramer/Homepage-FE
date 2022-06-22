import { useState } from "react";
import {
  EduStatusRadioGroup,
  EduStatusContainer,
  EduStatusBox,
  StyledLabel,
  StyledRadio,
} from "../../styles/eduStatus/eduStatus";
//import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import EduStatusCard from "./eduStatusCard";

const EduStatusMain = () => {
  const [eduList, setEduList] = useState([
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png/250px-IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png",
      name: "리액트기초",
      type: "스터디",
      degree: 1,
      tech: ["JS", "Next.js"],
    },
    {
      imgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png/250px-IU_for_Chamisul_advertising_campaign_2020_07_%28cropped%29.png",
      name: "알고리즘",
      type: "클래스",
      degree: 2,
      tech: ["C++", "DP"],
    },
  ]);

  return (
    <EduStatusContainer>
      <EduStatusRadioGroup>
        <div className="radio">
          <StyledRadio type="radio" id="all" name="btn" value="all" />
          <StyledLabel htmlFor="all">All</StyledLabel>
        </div>
        <div className="radio">
          <StyledRadio type="radio" id="ios" name="btn" value="ios" />
          <StyledLabel htmlFor="ios">iOS</StyledLabel>
        </div>
        <div className="radio">
          <StyledRadio type="radio" id="android" name="btn" value="android" />
          <StyledLabel htmlFor="android">Android</StyledLabel>
        </div>
        <div className="radio">
          <StyledRadio type="radio" id="web" name="btn" value="web" />
          <StyledLabel htmlFor="web">Web</StyledLabel>
        </div>
      </EduStatusRadioGroup>
      <EduStatusBox>
        {eduList.map((list, index: number) => (
          <EduStatusCard key={index} list={list} />
        ))}
        {/* <AddCircleOutlineOutlinedIcon /> */}
      </EduStatusBox>
    </EduStatusContainer>
  );
};

export default EduStatusMain;
