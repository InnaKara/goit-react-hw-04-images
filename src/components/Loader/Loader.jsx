import { LoadWrap } from './Loader.styled';
import { MagnifyingGlass } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <LoadWrap>
      <MagnifyingGlass
        visible={true}
        height="200"
        width="150"
        ariaLabel="MagnifyingGlass-loading"
        glassColor="#c0efff"
        color="rgb(63, 81, 181)"
      />
    </LoadWrap>
  );
};
