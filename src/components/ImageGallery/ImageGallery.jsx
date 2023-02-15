import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import { StyledUl } from './ImageGallery.styled';
export const ImageGallery = ({ images }) => {
  return (
    <StyledUl>
      {images.map(image => (
        <ImageGalleryItem key={image.id} image={image} />
      ))}
    </StyledUl>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object.isRequired),
};
