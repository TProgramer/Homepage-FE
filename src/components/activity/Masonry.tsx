import { useEffect, useState } from 'react';
import {
  Masonry,
  Img,
  Hover,
  ImageBox,
  Skeleton
} from '../../styles/activity/activity';

interface IImageSrc {
  img: string;
  title: string;
  description: string;
}

const MasonryBox = () => {
  const [image, setImage] = useState<IImageSrc[]>();
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  const [imgLoad, setImgLoad] = useState(true);
  useEffect(() => {
    (async () => {
      const res = await (await fetch('/api/images/active?limit=18')).json();
      setImage(res);
      setImgLoad(false);
    })();
  }, [])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
      (() => {
        setWindowWidth(window.innerWidth);
      })();
      return () => window.removeEventListener('resize', () => { setWindowWidth(window.innerWidth); });
    }
  }, [])
  return (
    <Masonry windowWidth={windowWidth} >
      {
        image?.map((item, index) => (
          <ImageBox key={index}>
            {
              !imgLoad
                ? <Skeleton />
                : (
                  <>
                    {/* <Hover>{item.title}</Hover>
                    <Img
                      src={item.img}
                      alt={item.title}
                    /> */}
                  </>
                )
            }
          </ImageBox>
        ))
      }
    </Masonry >
  )
}
export default MasonryBox;