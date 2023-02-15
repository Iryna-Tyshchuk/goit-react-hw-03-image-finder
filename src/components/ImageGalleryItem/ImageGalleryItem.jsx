import PropTypes from 'prop-types';
import { StyledImg, StyledLi } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({ image }) => {
  return (
    <StyledLi className="gallery-item">
      <StyledImg src={image.webformatURL} alt={image.tags} />
    </StyledLi>
  );
};

ImageGalleryItem.propTypes = {
  image: PropTypes.shape,
};
// дописати пропс
