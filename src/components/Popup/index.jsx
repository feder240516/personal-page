import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal';
import './style.scss';
import usePopupAnimation from '../../hooks/usePopupAnimation';

export default function Popup({ children, isOpen, setIsOpen }) {
  const ANIMATION_TIME = 500;

  const { shouldRenderPopup, showFullSizePopup, allowInteraction } = usePopupAnimation({
    isOpen,
    animationTime: ANIMATION_TIME,
  });

  return (
    <Portal>
      {shouldRenderPopup ? (
        <div className="popup-wrapper">
          <div
            className="popup-overlay"
            onClick={() => (allowInteraction ? setIsOpen(false) : null)}
            role="presentation"
          />
          <div className={`popup-content ${showFullSizePopup ? '' : 'unmounted'}`}>{children}</div>
        </div>
      ) : null}
    </Portal>
  );
}

Popup.propTypes = {
  children: PropTypes.element.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};
