import { ItemImage, Image } from './ImageGalleryItem.style';

export const ImageGalleryItem = ({
  webformatURL,
  id,
  tags,
  index,
  openModal,
}) => {
  return (
    <ItemImage>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={() => openModal(id)}
        id={id}
      />
    </ItemImage>
  );
};
