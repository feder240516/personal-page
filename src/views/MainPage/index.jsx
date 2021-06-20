import React from 'react';
import Banner from '../../components/Banner';
import Photo from '../../components/Photo';
import CornerMenu from '../../components/CornerMenu';

export default function MainPage() {
  return (
    <>
      <CornerMenu />
      <Banner />
      <Photo />
    </>
  );
}
