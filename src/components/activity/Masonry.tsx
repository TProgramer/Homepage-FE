import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import {
  Masonry,
  Img,
  Skeleton,
  ImageBox,
} from "../../styles/activity/activity";
import ModalWindow from "./MasonryModal";

export interface IImageSrc {
  onoff?: boolean;
  img: string;
  title: string;
  description: string;
}

const MasonryBox = ({ windowWidth }: { windowWidth: number }) => {
  const { data: images, loading: loadingImages } = useFetch(
    "",
    "/api/activity/images"
  );

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
      {loadingImages ? (
        "Loading..."
      ) : (
        <Masonry windowWidth={windowWidth}>
          {images?.map((item: IImageSrc, index: number) => (
            <ImageBox key={index}>
              <Skeleton
                load={loadingImages}
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
      )}
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
