import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import { Section } from '../phonebook/section/Section';
import { SearchBar } from './searchbar/Searchbar';
import { ImageGalleryList } from './imageGalleryList/ImageGalleryList';
import { getImage } from './api/api';
import { ButtonLoadMore } from './button/Button';
import { Loader } from './loader/Loader';
import { Modal } from '../Modal/Modal';
import { ModalCard } from './cardModal/cardModal';

import { WrapperButtonLoadMore } from './Gallary.style';

export const Gallary = () => {
  const [images, setImages] = useState([]);
  const [imageModal, setImageModal] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState('');
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    const fetchImage = async () => {
      if (!values) {
        return;
      }
      setIsLoading(true);
      try {
        const response = await getImage(values, page);
        setShowModal(false);
        if (response.total === 0) {
          return toast.error(`💩 Ничего не найдено!`);
        }
        setImages(prev => {
          return [...prev, ...response.hits];
        });

        setTotalHits(response.total);
      } catch (error) {
        setIsLoading(false);
        toast.warn(`🐷 ${error}`);
      } finally {
        setIsLoading(false);
      }
    };
    fetchImage();
    return;
  }, [values, page]);

  useEffect(() => {
    if (totalHits === 0) {
      return;
    }
    toast.success(`💪 Всего найдено ${totalHits} !`);
    return;
  }, [totalHits]);
  useEffect(() => {
    if (totalHits === 0) {
      return;
    }
    if (images.length === totalHits && images.length !== 0) {
      toast.success('🎉👻 Вы посмотрели все изображения!');
    }
    return;
  }, [images.length, totalHits]);

  const onSubmitForm = value => {
    if (value === values) {
      return toast.warn('🐷 Введите что-то новое!');
    }
    setValues(value);
    setPage(1);
    setImages([]);
  };

  const onLoadMore = () => {
    setPage(page + 1);
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const openModal = id => {
    const onFilterImage = images.filter(img => img.id === id);
    setImageModal(onFilterImage);
    toggleModal();
  };

  return (
    <>
      <SearchBar onSubmit={onSubmitForm} />
      <Section>
        <ImageGalleryList images={images} openModal={openModal} />

        <WrapperButtonLoadMore>
          <Loader isLoading={isLoading} />
          {images.length !== 0 && images.length !== totalHits && (
            <ButtonLoadMore onLoadMore={onLoadMore} />
          )}
        </WrapperButtonLoadMore>
      </Section>
      {showModal && (
        <Modal onCloseBackdrop={toggleModal}>
          <ModalCard onBtnExit={toggleModal} imageModal={imageModal} />
        </Modal>
      )}
    </>
  );
};
