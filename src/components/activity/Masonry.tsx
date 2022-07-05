import { useEffect, useState } from "react";
import {
  Masonry,
  Img,
  Skeleton,
  ImageBox,
} from "../../styles/activity/activity";
import P from "../common/P";
import ModalWindow from "./MasonryModal";

export interface IImageSrc {
  onoff?: boolean;
  img: string;
  title: string;
  description: string;
}

const MasonryBox = ({ windowWidth }: { windowWidth: number }) => {
  const [image, setImage] = useState<IImageSrc[]>();
  const [imgLoad, setImgLoad] = useState(false);
  useEffect(() => {
    (async () => {
      const res = await (await fetch("/api/images/active?limit=18")).json();
      setImage(res);
    })();
    setImgLoad(false);
  }, []);
  const [modal, setModal] = useState<IImageSrc>({
    onoff: false,
    img: "",
    title: "",
    description: "",
  });
  const modalHandler = (src: IImageSrc) => {
    setModal({
      onoff: true,
      img: src.img,
      title: src.title,
      description: src.description,
    });
  };
  return (
    <>
      <Masonry windowWidth={windowWidth}>
        {image?.map((item, index) => (
          <ImageBox key={index}>
            <Skeleton
              load={imgLoad}
              onClick={() => {
                modalHandler(item);
              }}
            >
              {item.title}
            </Skeleton>
            <Img src={item.img} alt={item.title} />
          </ImageBox>
        ))}
      </Masonry>
      {modal?.onoff ? (
        <ModalWindow
          windowWidth={windowWidth}
          modal={modal}
          setModal={(src) => setModal(src)}
        />
      ) : null}
    </>
  );
};
export default MasonryBox;
