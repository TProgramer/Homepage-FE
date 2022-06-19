import { StyledFooter } from "../../../styles/layout/main/footer";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import { grey } from "@mui/material/colors";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="contents">
        <div className="title">
          <div className="NL">NL</div>
          <div className="NL_detail">Network Leader</div>
        </div>
        <div className="about-us">
          <div className="info-box">
            <MyLocationIcon sx={{ color: grey[50] }} fontSize="small" />
            <span className="info-text">
              서울특별시 노원구 공릉로 232 미래관 123호
            </span>
          </div>
          <div className="info-box">
            <AlternateEmailIcon sx={{ color: grey[50] }} fontSize="small" />
            <span className="info-text">newdeal123@nate.com</span>
          </div>
          <div className="info-box">
            <GitHubIcon sx={{ color: grey[50] }} fontSize="small" />
            <span className="info-text">@Network-Leader</span>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
