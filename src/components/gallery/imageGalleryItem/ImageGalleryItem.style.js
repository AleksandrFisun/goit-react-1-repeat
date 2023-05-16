import styled from 'styled-components';

export const ItemImage = styled.li`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 260px;
  object-fit: cover;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  &:hover {
    transform: scale(1.02);
  }
`;
export const Image = styled.img`
  display: block;
  min-width: 100%;
  object-fit: cover;
  object-position: center;
  height: 260px;
`;
