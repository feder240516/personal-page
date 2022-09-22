import React from 'react';
import Bio from '../../components/Bio';
import Photo from '../../components/Photo';
import CornerMenu from '../../components/CornerMenu';
import Gallery from '../../components/Gallery';
import './style.scss';

export default function MainPage() {
  return (
    <>
      <div className="main-page">
        <CornerMenu />
        <section className="page-1">
          <Bio />
          <Photo />
        </section>
        <section className="page-2">
          <Gallery />
        </section>
      </div>
    </>
  );
}
