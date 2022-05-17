import styled from "@emotion/styled";

export const GalleryContainer = styled("div")`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
`;

export const SlideContainer = styled("div")`
  display: flow;
  position: relative;
  width: 100%;
  height: 80%;
`;

export const ThumbnailContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: 20%;
`;

export const Slide = styled("img")<{ activity: boolean }>`
  display: ${(props) => (props.activity ? "block" : "none")};
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Thumbnail = styled("img")<{ activity: boolean; post: boolean }>`
  display: ${(props) => (props.post ? "block" : "none")};
  opacity: ${(props) => (props.activity ? 1 : 0.6)};
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SlideSwapper = styled("button")`
  position: absolute;
  border: none;
  width: 10%;
  height: 100%;
  cursor: pointer;
  background: black;

  color: white;
  font-size: 20px;
  text-align: center;

  transition: opacity 0.3s ease;
  opacity: 0;
  &:hover {
    opacity: 0.6;
  }
`;

export const SlideLeftSwapper = styled(SlideSwapper)`
  top: 0;
  left: 0;
`;

export const SlideRightSwapper = styled(SlideSwapper)`
  top: 0;
  right: 0;
`;
