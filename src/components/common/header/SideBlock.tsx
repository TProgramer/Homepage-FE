import { SyntheticEvent, useState } from "react";
import { StyledSideBlock } from "../../../styles/layout/main/header";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { StyledTypography } from "../../../styles/layout/main/header";
import Link from "next/link";
import { theme } from "../../../themes/theme";

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
};

const SideBlock = ({ isSide }: navbarProps) => {
  const [expanded, setExpanded] = useState<string | false>("panel1");
  const handleChange =
    (panel: string) => (event: SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
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
                <a>동아리원</a>
              </Link>
            </div>
            <hr />
            <div className="text">
              <Link href="#">
                <a>활동사진</a>
              </Link>
            </div>
            <hr />
            <div className="text">
              <Link href="#">
                <a>수상내역</a>
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
              <Link href="#">
                <a>캘린더</a>
              </Link>
            </div>
            <hr />
            <div className="text">
              <Link href="#">
                <a>스터디</a>
              </Link>
            </div>
            <hr />
            <div className="text">
              <Link href="#">
                <a>클래스</a>
              </Link>
            </div>
            <hr />
            <div className="text">
              <Link href="#">
                <a>프로젝트</a>
              </Link>
            </div>
            <hr />
            <div className="text">
              <Link href="#">
                <a>특강</a>
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
                <a>족보</a>
              </Link>
            </div>
            <hr />
            <div className="text">
              <Link href="#">
                <a>스터디자료</a>
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
                <a>QnA</a>
              </Link>
            </div>
            <hr />
            <div className="text">
              <Link href="#">
                <a>자유</a>
              </Link>
            </div>
          </StyledTypography>
        </MuiAccordionDetails>
      </MuiAccordion>

      <div className="side_reserve">
        <Link href="#">
          <a>좌석예약</a>
        </Link>
      </div>
      <div className="side_signin">
        <Link href="#">
          <a>로그인</a>
        </Link>
      </div>
    </StyledSideBlock>
  );
};

export default SideBlock;
