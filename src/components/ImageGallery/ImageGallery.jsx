import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { GalleryWrap, ImageGalleryEl } from './ImageGallery.styled';

export const ImageGallery = ({ elements }) => {
  return (
    <GalleryWrap>
      {elements.map(element => (
        <ImageGalleryEl key={element.id}>
          <ImageGalleryItem img={element} />
        </ImageGalleryEl>
      ))}
    </GalleryWrap>
  );
};
