import { LoadMoreBtn, WrapBtn } from './Button.styled';

export const Button = ({ onClick }) => {
  return (
    <WrapBtn>
      <LoadMoreBtn onClick={() => onClick()}>Load more</LoadMoreBtn>
    </WrapBtn>
  );
};
