import { Img } from './ImageGalleryItem.styled';
import React, { useState } from 'react';
import { ShowModal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ img }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen(prevState => !prevState);
  };
  return (
    <>
      <Img src={img.webformatURL} alt={img.tags} onClick={toggleModal}></Img>
      <ShowModal
        img={img}
        isOpen={isOpen}
        onRequestClose={toggleModal}
      ></ShowModal>
    </>
  );
};
