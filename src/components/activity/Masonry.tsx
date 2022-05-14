import { useState } from "react";
import {
  Masonry,
  Block,
  Img,
  Description,
} from "../../styles/activity/activity";
import ModalWindow from "./Masonry_modal";

interface IImageSrc {
  url: string[];
  title: string;
  description: string;
}

const imgSrc: IImageSrc[] = [
  {
    url: [
      "https://w0.peakpx.com/wallpaper/76/665/HD-wallpaper-wernigerode-wohltaeterbrunnen-beautiful-square-german-city-cityscape-saxony-anhalt-germany.jpg",
    ],
    title: "Hello?",
    description: "this is description: blah blah",
  },
  {
    url: [
      "https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVydGljYWx8ZW58MHx8MHx8&w=1000&q=80",
    ],
    title: "We",
    description: "this is description: blah blah",
  },
  {
    url: [
      "https://i.pinimg.com/originals/d7/1c/52/d71c521ccd7baf5bd076c27ecdf769a2.jpg",
    ],
    title: "Welcome",
    description: "this is description: blah blah",
  },
  {
    url: [
      "https://images.unsplash.com/photo-1537884944318-390069bb8665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw5NzY4Njc0fHxlbnwwfHx8fA%3D%3D&w=1000&q=80",
    ],
    title: "Network Leader!",
    description: "this is description: blah blah",
  },
  {
    url: [
      "https://c0.wallpaperflare.com/preview/1/703/828/fighter-jet-airshow.jpg",
    ],
    title: "Are",
    description: "this is description: blah blah",
  },
  {
    url: ["https://wallpaper.dog/large/20471540.jpg"],
    title: "To be",
    description: "this is description: blah blah",
  },
  {
    url: [
      "https://i.pinimg.com/736x/84/af/c3/84afc369022cf56f1d8957aac5bb4aa0.jpg",
    ],
    title: "Here",
    description: "this is description",
  },
]; //이미지소스 데이터, 나중에 데어터 폴더생기면 분리예정, 이미지는 landscape(horizontalrectangular)형식권장.

const MasonryBox = () => {
  const [modal, setModal] = useState(false);
  const [src, setSrc] = useState<IImageSrc>();
  return (
    <Masonry>
      {imgSrc.map((item, index) => (
        <>
          <Block
            key={index}
            onClick={() => {
              setSrc(item);
              setModal(!modal);
            }}
          >
            <Img src={item.url[0]} />
            <Description>{item.title}</Description>
          </Block>
        </>
      ))}
      {modal ? (
        <ModalWindow modal={modal} setModal={setModal} item={src} />
      ) : null}
    </Masonry>
  );
};
export default MasonryBox;
