import { Button } from './Button.style';

export const ButtonLoadMore = ({ onLoadMore }) => {
  return (
    <Button type="button" onClick={onLoadMore}>
      Load more
    </Button>
  );
};
