import { StudyStatusInnerDiv } from "../../../styles/home/studyStatus";

const StudyStatus = () => {
  return (
    <StudyStatusInnerDiv>
      <p>올해 진행한 교육</p>
      <div className="box">
        <div className="item">
          <div className="item_inner">
            <div className="front">알고리즘 스터디</div>
            <div className="back">초급/고급</div>
          </div>
        </div>
        <div className="item">
          <div className="item_inner">
            <div className="front">컴퓨터공학 스터디</div>
            <div className="back">네트워크/운영체제</div>
          </div>
        </div>
        <div className="item">
          <div className="item_inner">
            <div className="front">웹 개발 스터디</div>
            <div className="back">프론트/백</div>
          </div>
        </div>
      </div>
    </StudyStatusInnerDiv>
  );
};

export default StudyStatus;
