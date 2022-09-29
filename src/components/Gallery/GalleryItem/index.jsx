import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Chip from './Chip';

export default function GalleryItem({
  image, name, url, technologies = [],
}) {
  return (
    <figure className="gallery-item">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={`Imagen del proyecto ${name}`} height="350px" width="350px" />
      </a>
      <section className="tech-chips">
        {technologies.map((tech) => (
          <Chip name={tech} />
        ))}
      </section>
      <figcaption>{name}</figcaption>
    </figure>
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
