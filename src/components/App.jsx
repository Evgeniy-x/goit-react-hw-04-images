import { Component } from 'react';

import fetchPixabay from '../services/pixabay-api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    name: '',
    images: [],
    page: 1,
    totalImg: 0,
    loader: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      this.onChangeLoader(true);
      fetchPixabay(this.state.name, 1)
        .then(response => {
          this.setState({
            images: response.hits,
            totalImg: response.total,
          });
        })
        .catch(error => console.log(error))
        .finally(() => this.setState({ loader: false }));
    }
  }

  addName = findName => {
    this.setState({ name: findName });
  };
  onChangePage = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };
  onAddImg = img => {
    this.setState(state => ({ images: [...state.images, ...img] }));
  };
  onChangeLoader = loader => {
    this.setState({ loader });
  };
  changePage = () => {
    this.setState({ page: 1 });
  };

  render() {
    const { name, images, page, totalImg, loader } = this.state;

    return (
      <>
        <Searchbar
          onSubmit={this.addName}
          changePage={this.changePage}
        ></Searchbar>

        <ImageGallery images={images} />
        {loader ? <Loader /> : null}
        {!(images.length === totalImg) ? (
          <Button
            name={name}
            images={images}
            page={page}
            loader={loader}
            onChangeLoader={this.onChangeLoader}
            onChangePage={this.onChangePage}
            onAddImg={this.onAddImg}
          />
        ) : null}
      </>
    );
  }
}
