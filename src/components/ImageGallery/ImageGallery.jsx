import css from './ImageGallery.module.css';
import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import Modal from '../Modal/Modal';
import PropTypes from 'prop-types';

class ImageGallery extends Component {
  state = {
    srcLarge: '',
    showModal: false,
  };

  addLargeURL = largeUrl => {
    this.setState({ srcLarge: largeUrl, showModal: true });
  };

  disableModal = () => {
    this.setState({ showModal: false });
  };

  render() {
    const images = this.props.images;
    return (
      <>
        <ul className={css.imageGallery}>
          {images.map(({ id, webformatURL, largeImageURL }) => (
            <ImageGalleryItem
              key={id}
              src={webformatURL}
              largeURL={largeImageURL}
              handleState={this.addLargeURL}
            ></ImageGalleryItem>
          ))}
        </ul>
        {this.state.showModal && (
          <Modal onClose={this.disableModal}>
            <img src={this.state.srcLarge} alt={this.state.srcLarge} />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
