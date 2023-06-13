import css from './ImageGallery.module.css';
import { useState } from 'react';
import { Spin } from '../Loader/Loader';

const ImageGalleryItem = ({ id, src, largeURL, handleState }) => {
  const [load, setLoad] = useState(true);
  const [display, setDisplay] = useState('none');

  const loading = () => {
    setLoad(false);
    setDisplay('inline');
  };

  return (
    <>
      <li
        className={css.imageGalleryItem}
        onClick={() => handleState(largeURL)}
      >
        {load ? <Spin /> : null}
        <img
          style={{ display: `${display}` }}
          className={css.imageGalleryItemImage}
          src={src}
          alt={id}
          onLoad={loading}
        />
      </li>
    </>
  );
};

export default ImageGalleryItem;
