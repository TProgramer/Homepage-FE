import { SyntheticEvent, useState } from "react";
import { StyledSideBlock } from "../../../styles/layout/main/header";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { StyledTypography } from "../../../styles/layout/main/header";
import Link from "next/link";
import { theme } from "../../../themes/theme";
import { useTokenContext } from "../../../context/tokenState";
import { useRouter } from "next/router";
import useFetch from "../../../hooks/useFetch";

const MuiAccordionStyle = {
  border: `1px solid ${theme.backgroundColor}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
};
const MuiAccordionSummaryStyle = {
  backgroundColor: `${theme.backgroundColor}`,
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: "10px",
  },
};

const AccordionDetailsStyle = {
  padding: "20px",
  borderTop: "1px solid rgba(0, 0, 0, .125)",
};

type navbarProps = {
  isSide: boolean;
  setIsSide: (isSide: boolean) => void;
};

interface LogoutDto {}

const SideBlock = ({ isSide, setIsSide }: navbarProps) => {
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const { accessToken, refreshToken, setToken } = useTokenContext();
  const router = useRouter();
  const { post } = useFetch(
    "http://ec2-3-35-104-193.ap-northeast-2.compute.amazonaws.com:8000"
  );

  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };
  const onClickLogout = async () => {
    const { error } = await post<LogoutDto>("/auth/logout", {
      refresh_token: refreshToken,
    });

    if (error) {
      alert("로그아웃 실패");
    } else {
      setToken(null, null);
      alert("로그아웃 성공");
      router.push("/");
    }
  };
  return (
    <StyledSideBlock isSide={isSide}>
      <MuiAccordion
        sx={MuiAccordionStyle}
        disableGutters
        elevation={0}
        square
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <MuiAccordionSummary
          sx={MuiAccordionSummaryStyle}
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
          aria-controls="panel1d-content"
          id="panel1d-header"
        >
          <StyledTypography isSide={isSide}>소개 </StyledTypography>
        </MuiAccordionSummary>
        <MuiAccordionDetails sx={AccordionDetailsStyle}>
          <StyledTypography isSide={isSide}>
            <div className="text">
              <Link href="#">
                <a onClick={() => setIsSide(false)}>동아리원</a>
              </Link>
            </div>
            <hr />
            <div className="text">
              <Link href="/activity">
                <a onClick={() => setIsSide(false)}>활동사진</a>
              </Link>
            </div>
            <hr />
            <div className="text">
              <Link href="#">
                <a onClick={() => setIsSide(false)}>결과물</a>
              </Link>
            </div>
          </StyledTypography>
        </MuiAccordionDetails>
      </MuiAccordion>
      <MuiAccordion
        sx={MuiAccordionStyle}
        disableGutters
        elevation={0}
        square
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <MuiAccordionSummary
          sx={MuiAccordionSummaryStyle}
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
          aria-controls="panel2d-content"
          id="panel2d-header"
        >
          <StyledTypography isSide={isSide}>활동</StyledTypography>
        </MuiAccordionSummary>
        <MuiAccordionDetails sx={AccordionDetailsStyle}>
          <StyledTypography isSide={isSide}>
            <div className="text">
              <Link href="/calendar">
                <a onClick={() => setIsSide(false)} target="_blank">
                  캘린더
                </a>
              </Link>
            </div>
            <hr />
            <div className="text">
              <Link href="/course">
                <a onClick={() => setIsSide(false)}>활동현황</a>
              </Link>
            </div>
          </StyledTypography>
        </MuiAccordionDetails>
      </MuiAccordion>
      <MuiAccordion
        sx={MuiAccordionStyle}
        disableGutters
        elevation={0}
        square
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <MuiAccordionSummary
          sx={MuiAccordionSummaryStyle}
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
          aria-controls="panel3d-content"
          id="panel3d-header"
        >
          <StyledTypography isSide={isSide}>자료</StyledTypography>
        </MuiAccordionSummary>
        <MuiAccordionDetails sx={AccordionDetailsStyle}>
          <StyledTypography isSide={isSide}>
            <div className="text">
              <Link href="#">
                <a onClick={() => setIsSide(false)}>족보</a>
              </Link>
            </div>
            <hr />
            <div className="text">
              <Link href="#">
                <a onClick={() => setIsSide(false)}>스터디자료</a>
              </Link>
            </div>
          </StyledTypography>
        </MuiAccordionDetails>
      </MuiAccordion>
      <MuiAccordion
        sx={MuiAccordionStyle}
        disableGutters
        elevation={0}
        square
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <MuiAccordionSummary
          sx={MuiAccordionSummaryStyle}
          expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
          aria-controls="panel4d-content"
          id="panel4d-header"
        >
          <StyledTypography isSide={isSide}>게시판</StyledTypography>
        </MuiAccordionSummary>
        <MuiAccordionDetails sx={AccordionDetailsStyle}>
          <StyledTypography isSide={isSide}>
            <div className="text">
              <Link href="#">
                <a onClick={() => setIsSide(false)}>QnA</a>
              </Link>
            </div>
            <hr />
            <div className="text">
              <Link href="#">
                <a onClick={() => setIsSide(false)}>자유</a>
              </Link>
            </div>
          </StyledTypography>
        </MuiAccordionDetails>
      </MuiAccordion>

      <div className="side_reserve">
        <Link href="#">
          <a onClick={() => setIsSide(false)}>좌석예약</a>
        </Link>
      </div>
      {accessToken ? (
        <>
          <div className="side_signin">
            <Link href="/mypage">
              <a onClick={() => setIsSide(false)}>마이페이지</a>
            </Link>
          </div>
          <div className="side_signin" onClick={onClickLogout}>
            <a onClick={() => setIsSide(false)}>로그아웃</a>
          </div>
        </>
      ) : (
        <div className="side_signin">
          <Link href="/signin">
            <a onClick={() => setIsSide(false)}>로그인</a>
          </Link>
        </div>
      )}
    </StyledSideBlock>
  );
};

export default SideBlock;
