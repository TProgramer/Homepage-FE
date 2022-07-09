import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Avatar from "@mui/material/Avatar";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTokenContext } from "../../../context/TokenState";
import useFetch from "../../../hooks/useFetch";

interface LogoutDto {}

export default function User() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const { refreshToken, setTokens } = useTokenContext();
  const { post } = useFetch(
    "http://ec2-3-35-104-193.ap-northeast-2.compute.amazonaws.com:8000"
  );

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };
  const onClickLogout = async () => {
    const { error } = await post<LogoutDto>("/auth/logout", {
      refresh_token: refreshToken,
    });

    if (error) {
      alert("로그아웃 실패");
    } else {
      setTokens({ accessToken: null, refreshToken: null });
      alert("로그아웃 성공");
      router.push("/");
    }
  };
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="userInfo">
      <Button
        ref={anchorRef}
        id="composition-button"
        aria-controls={open ? "composition-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        <Avatar src="/broken-image.jpg" sx={{ width: 48, height: 48 }} />
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        placement="bottom-start"
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  <Link href="/mypage">
                    <a>
                      <MenuItem onClick={handleClose}>My Page</MenuItem>
                    </a>
                  </Link>
                  <MenuItem onClick={onClickLogout}>Logout</MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}
