import React from 'react';
import personalPhoto from '../../assets/img/foto personal.jpg';
import './style.scss';

export default function Photo() {
  return (
    <div className="photo-wrapper">
      <img id="original-photo" src={personalPhoto} alt="Foto de Federico Reina" height="400" width="300" />
      <div id="bw-wrapper" className="img-filter-wrapper">
        <div id="bw-placeholder" className="img-placeholder" />
        <img id="bw-filter" className="img-filter" src={personalPhoto} alt="Foto de Federico Reina" height="400" width="300" />
      </div>
      <div id="red-wrapper" className="img-filter-wrapper">
        <div id="red-placeholder" className="img-placeholder" />
        <img id="red-filter" className="img-filter" src={personalPhoto} alt="Foto de Federico Reina" height="400" width="300" />
      </div>
      <div id="teal-wrapper" className="img-filter-wrapper">
        <div id="teal-placeholder" className="img-placeholder" />
        <img id="teal-filter" className="img-filter" src={personalPhoto} alt="Foto de Federico Reina" height="400" width="300" />
      </div>
    </div>
  );
}
