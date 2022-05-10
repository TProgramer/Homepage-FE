import React, { useEffect, useState } from 'react';
import {
  Masonry,
  Image
} from '../../styles/activity/activity';
interface IImageSrc {
  img: string;
  title: string;
  description: string;
}
const itemData: IImageSrc[] = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    description: 'this is discruption'
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    description: 'this is discruption'
  },
];


const MasonryBox = () => {
  // const size = window.innerWidth;
  const [windowWidth, setWindowWidth] = useState<number>(0);
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // function handleResize() {
      //   setWindowWidth(window.innerWidth);
      // }
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
  }, [])//실시간 윈도우 너비 수정하기
  return (
    <Masonry windowWidth={windowWidth} >
      {
        itemData.map(item => (
          <div key={item.img}>
            {/* <Image
            src={item.img}
            alt={item.title}
          /> */}
          </div>
        ))
      }
    </Masonry >

  )
}
export default MasonryBox;
