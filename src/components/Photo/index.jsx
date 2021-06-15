import React from 'react';
import personalPhoto from '../../assets/img/foto personal.jpg';
import './style.scss';

export default function Photo() {
  return (
    <div className="photo-wrapper">
      <img id="original-photo" src={personalPhoto} alt="Foto de Federico Reina" height="400" width="300" />
      <div id="bw-wrapper" className="img-filter-wrapper animated-props">
        <div className="wrapped-wrapper">
          <div id="bw-placeholder" className="img-placeholder animated-props" />
          <img id="bw-filter" className="img-filter animated-props" src={personalPhoto} alt="Foto de Federico Reina" height="400" width="300" />
        </div>
      </div>
      <div id="red-wrapper" className="img-filter-wrapper animated-props">
        <div className="wrapped-wrapper">
          <div id="red-placeholder" className="img-placeholder animated-props" />
          <img id="red-filter" className="img-filter animated-props" src={personalPhoto} alt="Foto de Federico Reina" height="400" width="300" />
        </div>
      </div>
      <div id="teal-wrapper" className="img-filter-wrapper animated-props">
        <div className="wrapped-wrapper">
          <div id="teal-placeholder" className="img-placeholder animated-props" />
          <img id="teal-filter" className="img-filter animated-props" src={personalPhoto} alt="Foto de Federico Reina" height="400" width="300" />
        </div>
      </div>
    </div>
  );
}
