import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';
import './style.scss';

export default function Gallery({ items }) {
  return (
    <section className="gallery">
      {items.map(({ name, img, url, message, technologies }) => (
        <GalleryItem
          image={img}
          name={name}
          url={url}
          message={message}
          technologies={technologies}
          key={name}
        />
      ))}
    </section>
  );
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.objectOf({
      img: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      url: PropTypes.string,
      message: PropTypes.string,
      technologies: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};
