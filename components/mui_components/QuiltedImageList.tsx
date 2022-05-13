import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function QuiltedImageList() {
  return (
    <ImageList
      className='sm:w-[500px] sm:h-[450px] w-full h-[400px]'
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/assets/img/gallery/2.jpg',
    title: 'Marketing Growth',
    rows: 2,
    cols: 2,
  },
  {
    img: '/assets/img/gallery/7.jpg',
    title: 'Marketing World',
  },
  {
    img: '/assets/img/gallery/4.jpg',
    title: 'Marketing Communications',
  },
  {
    img: '/assets/img/gallery/5.jpg',
    title: 'Marketing Tools',
    cols: 2,
  },
  {
    img: '/assets/img/gallery/6.png',
    title: 'Email Marketing',
    cols: 2,
  },
  {
    img: '/assets/img/gallery/9.png',
    title: 'Marketing Calendar',
  },
  {
    img: '/assets/img/gallery/10.png',
    title: 'Marketing Tasks',
  },
  {
    img: '/assets/img/gallery/3.png',
    title: 'Marketing Strategy',
    rows: 2,
    cols: 4,
  }
];