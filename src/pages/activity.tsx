import { Wrapper } from "../styles/activity/activity";
import dynamic from "next/dynamic";
import Header from "../components/activity/Header";
import { useEffect, useState } from "react";

const MasonryBox = dynamic(() => import("../components/activity/Masonry"), {
  ssr: false,
});

const Activity = () => {
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        setWindowWidth(window.innerWidth);
      });
      (() => {
        setWindowWidth(window.innerWidth);
      })();
      return () =>
        window.removeEventListener("resize", () => {
          setWindowWidth(window.innerWidth);
        });
    }
  }, []);
  return (
    <Wrapper>
      <Header windowWidth={windowWidth} />
      <MasonryBox windowWidth={windowWidth} />
    </Wrapper>
  );
};

export default Activity;
