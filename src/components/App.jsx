import React, { useEffect, useState } from 'react';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { DataImages } from './Key/Key';

export const App = () => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [dataModal, setDataModal] = useState(null);
  const [value, setValue] = useState('');
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [lastSearchQuery, setLastSearchQuery] = useState('');

  useEffect(() => {
    const getDataImages = async () => {
      if (!value) return;
      try {
        setIsLoading(true);
         if (value !== lastSearchQuery) {
          setLastSearchQuery(value);
          setImages([]); 
          setPage(1);
        }
        const response = await DataImages(value, page);

        const { hits, totalHits } = response.data;
        if (hits.length < 1) {
          alert('Sorry, nothing was found for your request...');
          return;
        }

        setImages(prevState => [...prevState, ...hits]);

        setTotal(totalHits);
      } catch (error) {
        alert(`${error.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    getDataImages();
  }, [value, page, lastSearchQuery]);

  const onHandleClickSubmit = value => {
    if (value.trim() === '') {
      alert('Invalid value entered');
      return;
    }

    setValue(value);
    setImages([]);
    setPage(1);
  };

  const onHandleClickLoadMore = e => {
    setPage(prevState => prevState + 1);
  };

  const openModal = dataImage => {
    setIsOpenModal(true);
    setDataModal(dataImage);
  };

  const closeModal = () => {
    setIsOpenModal(false);
    setDataModal(null);
  };

  return (
    <div>
      <Searchbar onSubmit={onHandleClickSubmit} />
      {images.length !== 0 && (
        <ImageGallery arrayData={images} openModal={openModal} />
      )}
      {page < Math.ceil(total / 12) && (
        <Button onClick={onHandleClickLoadMore} />
      )}
     {isLoading && <Loader />}
      {isOpenModal && <Modal dataModal={dataModal} closeModal={closeModal} />}
    </div>
  );
};