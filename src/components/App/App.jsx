import React, { useEffect, useState } from 'react';
import { Button } from '../Button/Button';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Searchbar } from '../Searchbar/Searchbar';
import { getImages } from '../Services';
import { Container } from './App.styled';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [images, setImages] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    if (searchQuery === '') {
      return;
    }
    const fetchData = async () => {
      let image;
      try {
        setLoading(true);
        image = await getImages(searchQuery, page);
        setImages(prevState => [...prevState, ...image.hits]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
        setShowBtn(page < Math.ceil(image.totalHits / 12));
      }
    };
    fetchData();
  }, [searchQuery, page]);

  const handleSubmit = searchQuery => {
    setSearchQuery(searchQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Container>
      <Toaster position="bottom-left" />

      <Searchbar onSubmit={handleSubmit}></Searchbar>
      {error && toast.error('Whoops! Error! Please reload this page!!!')}
      {images.length > 0 && <ImageGallery elements={images} />}
      {showBtn && <Button onClick={handleLoadMore} />}
      {loading && <Loader />}
    </Container>
  );
};
