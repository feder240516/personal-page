import React from 'react';
import PropTypes from 'prop-types';
import GalleryItem from './GalleryItem/index.js';
import './style.scss';

export type GalleryProps = {
  items: {
    name: string;
    img: string[];
    url: string;
    message: string;
    technologies: string[];
  }[];
  andMore: boolean;
};

export default function Gallery({ items, andMore }: GalleryProps) {
  return (
    <section className="gallery">
      {items.map(({ name, img, url, message, technologies }) => (
        <GalleryItem
          images={img}
          name={name}
          url={url}
          message={message}
          technologies={technologies}
          key={name}
        />
      ))}
      {andMore && (
        <GalleryItem
          imagePlaceholder="And more! (Confidential)"
          name=""
          message="I have worked in some other projects that I cannot post here, but I may be able to discuss with you about them in a call or email"
          subTitle="I have worked in some other projects that I cannot post here, but I may be able to discuss with you about them in a call or email"
          technologies={[]}
          key="And more"
          clickable={false}
        />
      )}
    </section>
  );
}
