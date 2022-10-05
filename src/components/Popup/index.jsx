import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../Portal';
import './style.scss';

export default function Popup({ children, isOpen, setIsOpen }) {
  return (
    <Portal>
      {isOpen ? (
        <div className="popup-wrapper">
          <div className="popup-overlay" onClick={() => setIsOpen(false)} role="presentation" />
          <div className="popup-content">{children}</div>
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
