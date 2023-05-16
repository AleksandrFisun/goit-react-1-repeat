import styled from 'styled-components';

export const WrapperButtonLoadMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
`;
export const ModalImg = styled.img`
  object-fit: contain;
  max-width: 100%;
`;
export const ModalList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;
export const ModalItem = styled.li`
  padding: 10px;
`;
export const ModalButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  border: 0;
  background-color: transparent;
  background-image: url(' https://img.icons8.com/clouds/100/close-window.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
`;
export const ModalText = styled.p`
  color: white;
`;
