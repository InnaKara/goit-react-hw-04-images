import { Img } from './ImageGalleryItem.styled';
import Modal from 'react-modal';
import React from 'react';
import { ShowModal } from 'components/Modal/Modal';

export const ImageGalleryItem = ({ img }) => {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const appRootElement = document.getElementById('root');
  Modal.setAppElement(appRootElement);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Img src={img.webformatURL} alt={img.tags} onClick={openModal}></Img>
      <ShowModal
        img={img}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      ></ShowModal>
    </>
  );
};
