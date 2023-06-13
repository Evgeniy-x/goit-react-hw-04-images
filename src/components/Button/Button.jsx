import css from './Button.module.css';
import { Component } from 'react';
import fetchPixabay from '../../services/pixabay-api';
import PropTypes from 'prop-types';

class Button extends Component {
  state = { disabled: false };
  loadMore = () => {
    this.setState({ disabled: true });
    fetchPixabay(this.props.name, this.props.page + 1).then(response => {
      this.props.onChangeLoader(false);
      this.props.onAddImg(response.hits);
      this.setState({ disabled: false });
    });
  };
  render() {
    return (
      <button
        className={css.button}
        disabled={this.state.disabled}
        onClick={() => {
          this.props.onChangePage();
          this.props.onChangeLoader(true);
          this.loadMore();
        }}
      >
        Load more...
      </button>
    );
  }
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
