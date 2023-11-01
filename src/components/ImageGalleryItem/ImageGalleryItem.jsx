import { Img } from './ImageGalleryItem.styled';
import React, { Component } from 'react';
import { ShowModal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    setIsOpen: false,
  };

  toggleModal = () => {
    this.setState(prevState => ({
      setIsOpen: !prevState.setIsOpen,
    }));
  };

  render() {
    return (
      <>
        <Img
          src={this.props.img.webformatURL}
          alt={this.props.img.tags}
          onClick={this.toggleModal}
        ></Img>
        <ShowModal
          img={this.props.img}
          isOpen={this.state.setIsOpen}
          onRequestClose={this.toggleModal}
        ></ShowModal>
      </>
    );
  }
}
