import styled from "@emotion/styled";

export const YoutubeBox = styled("div")`
  width: 100vw;
  height: calc(100vh - 100px);
  overflow: hidden;
  margin-top: 100px;
`;

export const YoutubeFrame = styled("iframe")`
  width: 100vw;
  height: max(100%, calc(100vw / 16 * 9));
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Contents = styled("div")`
  display: flex;
  flex-direction: column;

  position: absolute;
  top: calc(50vh + 50px);
  left: 50vw;
  transform: translate(-50%, -50%);

  color: white;
  text-shadow: -1px 0px black, 0px 1px black, 1px 0px black, 0px -1px black;
`;
