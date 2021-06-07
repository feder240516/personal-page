import React from 'react'
import Banner from '../../components/Banner/Banner'
import Photo from '../../components/Photo/Photo'
import CornerMenu from '../../components/CornerMenu'
export default function MainPage(props) {
  return (
    <>
      <CornerMenu/>
      <Banner/>
      <Photo/>
    </>
  );
}