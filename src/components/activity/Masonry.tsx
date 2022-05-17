import { useEffect, useState } from 'react';
import {
  Masonry,
  Image,
  Hover
} from '../../styles/activity/activity';

interface IImageSrc {
  img: string;
  title: string;
  description: string;
}

const MasonryBox = () => {
  const [image, setImage] = useState<IImageSrc[]>();
  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);
  useEffect(() => {
    (async () => {
      const res = await (await fetch('http://localhost:3000/api/images/active?limit=18')).json();
      setImage(res);
    })();
  }, [])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', () => {
        setWindowWidth(window.innerWidth);
      });
      (() => {
        () => {
          setWindowWidth(window.innerWidth);
        }
      })();
      return () => window.removeEventListener('resize', () => { setWindowWidth(window.innerWidth); });
    }
  }, [])
  return (
    <Masonry windowWidth={windowWidth} >
      {
        image?.map((item, index) => (
          <div key={index}>
            <Hover></Hover>
            <Image
              src={item.img}
              alt={item.title}
            />
          </div>
        ))
      }
    </Masonry >
  )
}
export default MasonryBox;
