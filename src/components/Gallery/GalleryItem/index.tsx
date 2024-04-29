import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Chip from './Chip';
import GalleryItemPopup from './GalleryItemPopup';
import './style.scss';

export type GalleryItemProps = {
  images: string[];
  imagePlaceholder: string;
  name: string;
  url?: string;
  message?: string;
  subTitle?: string;
  technologies: string[];
  clickable?: boolean;
};

export default function GalleryItem({
  images,
  imagePlaceholder,
  name,
  url,
  message,
  subTitle,
  technologies = [],
  clickable = true,
}: GalleryItemProps) {
  const [isOpenItem, setIsOpenItem] = useState(false);

  const onClick = () => {
    if (clickable) {
      setIsOpenItem(true);
    }
  };

  return (
    <>
      <div
        className={`gallery-item ${clickable ? 'clickable' : ''}`}
        onClick={onClick}
        role="button"
        tabIndex={0}
      >
        {images ? (
          <figure>
            <figcaption>{name}</figcaption>
            <img src={images[0]} alt={`Imagen del proyecto ${name}`} />
            <section className="tech-chips">
              {technologies.map((tech) => (
                <Chip name={tech} key={tech} />
              ))}
            </section>
          </figure>
        ) : (
          <div className="figure-placeholder">
            <div className="placeholder">
              <span>{imagePlaceholder}</span>
            </div>
            <span className="placeholder-subtitle">{subTitle || null}</span>
          </div>
        )}
      </div>
      {clickable && (
        <GalleryItemPopup
          images={images}
          name={name}
          url={url}
          message={message}
          isOpenItem={isOpenItem}
          setIsOpenItem={setIsOpenItem}
        />
      )}
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
