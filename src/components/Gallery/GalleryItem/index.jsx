import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default function GalleryItem({ image, name, url }) {
  return (
    <figure className="gallery-item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={`Imagen del proyecto ${name}`} height="350px" width="350px" />
      </a>
      <figcaption>{name}</figcaption>
    </figure>
  );
}

GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
