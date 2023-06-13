import { useState, useEffect } from 'react';

import fetchPixabay from '../services/pixabay-api';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';

export function App() {
  const [name, setName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImg, setTotalImg] = useState(0);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    if (name === '') {
      return;
    }
    console.log(page);
    console.log(name);

    onChangeLoader(true);
    fetchPixabay(name, 1)
      .then(response => {
        setImages(response.hits);
        setTotalImg(response.total);
      })
      .catch(error => console.log(error))
      .finally(() => setLoader(false));
  }, [name]);

  const addName = findName => {
    setName(findName);
  };
  const onChangePage = () => {
    setPage(page + 1);
  };

  const onAddImg = img => {
    setImages([...images, ...img]);
  };

  const onChangeLoader = loader => {
    setLoader(loader);
  };

  const changePage = () => {
    setPage(1);
  };

  return (
    <>
      <Searchbar onSubmit={addName} changePage={changePage}></Searchbar>

      <ImageGallery images={images} />
      {loader ? <Loader /> : null}
      {!(images.length === totalImg) ? (
        <Button
          name={name}
          images={images}
          page={page}
          loader={loader}
          onChangeLoader={onChangeLoader}
          onChangePage={onChangePage}
          onAddImg={onAddImg}
        />
      ) : null}
    </>
  );
}
