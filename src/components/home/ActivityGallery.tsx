import { useState } from "react";
import useInterval from "../../hooks/useInterval";
import {
  GalleryContainer,
  SlideContainer,
  SlideLeftSwapper,
  SlideRightSwapper,
  Slide,
  Thumbnail,
  ThumbnailContainer,
} from "../../styles/home/activity_gallery";

export interface IImageSrc {
  key: number;
  url: string[];
  title: string;
  description: string;
}

// TODO: image dto

const imgSrc: IImageSrc[] = [
  {
    key: 0,
    url: [
      "https://w0.peakpx.com/wallpaper/76/665/HD-wallpaper-wernigerode-wohltaeterbrunnen-beautiful-square-german-city-cityscape-saxony-anhalt-germany.jpg",
    ],
    title: "Hello?",
    description: "this is description: blah blah",
  },
  {
    key: 1,
    url: [
      "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80",
    ],
    title: "We",
    description: "this is description: blah blah",
  },
  {
    key: 2,
    url: [
      "https://i.pinimg.com/originals/d7/1c/52/d71c521ccd7baf5bd076c27ecdf769a2.jpg",
    ],
    title: "Welcome",
    description: "this is description: blah blah",
  },
  {
    key: 3,
    url: [
      "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NzY4Njc0fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    ],
    title: "Network Leader!",
    description: "this is description: blah blah",
  },
  {
    key: 4,
    url: [
      "https://c0.wallpaperflare.com/preview/1/703/828/fighter-jet-airshow.jpg",
    ],
    title: "Are",
    description: "this is description: blah blah",
  },
  {
    key: 5,
    url: ["https://wallpaper.dog/large/20471540.jpg"],
    title: "To be",
    description: "this is description: blah blah",
  },
  {
    key: 6,
    url: [
      "https://i.pinimg.com/736x/84/af/c3/84afc369022cf56f1d8957aac5bb4aa0.jpg",
    ],
    title: "Here",
    description: "this is description",
  },
];

// TODO: 서버에서 활동 이미지 받아오기

const ActivityGallery = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const swapLeft = () =>
    setActiveImageIndex(
      (current) => (current - 1 + imgSrc.length) % imgSrc.length
    );
  const swapRight = () =>
    setActiveImageIndex((current) => (current + 1) % imgSrc.length);

  const leftSwapper = (
    <SlideLeftSwapper onClick={swapLeft}>{"<<"}</SlideLeftSwapper>
  );
  const rightSwapper = (
    <SlideRightSwapper onClick={swapRight}>{">>"}</SlideRightSwapper>
  );

  const slides = imgSrc.map((value, index) => (
    <Slide src={value.url[0]} activity={index === activeImageIndex} />
  ));

  const isPostedThumbnail = (index: number, activeImageIndex: number) => {
    const numberOfThumbnails = 5;
    const startIndex = Math.max(
      Math.min(
        activeImageIndex - Math.floor(numberOfThumbnails / 2),
        imgSrc.length - numberOfThumbnails
      ),
      0
    );

    return index >= startIndex && index < startIndex + numberOfThumbnails;
  };

  const thumbnails = imgSrc.map((value, index) => (
    <Thumbnail
      src={value.url[0]}
      activity={index === activeImageIndex}
      post={isPostedThumbnail(index, activeImageIndex)}
    />
  ));

  useInterval(swapRight, 3000);

  return (
    <GalleryContainer>
      <SlideContainer>
        {leftSwapper}
        {rightSwapper}
        {slides}
      </SlideContainer>
      <ThumbnailContainer>{thumbnails}</ThumbnailContainer>
    </GalleryContainer>
  );
};

export default ActivityGallery;
