import React from "react";
import {
  SignBox,
  SignContainer,
} from "../../../styles/layout/sign/globalSignBox";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import GitHubIcon from "@mui/icons-material/GitHub";
import { grey } from "@mui/material/colors";
import Link from "next/link";

const SignLayout = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <SignContainer>
      <SignBox>
        <div className="innerContainer">
          <Link href="/">
            <h1 className="logo">NL</h1>
          </Link>
          <Link href="/">
            <p className="logo-detail">Network Leader</p>
          </Link>
          {children}
          <div className="footer">
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
      </SignBox>
    </SignContainer>
  );
};

export default SignLayout;
