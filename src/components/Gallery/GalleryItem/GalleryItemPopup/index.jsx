import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popup from '../../../Popup';
import './style.scss';

export default function GalleryItemPopup({
  images,
  name,
  url,
  isOpenItem,
  setIsOpenItem,
  technologies = [],
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const prevImage = () => {
    setSelectedImage((state) => (state + images.length - 1) % images.length);
  };

  const nextImage = () => {
    setSelectedImage((state) => (state + 1) % images.length);
  };

  return (
    <Popup isOpen={isOpenItem} setIsOpen={setIsOpenItem}>
      <div className="gallery-item-popup">
        <h2 className="popup-project-title">{name}</h2>
        <div className="image-carousel">
          {images.length > 1 ? (
            <button className="carousel-btn carousel-left-arrow" type="button" onClick={prevImage}>
              <i className="material-icons">chevron_left</i>
            </button>
          ) : null}
          <div className="image-wrapper" style={{ '--index': selectedImage }}>
            {images.map((singleImage) => (
              <img
                src={singleImage}
                alt={`Imagen del proyecto ${name}`}
                height="500px"
                width="500px"
                key={singleImage}
              />
            ))}
          </div>
          {images.length > 1 ? (
            <button className="carousel-btn carousel-right-arrow" type="button" onClick={nextImage}>
              <i className="material-icons">chevron_right</i>
            </button>
          ) : null}
        </div>
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            <i className="material-icons">link</i>
            &nbsp; Link
          </a>
        </p>
      </div>
    </Popup>
  );
}

GalleryItemPopup.propTypes = {
  images: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  isOpenItem: PropTypes.bool.isRequired,
  setIsOpenItem: PropTypes.func.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

GalleryItemPopup.defaultProps = {
  technologies: [],
};
