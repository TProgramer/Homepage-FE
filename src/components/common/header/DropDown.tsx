import { DropDownList } from "../../../styles/layout/header";

type navbarProps = {
  isHover: boolean;
};

const DropDown = ({ isHover }: navbarProps) => {
  const introList = ["동아리원", "활동사진", "수상내역"];
  const actList = ["캘린더", "스터디", "클래스", "프로젝트", "특강"];
  const dataList = ["족보", "스터디자료"];
  const boardList = ["QnA", "자유"];

  return (
    <DropDownList isHover={isHover}>
      <div className="intro">
        {introList.map((list, index) => (
          <div key={index} className="intro_list">
            {list}
          </div>
        ))}
      </div>
      <div className="act">
        {actList.map((list, index) => (
          <div key={index} className="act_list">
            {list}
          </div>
        ))}
      </div>
      <div className="data">
        {dataList.map((list, index) => (
          <div key={index} className="data_list">
            {list}
          </div>
        ))}
      </div>
      <div className="board">
        {boardList.map((list, index) => (
          <div key={index} className="board_list">
            {list}
          </div>
        ))}
      </div>
    </DropDownList>
  );
};

export default DropDown;
