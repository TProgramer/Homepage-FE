import { useState } from "react";
import {
  StyledNavbar,
  StyledMenuIcon,
  StyledCancelIcon,
} from "../../../styles/layout/main/header";
import DropDown from "./DropDown";
import SideBlock from "./SideBlock";
import Link from "next/link";
import { useTokenContext } from "../../../context/tokenState";
const Navbar = () => {
  const menus = ["소개", "활동", "자료", "게시판"];

  const [isHover, setIsHover] = useState<boolean>(false);
  const [isSide, setIsSide] = useState<boolean>(false);

  const onClickHambar = () => {
    setIsSide((prev) => !prev);
  };

  const hoverHandler = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (event.type === "mouseenter") {
      setIsHover(true);
    } else if (event.type === "mouseleave") {
      setIsHover(false);
    }
  };
  const { accessToken } = useTokenContext();
  
  return (
    <>
      <StyledNavbar isHover={isHover}>
        <div className="logo">
          <Link href="/">
            <a>NL</a>
          </Link>
        </div>
        <div
          className="navBox"
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          {menus.map((menu, index) => (
            <div className="navBoxItem" key={index}>
              {menu}
            </div>
          ))}
        </div>
        <div className="reserve">
          <Link href="#">
            <a>좌석예약</a>
          </Link>
        </div>
        {accessToken ? null : (
          <div className="register">
            <Link href="/signin">
              <a>로그인</a>
            </Link>
          </div>
        )}
        <div onClick={onClickHambar}>
          {isSide ? <StyledCancelIcon /> : <StyledMenuIcon />}
        </div>
        <div
          className="drop_down"
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        >
          <div className="inner_drop_down">
            <DropDown isHover={isHover} />
          </div>
        </div>
      </StyledNavbar>

      <SideBlock isSide={isSide} />
    </>
  );
};

export default Navbar;
