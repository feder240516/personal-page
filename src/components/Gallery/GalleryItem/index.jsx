import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Chip from './Chip';
import GalleryItemPopup from './GalleryItemPopup';
import './style.scss';

export default function GalleryItem({ image, name, url, message, technologies = [] }) {
  const [isOpenItem, setIsOpenItem] = useState(false);

  const onKeyPress = () => {
    setIsOpenItem(true);
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
          <figcaption>{name}</figcaption>
          <img src={image[0]} alt={`Imagen del proyecto ${name}`} />
          <section className="tech-chips">
            {technologies.map((tech) => (
              <Chip name={tech} key={tech} />
            ))}
          </section>
        </figure>
      </div>
      <GalleryItemPopup
        images={image}
        name={name}
        url={url}
        message={message}
        isOpenItem={isOpenItem}
        setIsOpenItem={setIsOpenItem}
      />
    </>
  );
}

GalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  url: PropTypes.string,
  message: PropTypes.string,
  technologies: PropTypes.arrayOf(PropTypes.string),
};

GalleryItem.defaultProps = {
  url: undefined,
  message: undefined,
  technologies: [],
};
