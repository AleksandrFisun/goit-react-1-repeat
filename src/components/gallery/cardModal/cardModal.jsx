import {
  ModalButton,
  ModalImg,
  ModalList,
  ModalItem,
  ModalText,
} from './cardModal.style';
export const ModalCard = ({ onBtnExit, imageModal }) => {
  return (
    <>
      <ModalButton type="button" onClick={onBtnExit}></ModalButton>
      {imageModal.map(({ id, largeImageURL, tags, likes, user, views }) => {
        return (
          <div key={id}>
            <div>
              <ModalImg src={largeImageURL} alt="" />
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
          </div>
        );
      })}
    </>
  );
};
