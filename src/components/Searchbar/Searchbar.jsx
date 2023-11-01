import {
  BtnLabel,
  SearchbarWrap,
  SearchButton,
  SearchForm,
  SearchInput,
} from './Searchbar.styled';
import { FcSearch } from 'react-icons/fc';

export const Searchbar = ({ onSubmit }) => {
  return (
    <SearchbarWrap>
      <SearchForm onSubmit={onSubmit}>
        <SearchButton type="submit">
          <FcSearch size={32}></FcSearch>
          <BtnLabel>Search</BtnLabel>
        </SearchButton>

        <SearchInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          name="search"
        />
      </SearchForm>
    </SearchbarWrap>
  );
};
