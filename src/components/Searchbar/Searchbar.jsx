import css from './Searchbar.module.css';
import PropTypes from 'prop-types';

const { Component } = require('react');

export default class Searchbar extends Component {
  state = {
    name: '',
  };

  handleChangeName = e => {
    this.setState({ name: e.currentTarget.value });
  };

  handeleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state.name);
    this.setState({ name: '' });
    this.props.changePage();
  };

  render() {
    return (
      <header className={css.searchbar}>
        <form className={css.searchForm} onSubmit={this.handeleSubmit}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>

          <input
            onChange={this.handleChangeName}
            value={this.state.name}
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
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired,
};
