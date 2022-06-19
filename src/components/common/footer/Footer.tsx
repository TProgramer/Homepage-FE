import { StyledFooter } from "../../../styles/layout/main/footer";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import { grey } from "@mui/material/colors";

const Footer = () => {
  return (
    <StyledFooter>
      <div className="inner_footer">
        <div className="title">
          <div className="NL">NL</div>
          <div className="NL_detail">Network Leader</div>
        </div>
        <div className="subtitle">
          <div className="info1">
            <MyLocationIcon sx={{ color: grey[50] }} fontSize="small" />
            <span>서울특별시 노원구 공릉로 232 미래관 123호</span>
          </div>
          <div className="info2">
            <AlternateEmailIcon sx={{ color: grey[50] }} fontSize="small" />
            <span>newdeal123@nate.com</span>
          </div>
          <div className="info3">
            <GitHubIcon sx={{ color: grey[50] }} fontSize="small" />
            <span>@Network-Leader</span>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
