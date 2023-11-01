import React from 'react';
import { Component } from 'react';
import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Searchbar } from '../Searchbar/Searchbar';
import { getImages } from '../Services';
import { Container } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';

export class App extends Component {
  state = {
    images: [],
    searchQuery: '',
    page: 1,
    loading: false,
    error: false,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    ) {
      this.setState({ loading: true });
      try {
        const image = await getImages(this.state);
        this.setState(prevState => ({
          images: [...prevState.images, ...image],
          loading: false,
        }));
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ images: [] });
    const searchQuery = event.target.search.value;
    this.setState({ searchQuery, page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { loading, images, error } = this.state;

    return (
      <Container>
        <Toaster position="bottom-left" />
        <Searchbar onSubmit={this.handleSubmit}></Searchbar>
        {error && toast.error('Whoops! Error! Please reload this page!!!')}
        {images.length > 0 && <ImageGallery elements={images} />}
        {images.length > 0 && <Button onClick={this.handleLoadMore} />}
        {loading && <Loader />}
      </Container>
    );
  }
}
