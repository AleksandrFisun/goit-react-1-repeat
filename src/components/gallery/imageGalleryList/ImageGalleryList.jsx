import { ImageList } from './ImageGalleryList.style';
import { ImageGalleryItem } from '../imageGalleryItem/ImageGalleryItem';

export const ImageGalleryList = ({ images, openModal }) => {
  return (
    <ImageList>
      {images.map(({ id, webformatURL, tags }, index) => (
        <ImageGalleryItem
          key={id}
          id={id}
          index={index}
          webformatURL={webformatURL}
          tags={tags}
          openModal={openModal}
        />
      ))}
    </ImageList>
  );
};
