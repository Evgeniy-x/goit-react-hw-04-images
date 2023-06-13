import css from './ImageGallery.module.css';
import { useState } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

function ImageGallery({ images }) {
  const [srcLarge, setSrcLarge] = useState('');
  const [showModal, setShowModal] = useState(false);

  const addLargeURL = largeUrl => {
    setSrcLarge(largeUrl);
    setShowModal(true);
  };

  const disableModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ul className={css.imageGallery}>
        {images.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            src={webformatURL}
            largeURL={largeImageURL}
            handleState={addLargeURL}
          ></ImageGalleryItem>
        ))}
      </ul>
      {showModal && (
        <Modal onClose={disableModal}>
          <img src={srcLarge} alt={srcLarge} />
        </Modal>
      )}
    </>
  );
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
