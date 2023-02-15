// Модальне вікно повинно закриватися по натисканню клавіші ESC або по кліку на оверлеї.

import { StyledModal, StyledOverlay } from './Modal.styled';

export const Modal = () => {
  return (
    <StyledOverlay class="overlay">
      <StyledModal class="modal">
        <img src="" alt="" />
      </StyledModal>
    </StyledOverlay>
  );
};
