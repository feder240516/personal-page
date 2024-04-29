import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem/index.tsx';
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
      <GalleryItem
        imagePlaceholder="And more! (Confidential)"
        name=""
        message="I have worked in some other projects that I cannot post here, but I may be able to discuss with you about them in a call or email"
        subTitle="I have worked in some other projects that I cannot post here, but I may be able to discuss with you about them in a call or email"
        technologies={[]}
        key="And more"
        clickable={false}
      />
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
