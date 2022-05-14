import { SyntheticEvent, useState } from "react";
import { StyledSideBlock } from "../../../styles/layout/header";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import MuiAccordion, { AccordionProps } from "@mui/material/Accordion";
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { StyledTypography } from "../../../styles/layout/header";

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

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
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
          <StyledTypography isSide={isSide}>소개 </StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypography isSide={isSide}>
            동아리원
            <hr />
            활동사진
            <hr />
            수상내역
          </StyledTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
          <StyledTypography isSide={isSide}>활동</StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypography isSide={isSide}>
            캘린더
            <hr />
            스터디
            <hr />
            클래스
            <hr />
            프로젝트
            <hr />
            특강
          </StyledTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
          <StyledTypography isSide={isSide}>자료</StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypography isSide={isSide}>
            족보
            <hr /> 스터디자료
          </StyledTypography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel4"}
        onChange={handleChange("panel4")}
      >
        <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
          <StyledTypography isSide={isSide}>게시판</StyledTypography>
        </AccordionSummary>
        <AccordionDetails>
          <StyledTypography isSide={isSide}>
            QnA
            <hr />
            자유
          </StyledTypography>
        </AccordionDetails>
      </Accordion>

      <div className="reserve">좌석예약</div>
      <div className="signin">로그인</div>
    </StyledSideBlock>
  );
};

export default SideBlock;
