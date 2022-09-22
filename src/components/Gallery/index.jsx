import React from 'react';
import healthAppImg from '../../assets/img/health app.jpg';
import letterImg from '../../assets/img/letter.jpg';
import slidePuzzleImg from '../../assets/img/slidePuzzle.jpg';
import sunBeachImg from '../../assets/img/SunBeach mobile.png';
import sunBeachDesktopImg from '../../assets/img/SunBeach desktop.jpg';
import todoAppImg from '../../assets/img/TodoApp.jpg';
import GalleryItem from './GalleryItem';
import './style.scss';

export default function Gallery() {
  const items = [{
    name: 'Healthcoach',
    img: healthAppImg,
    url: 'https://www.figma.com/proto/ZdExCsfBlBubPsm4ShKcSr/Healthcoach?node-id=591%3A5716&scaling=scale-down&page-id=0%3A1&starting-point-node-id=591%3A5716',
  }, {
    name: 'Sunbeach (Desktop version)',
    img: sunBeachDesktopImg,
    url: 'https://www.figma.com/proto/0s09B2kRdkuE1l2k9hpYH6/Sunbeach-Desktop---Orbit-Design-System?node-id=3%3A3370&scaling=scale-down&page-id=3%3A3370&starting-point-node-id=3%3A3475',
  }, {
    name: 'Sunbeach (Mobile version)',
    img: sunBeachImg,
    url: 'https://www.figma.com/proto/gizIbEfUyfhvpAlTXCMEYT/Sunbeach-(using-Orbit-design-system)?node-id=155%3A1295&scaling=scale-down&page-id=42%3A0&starting-point-node-id=155%3A1295',
  }, {
    name: 'Letter',
    img: letterImg,
    url: 'https://feder240516.github.io/celebration-letter/',
  }, {
    name: 'Slide Puzzle',
    img: slidePuzzleImg,
    url: 'https://feder240516.github.io/SlidePuzzle/',
  }, {
    name: 'Todo App',
    img: todoAppImg,
    url: 'https://feder240516.github.io/TodoApp/',
  }, {
    name: 'Todo App',
    img: todoAppImg,
    url: 'https://feder240516.github.io/TodoApp/',
  }];
  return (
    <section className="gallery">
      {items.map(({ name, img, url }) => (
        <GalleryItem image={img} name={name} url={url} />
      ))}
    </section>
  );
}
