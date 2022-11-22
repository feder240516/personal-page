import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Popup from '../../../Popup';
import './style.scss';

export default function GalleryItemPopup({
  images,
  name,
  url,
  message,
  isOpenItem,
  setIsOpenItem,
  technologies = [],
}) {
  const [selectedImage, setSelectedImage] = useState(0);
  const usedImages = images.slice(1);
  const prevImage = () => {
    setSelectedImage((state) => (state + usedImages.length - 1) % usedImages.length);
  };

  const nextImage = () => {
    setSelectedImage((state) => (state + 1) % usedImages.length);
  };

  const mustShowArrows = usedImages.length > 1;
  const isDefaultUrl = !!url && typeof url === 'string';
  const isArrayUrl = url instanceof Array;

  // eslint-disable-next-line no-nested-ternary
  const urlList = isArrayUrl ? url : isDefaultUrl ? [{ name: 'Link', address: url }] : [];

  return (
    <Popup isOpen={isOpenItem} setIsOpen={setIsOpenItem}>
      <div className="gallery-item-popup">
        <button className="close-button" type="button" onClick={() => setIsOpenItem(false)}>
          <i className="material-icons">cancel</i>
        </button>
        <h2 className="popup-project-title">{name}</h2>
        <div className="image-carousel">
          {mustShowArrows ? (
            <button className="carousel-btn carousel-left-arrow" type="button" onClick={prevImage}>
              <i className="material-icons">chevron_left</i>
            </button>
          ) : null}
          <div
            className="image-wrapper"
            style={{ '--index': selectedImage, '--has-arrows': mustShowArrows ? 1 : 0 }}
          >
            {usedImages.map((singleImage) => (
              <div className="image-fixed-size" key={singleImage}>
                <img src={singleImage} alt={`Imagen del proyecto ${name}`} />
              </div>
            ))}
          </div>
          {mustShowArrows ? (
            <button className="carousel-btn carousel-right-arrow" type="button" onClick={nextImage}>
              <i className="material-icons">chevron_right</i>
            </button>
          ) : null}
        </div>
        {urlList.map((singleUrl) => (
          <p key={singleUrl.address}>
            <a href={singleUrl.address} target="_blank" rel="noopener noreferrer">
              <i className="material-icons">link</i>
              &nbsp; {singleUrl.name}
            </a>
          </p>
        ))}
        {message ? <p>{message}</p> : null}
      </div>
    </Popup>
  );
}

GalleryItemPopup.propTypes = {
  images: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  message: PropTypes.string,
  isOpenItem: PropTypes.bool.isRequired,
  setIsOpenItem: PropTypes.func.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

GalleryItemPopup.defaultProps = {
  url: undefined,
  message: undefined,
  technologies: [],
};
