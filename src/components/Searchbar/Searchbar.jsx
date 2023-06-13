import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

import { useState } from 'react';

export default function Searchbar({ onSubmit, changePage }) {
  const [name, setName] = useState('');

  const handeleSubmit = e => {
    e.preventDefault();

    onSubmit(name);
    setName('');
    changePage();
  };

  return (
    <header className={css.searchbar}>
      <form className={css.searchForm} onSubmit={handeleSubmit}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>

        <input
          onChange={e => setName(e.currentTarget.value)}
          value={name}
          className={css.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
};
