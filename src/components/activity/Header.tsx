import { ActivityHeader } from "../../styles/activity/activity";

const Header = ({ windowWidth }: { windowWidth: number }) => {
  return (
    <ActivityHeader windowWidth={windowWidth}>
      <div className="flexBox">
        <div className="flexBox__title">
          <h1 className="h1">NL</h1>
        </div>
        <div className="flexBox__title2">콘텐트 미정</div>
      </div>
      <div className="subTitle">
        <span className="subTitle">Activity of The Network Leader</span>
      </div>
    </ActivityHeader>
  );
};
export default Header;
