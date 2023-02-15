import PropTypes from 'prop-types';
import { StyledImg, StyledLi } from './ImageGalleryItem.styled';
export const ImageGalleryItem = ({
  tags,
  largeImageURL,
  webformatURL,
  getLargeImage,
}) => {
  return (
    <StyledLi onClick={() => getLargeImage(largeImageURL)}>
      <StyledImg src={webformatURL} alt={tags} />
    </StyledLi>
  );
};

ImageGalleryItem.propTypes = {
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  getLargeImage: PropTypes.func.isRequired,
};
// дописати пропс
