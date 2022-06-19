import { DropDownList } from "../../../styles/layout/main/header";
import Link from "next/link";

type navbarProps = {
  isHover: boolean;
};

const DropDown = ({ isHover }: navbarProps) => {
  const introList = [
    { text: "동아리원", link: "#" },
    { text: "활동사진", link: "#" },
    { text: "수상내역", link: "#" },
  ];
  const actList = [
    { text: "캘린더", link: "#" },
    { text: "스터디", link: "#" },
    { text: "클래스", link: "#" },
    { text: "프로젝트", link: "#" },
    { text: "특강", link: "#" },
  ];
  const dataList = [
    { text: "족보", link: "#" },
    { text: "스터디자료", link: "#" },
  ];
  const boardList = [
    { text: "QnA", link: "#" },
    { text: "자유", link: "#" },
  ];
  return (
    <DropDownList isHover={isHover}>
      <div className="intro">
        {introList.map((list, index) => (
          <div key={index} className="intro_list">
            <Link href={list.link}>
              <a>{list.text}</a>
            </Link>
          </div>
        ))}
      </div>
      <div className="act">
        {actList.map((list, index) => (
          <div key={index} className="act_list">
            <Link href={list.link}>
              <a>{list.text}</a>
            </Link>
          </div>
        ))}
      </div>
      <div className="data">
        {dataList.map((list, index) => (
          <div key={index} className="data_list">
            <Link href={list.link}>
              <a>{list.text}</a>
            </Link>
          </div>
        ))}
      </div>
      <div className="board">
        {boardList.map((list, index) => (
          <div key={index} className="board_list">
            <Link href={list.link}>
              <a>{list.text}</a>
            </Link>
          </div>
        ))}
      </div>
    </DropDownList>
  );
};

export default DropDown;
