import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.scss';
import Chip from './Chip';
import Popup from '../../Popup';

export default function GalleryItem({ image, name, url, technologies = [] }) {
  const [isOpenItem, setIsOpenItem] = useState(false);

  const onKeyPress = () => {
    setIsOpenItem(true);
  }
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
          <img src={image} alt={`Imagen del proyecto ${name}`} height="350px" width="350px" />
          {/* </button> */}
          {/* </a> */}
          <section className="tech-chips">
            {technologies.map((tech) => (
              <Chip name={tech} />
            ))}
          </section>
          <figcaption>{name}</figcaption>
        </figure>
      </div>
      <Popup isOpen={isOpenItem} setIsOpen={setIsOpenItem}>
        <h2 className="popup-project-title">{name}</h2>
        <img src={image} alt={`Imagen del proyecto ${name}`} height="350px" width="350px" />
        <p><a href={url} target="_blank" rel="noopener noreferrer">{name}</a></p>
        
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
