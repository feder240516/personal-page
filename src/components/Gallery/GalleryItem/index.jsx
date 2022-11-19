import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Chip from './Chip';
import GalleryItemPopup from './GalleryItemPopup';
import './style.scss';

export default function GalleryItem({ image, name, url, technologies = [] }) {
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
          {/* <a href={url} target="_blank" rel="noopener noreferrer"> */}
          {/* <button  type="button"> */}
          <img src={image[0]} alt={`Imagen del proyecto ${name}`} />
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
      <GalleryItemPopup images={image} isOpenItem={isOpenItem} setIsOpenItem={setIsOpenItem} />
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
