import { Component } from 'react';
import { toast } from 'react-toastify';

import { Section } from '../phonebook/section/Section';
import { SearchBar } from './searchbar/Searchbar';
import { ImageGalleryList } from './imageGalleryList/ImageGalleryList';
import { getImage } from './api/api';
import { ButtonLoadMore } from './button/Button';
import { Loader } from './loader/Loader';
import { Modal } from '../Modal/Modal';

import {
  WrapperButtonLoadMore,
  ModalImg,
  ModalList,
  ModalItem,
  ModalButton,
  ModalText,
} from './Gallary.style';

export class Gallary extends Component {
  state = {
    values: '',
    images: [],
    page: 0,
    largeImage: '',
    user: '',
    views: '',
    likes: '',
    tags: '',
    showModal: false,
    isLoading: false,
    error: null,
  };

  async componentDidUpdate(prevProps, prevState) {
    const prevValue = prevState.values;
    const prevPage = prevState.page;

    const { values, page, images } = this.state;
    if (prevValue !== values || prevPage !== page) {
      try {
        const fetchImage = getImage(values, page);
        this.setState({ isLoading: true });
        this.setState({ showModal: false });
        fetchImage.then(data =>
          data.total === 0
            ? toast.error('💩 Ничего не найдено!', {
                position: 'top-right',
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: 'dark',
              })
            : data.hits.forEach(
                ({
                  id,
                  webformatURL,
                  largeImageURL,
                  user,
                  likes,
                  views,
                  tags,
                }) => {
                  !images.some(image => image.id === id) &&
                    this.setState(({ images }) => ({
                      images: [
                        ...images,
                        {
                          id,
                          webformatURL,
                          largeImageURL,
                          user,
                          likes,
                          views,
                          tags,
                        },
                      ],
                    }));
                  this.setState({ isLoading: false });
                }
              )
        );
      } catch (error) {
        this.setState({ error });
      }
    }
  }
  onSubmitForm = value => {
    const { values } = this.state;
    if (value === values) {
      return toast.warn('🐷 Введите что-то новое!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    }
    this.setState({ values: value, page: 1, images: [] });
  };

  onLoadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };
  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  openModal = index => {
    this.setState(({ images }) => ({
      largeImage: images[index].largeImageURL,
      user: images[index].user,
      likes: images[index].likes,
      views: images[index].views,
      tags: images[index].tags,
    }));
    this.toggleModal();
  };

  render() {
    const {
      images,
      isLoading,
      showModal,
      largeImage,
      user,
      likes,
      views,
      tags,
    } = this.state;
    return (
      <>
        <SearchBar onSubmit={this.onSubmitForm} />
        <Section>
          <ImageGalleryList images={images} openModal={this.openModal} />

          <WrapperButtonLoadMore>
            <Loader isLoading={isLoading} />
            {images.length !== 0 && (
              <ButtonLoadMore onLoadMore={this.onLoadMore} />
            )}
          </WrapperButtonLoadMore>
        </Section>
        {showModal && (
          <Modal onCloseBackdrop={this.toggleModal}>
            <ModalButton type="button" onClick={this.toggleModal}></ModalButton>
            <div>
              <ModalImg src={largeImage} alt="" />
            </div>
            <ModalList>
              <ModalItem>
                <ModalText>User:{user}</ModalText>
              </ModalItem>
              <ModalItem>
                <ModalText>Likes:{likes}</ModalText>
              </ModalItem>
              <ModalItem>
                <ModalText>Views:{views}</ModalText>
              </ModalItem>
              <ModalItem>
                <ModalText>Tags:{tags}</ModalText>
              </ModalItem>
            </ModalList>
          </Modal>
        )}
      </>
    );
  }
}
