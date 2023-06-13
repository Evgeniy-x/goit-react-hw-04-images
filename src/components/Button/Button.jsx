import css from './Button.module.css';
import { useState } from 'react';
import fetchPixabay from '../../services/pixabay-api';
import PropTypes from 'prop-types';

function Button({ name, page, onChangePage, onChangeLoader, onAddImg }) {
  const [disabled, setDisabled] = useState(false);

  const loadMore = () => {
    setDisabled(true);
    fetchPixabay(name, page + 1).then(response => {
      onChangeLoader(false);
      onAddImg(response.hits);
      setDisabled(false);
    });
  };

  return (
    <button
      className={css.button}
      disabled={disabled}
      onClick={() => {
        onChangePage();
        onChangeLoader(true);
        loadMore();
      }}
    >
      Load more...
    </button>
  );
}

export default Button;

Button.propTypes = {
  name: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangeLoader: PropTypes.func.isRequired,
  loadMore: PropTypes.func,
  onAddImg: PropTypes.func.isRequired,
};
