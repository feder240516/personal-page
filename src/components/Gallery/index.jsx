import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem';
import './style.scss';

export default function Gallery({ items }) {
  return (
    <section className="gallery">
      {items.map(({ name, img, url, technologies }) => (
        <GalleryItem image={img} name={name} url={url} technologies={technologies} />
      ))}
    </section>
  );
}

Gallery.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
