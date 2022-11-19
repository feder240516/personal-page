import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Chip from './Chip';
import Popup from '../../Popup';

export default function GalleryItem({ image, name, url, technologies = [] }) {
  const [isOpenItem, setIsOpenItem] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const onKeyPress = () => {
    setIsOpenItem(true);
  };

  const prevImage = () => {
    setSelectedImage((state) => (state + image.length - 1) % image.length);
  };

  const nextImage = () => {
    setSelectedImage((state) => (state + 1) % image.length);
  };

  return (
    <>
      <div
        className="gallery-item"
        onClick={() => setIsOpenItem(true)}
        role="button"
        tabIndex={0}
        onKeyPress={onKeyPress}
      >
        <figure>
          {/* <a href={url} target="_blank" rel="noopener noreferrer"> */}
          {/* <button  type="button"> */}
          <img src={image[0]} alt={`Imagen del proyecto ${name}`} height="200px" width="200px" />
          {/* </button> */}
          {/* </a> */}
          <section className="tech-chips">
            {technologies.map((tech) => (
              <Chip name={tech} key={tech} />
            ))}
          </section>
          <figcaption>{name}</figcaption>
        </figure>
      </div>
      <Popup isOpen={isOpenItem} setIsOpen={setIsOpenItem}>
        <div className="gallery-item-popup">
          <h2 className="popup-project-title">{name}</h2>
          <div className="image-carousel">
            {image.length > 1 ? (
              <button
                className="carousel-btn carousel-left-arrow"
                type="button"
                onClick={prevImage}
              >
                <i className="material-icons">chevron_left</i>
              </button>
            ) : null}
            <div className="image-wrapper" style={{ '--index': selectedImage }}>
              {image.map((singleImage) => (
                <img
                  src={singleImage}
                  alt={`Imagen del proyecto ${name}`}
                  height="500px"
                  width="500px"
                  key={singleImage}
                />
              ))}
            </div>
            {image.length > 1 ? (
              <button
                className="carousel-btn carousel-right-arrow"
                type="button"
                onClick={nextImage}
              >
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
    </>
  );
}

GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

GalleryItem.defaultProps = {
  technologies: [],
};
