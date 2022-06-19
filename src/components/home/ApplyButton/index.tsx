import Link from "next/link";
import { ReactNode } from "react";
import {
  ApplyBox,
  ApplyMessage,
  Apply,
} from "../../../styles/home/applyButton";

interface ApplyButtonProps {
  children?: ReactNode;
}

const ApplyButton = ({ children }: ApplyButtonProps) => {
  return (
    <>
      <ApplyBox backgroundImageUrl="https://www.seoultech.ac.kr/storage/www/bbs/3466/1654839229855_.jpg">
        <ApplyMessage>{children}</ApplyMessage>
        <Link href="/signup">
          <Apply>지원하기</Apply>
        </Link>
      </ApplyBox>
    </>
  );
};

export default ApplyButton;
