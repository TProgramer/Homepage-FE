import { useState } from "react";
import {
  StyledNavbar,
  StyledMenuIcon,
  StyledCancelIcon,
} from "../../../styles/layout/header";
import DropDown from "./DropDown";
import SideBlock from "./SideBlock";
import Link from "next/link";

const Navbar = () => {
  const menus = ["소개", "활동", "자료", "게시판"];

  const [isHover, setIsHover] = useState<boolean>(false);
  const [isSide, setIsSide] = useState<boolean>(false);

  const onClickHambar = () => {
    setIsSide((prev) => !prev);
  };
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
          onMouseOver={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
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
        <div className="register">
          <Link href="#">
            <a>로그인</a>
          </Link>
        </div>
        <div onClick={onClickHambar}>
          {isSide ? <StyledCancelIcon /> : <StyledMenuIcon />}
        </div>
        <div
          className="drop_down"
          onMouseOver={() => {
            setIsHover(true);
          }}
          onMouseLeave={() => {
            setIsHover(false);
          }}
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
