import React from 'react';
import Bio from '../../components/Bio';
import Photo from '../../components/Photo';
import CornerMenu from '../../components/CornerMenu';
import './style.scss';

export default function MainPage() {
  return (
    <>
      <CornerMenu />
      <div className="main-page">
        <Bio />
        <Photo />
      </div>
    </>
  );
}
