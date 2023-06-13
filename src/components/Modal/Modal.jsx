import css from './Modal.module.css';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

function Modal({ children, onClose }) {
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // componentWillUnmount() {
  //   window.removeEventListener('keydown', handleKeyDown);
  // }

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return createPortal(
    <div className={css.overlay} onClick={handleBackdropClick}>
      <div className={css.modal}>{children}</div>
    </div>,
    modalRoot
  );
}

export default Modal;

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
};
