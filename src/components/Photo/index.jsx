import React from 'react';
import personalPhoto from '../../assets/img/foto personal.jpg';
import './style.scss';

// https://stackoverflow.com/a/63942277 para pasar el efecto a movil.

export default function Photo() {
  return (
    <div className="photo-wrapper">
      <img id="original-photo" src={personalPhoto} alt="Foto de Federico Reina" />
      <div id="bw-wrapper" className="img-filter-wrapper animated-props animate-vars">
        <div className="wrapped-wrapper">
          <div id="bw-placeholder" className="img-placeholder animated-props" />
          <img
            id="bw-filter"
            className="img-filter animated-props animate-vars"
            src={personalPhoto}
            alt="Foto de Federico Reina"
          />
        </div>
      </div>
      <div id="red-wrapper" className="img-filter-wrapper animated-props animate-vars">
        <div className="wrapped-wrapper">
          <div id="red-placeholder" className="img-placeholder animated-props" />
          <img
            id="red-filter"
            className="img-filter animated-props animate-vars"
            src={personalPhoto}
            alt="Foto de Federico Reina"
          />
        </div>
      </div>
      <div id="teal-wrapper" className="img-filter-wrapper animated-props animate-vars">
        <div className="wrapped-wrapper">
          <div id="teal-placeholder" className="img-placeholder animated-props" />
          <img
            id="teal-filter"
            className="img-filter animated-props animate-vars"
            src={personalPhoto}
            alt="Foto de Federico Reina"
          />
        </div>
      </div>
    </div>
  );
}
