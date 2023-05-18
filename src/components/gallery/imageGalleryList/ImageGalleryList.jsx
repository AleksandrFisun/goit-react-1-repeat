import { ImageList } from './ImageGalleryList.style';
import { ImageGalleryItem } from '../imageGalleryItem/ImageGalleryItem';

export const ImageGalleryList = ({ images, openModal }) => {
  return (
    <ImageList>
      {images.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          id={id}
          webformatURL={webformatURL}
          tags={tags}
          openModal={openModal}
        />
      ))}
    </ImageList>
  );
};
