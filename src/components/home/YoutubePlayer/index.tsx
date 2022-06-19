import { ReactNode } from "react";
import {
  YoutubeBox,
  YoutubeFrame,
  Contents,
} from "../../../styles/home/YoutubePlayer";

interface YoutubePlayerProps {
  videoID: string;
  autoplay?: boolean;
  mute?: boolean;
  loop?: boolean;
  controls?: boolean;
  disableKeyboard?: boolean;

  children?: ReactNode;
}

const YoutubePlayer = ({
  videoID,
  autoplay,
  mute,
  loop,
  controls,
  disableKeyboard,
  children,
}: YoutubePlayerProps) => {
  const src = `https://www.youtube.com/embed/${videoID}?autoplay=${
    autoplay ? "1" : "0"
  }&mute=${mute ? "1" : "0"}&loop=${
    loop ? "1" : "0"
  }&playlist=${videoID}&controls=${
    controls ? "1" : "0"
  }&modestbranding=1&disablekb=${disableKeyboard ? "1" : "0"}&iv_load_policy=3`;

  return (
    <>
      <YoutubeBox>
        <YoutubeFrame src={src} frameBorder={0} allowFullScreen={false} />;
      </YoutubeBox>
      <Contents>{children}</Contents>
    </>
  );
};

export default YoutubePlayer;
